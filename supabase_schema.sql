-- Enable the pgvector extension to work with embedding vectors
create extension if not exists vector;

-- Create a table to store your documents
create table if not exists documents (
  id bigserial primary key,
  content text, -- corresponds to Document.pageContent
  metadata jsonb, -- corresponds to Document.metadata
  embedding vector(1536) -- 1536 works for OpenAI embeddings
);

-- Function to match documents
create or replace function match_documents (
  query_embedding vector(1536),
  match_threshold float,
  match_count int
)
returns table (
  id bigint,
  content text,
  metadata jsonb,
  similarity float
)
language plpgsql
as $$
begin
  return query
  select
    documents.id,
    documents.content,
    documents.metadata,
    1 - (documents.embedding <=> query_embedding) as similarity
  from documents
  where 1 - (documents.embedding <=> query_embedding) > match_threshold
  order by documents.embedding <=> query_embedding
  limit match_count;
end;
$$;

-- Create Agents Table
create table if not exists agents (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null,
  name text not null,
  description text,
  system_prompt text,
  public_id text unique default encode(gen_random_bytes(6), 'hex'),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Add agent_id to documents to link them
alter table documents add column if not exists agent_id uuid references agents(id) on delete cascade;

-- Enable RLS
alter table agents enable row level security;
alter table documents enable row level security;

-- RLS Policies
create policy "Users can view their own agents"
  on agents for select
  using (auth.uid() = user_id);

create policy "Users can insert their own agents"
  on agents for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own agents"
  on agents for update
  using (auth.uid() = user_id);

create policy "Users can delete their own agents"
  on agents for delete
  using (auth.uid() = user_id);

-- Documents RLS (Linked via agent -> user)
-- For simplicity in this SQL, we might need a join, or just trust the agent_id verification in app logic
-- But better to enforce:
create policy "Users can manage documents of their agents"
  on documents
  using (
    exists (
      select 1 from agents
      where agents.id = documents.agent_id
      and agents.user_id = auth.uid()
    )
  );
