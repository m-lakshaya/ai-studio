import Link from "next/link";
import { Plus, Bot, MessageSquare, Database, Search, Edit3, Share2, FileText, Link as LinkIcon, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
    return (
        <div className="p-12 max-w-7xl mx-auto space-y-12 text-foreground">
            {/* Header */}
            <div className="flex justify-between items-end">
                <div className="space-y-2">
                    <h1 className="text-5xl font-black tracking-tight mb-2">Your AI Agents</h1>
                    <p className="text-muted-foreground text-lg font-medium">Manage and deploy your custom-trained intelligence.</p>
                </div>
                <Link href="/dashboard/knowledge?agent=New%20Agent" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all shadow-xl shadow-primary/20 hover:translate-y-[-2px] active:scale-95">
                    <Plus className="w-5 h-5" />
                    Create New AI
                </Link>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { label: "TOTAL CHATS", value: "12,540", trend: "+12.5%", color: "text-green-500" },
                    { label: "AVG RESPONSE", value: "1.2s", trend: "-0.3s", color: "text-green-500" },
                    { label: "STORAGE USED", value: "840MB", sub: "/ 2GB" }
                ].map((stat, i) => (
                    <div key={i} className="bg-card border border-border rounded-[2.5rem] p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">{stat.label}</p>
                        <div className="flex items-baseline gap-3 mt-4">
                            <span className="text-4xl font-black">{stat.value}</span>
                            {stat.trend && <span className={cn("text-xs font-bold", stat.color)}>{stat.trend}</span>}
                            {stat.sub && <span className="text-xs text-muted-foreground font-bold">{stat.sub}</span>}
                        </div>
                    </div>
                ))}
            </div>

            {/* Search Bar */}
            <div className="relative group max-w-2xl text-foreground">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input
                    type="text"
                    placeholder="Search your agents..."
                    className="w-full bg-card border border-border rounded-2xl py-5 pl-14 pr-6 outline-none focus:ring-2 ring-primary/20 transition-all font-semibold italic placeholder:font-medium shadow-sm"
                />
            </div>

            {/* Agent Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Card 1 - Active */}
                <Link href="/dashboard/knowledge?agent=Customer%20Support%20Bot" className="bg-card border border-border rounded-[2.5rem] p-8 hover:border-primary/40 transition-all group flex flex-col relative overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 text-left no-underline">
                    <div className="absolute top-0 right-0 p-6">
                        <span className="bg-green-500/10 text-green-500 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full flex items-center gap-2 border border-green-500/10">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                            Active
                        </span>
                    </div>

                    <div className="bg-purple-600/10 w-16 h-16 rounded-[1.25rem] flex items-center justify-center text-purple-600 dark:text-purple-400 mb-8 border border-purple-500/20 shadow-inner">
                        <Bot className="w-9 h-9" />
                    </div>

                    <h3 className="text-2xl font-black mb-3 group-hover:text-primary transition-colors">Customer Support Bot</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-10 h-10 line-clamp-2 font-medium">
                        Trained on knowledge base v2.4, handles general inquiries and tickets.
                    </p>

                    <div className="flex justify-between items-center py-6 border-t border-border mt-auto">
                        <div className="flex items-center gap-4">
                            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Sources</p>
                            <div className="flex gap-2">
                                <div className="w-8 h-8 bg-secondary rounded-xl flex items-center justify-center"><FileText className="w-4 h-4 text-muted-foreground" /></div>
                                <div className="w-8 h-8 bg-secondary rounded-xl flex items-center justify-center"><LinkIcon className="w-4 h-4 text-muted-foreground" /></div>
                                <div className="w-8 h-8 bg-secondary rounded-xl flex items-center justify-center"><MessageSquare className="w-4 h-4 text-muted-foreground" /></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mt-4 text-muted-foreground">
                        <span className="text-[10px] font-bold italic uppercase tracking-tighter opacity-70">Updated 2h ago</span>
                        <div className="flex gap-2">
                            <div className="p-2.5 bg-secondary rounded-xl hover:bg-secondary/70 transition-colors border border-border"><Edit3 className="w-4 h-4" /></div>
                            <div className="p-2.5 bg-secondary rounded-xl hover:bg-secondary/70 transition-colors border border-border"><Share2 className="w-4 h-4" /></div>
                        </div>
                    </div>
                </Link>

                {/* Card 2 - Training */}
                <Link href="/dashboard/knowledge?agent=Internal%20Research%20Tool" className="bg-card border border-border rounded-[2.5rem] p-8 hover:border-primary/40 transition-all group flex flex-col relative overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 text-left no-underline">
                    <div className="absolute top-0 right-0 p-6">
                        <span className="bg-blue-500/10 text-blue-500 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full flex items-center gap-2 border border-blue-500/10">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                            Training
                        </span>
                    </div>

                    <div className="bg-sky-600/10 w-16 h-16 rounded-[1.25rem] flex items-center justify-center text-sky-600 dark:text-sky-400 mb-8 border border-sky-500/20 shadow-inner">
                        <Database className="w-9 h-9" />
                    </div>

                    <h3 className="text-2xl font-black mb-3 group-hover:text-primary transition-colors">Internal Research Tool</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-8 h-10 line-clamp-2 font-medium">
                        Synthesizing 12 PDF datasets for executive summary generation.
                    </p>

                    <div className="flex justify-between items-center py-6 border-t border-border mt-auto">
                        <div className="flex items-center gap-4">
                            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Sources</p>
                            <div className="flex gap-2">
                                <div className="w-8 h-8 bg-secondary rounded-xl flex items-center justify-center"><MessageSquare className="w-4 h-4 text-muted-foreground" /></div>
                                <div className="w-8 h-8 bg-secondary rounded-xl flex items-center justify-center"><FileText className="w-4 h-4 text-muted-foreground" /></div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3 mt-4">
                        <div className="w-full bg-secondary rounded-full h-2 overflow-hidden border border-border">
                            <div className="bg-primary h-full animate-pulse shadow-[0_0_15px_rgba(37,99,235,0.3)]" style={{ width: '65%' }}></div>
                        </div>
                        <div className="flex justify-between text-[10px] font-black text-muted-foreground tracking-widest uppercase">
                            <span>65% Complete</span>
                            <span>~14 min left</span>
                        </div>
                    </div>
                </Link>

                {/* Deploy New Card */}
                <Link href="/dashboard/knowledge?agent=New%20Agent" className="border-2 border-dashed border-border rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-muted-foreground hover:bg-primary/[0.02] hover:text-foreground hover:border-primary transition-all cursor-pointer h-full min-h-[350px] gap-8 group shadow-inner no-underline">
                    <div className="bg-card border border-border p-8 rounded-[2rem] shadow-xl group-hover:scale-110 group-hover:shadow-primary/10 group-hover:border-primary transition-all duration-500">
                        <Plus className="w-12 h-12 text-primary" />
                    </div>
                    <div className="text-center space-y-2">
                        <p className="text-2xl font-black text-foreground">Deploy New Model</p>
                        <p className="text-[10px] font-black mt-1 tracking-[0.3em] text-muted-foreground group-hover:text-primary transition-colors uppercase">PRO TIER • $0.02/TOKEN</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
