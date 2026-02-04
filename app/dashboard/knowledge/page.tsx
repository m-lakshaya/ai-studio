"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Upload, FileText, Music, Video, Trash2, ArrowLeft, CheckCircle2, X, Plus, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

function KnowledgeBaseContent() {
    const searchParams = useSearchParams();
    const agentName = searchParams.get("agent") || "New AI Agent";
    const [isUploading, setIsUploading] = useState(false);
    const [showToast, setShowToast] = useState(true);

    const files = [
        { name: "Product_Documentation_v2.pdf", size: "2.4 MB", status: "Indexed", progress: 100, type: "pdf" },
        { name: "Customer_Feedback_Q3.docx", size: "840 KB", status: "Vectorizing...", progress: 65, type: "doc" },
        { name: "Onboarding_Brief.mp3", size: "12.2 MB", status: "Transcribing...", progress: 15, type: "audio" },
    ];

    return (
        <div className="p-12 max-w-6xl mx-auto space-y-12 min-h-screen pb-24 text-foreground">
            {/* Header Area */}
            <div className="space-y-4">
                <div className="flex items-center gap-4 mb-2">
                    <div className="bg-primary/10 text-primary p-2 rounded-lg">
                        <Bot className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-black uppercase tracking-widest text-primary">Training Mode • {agentName}</span>
                </div>
                <h1 className="text-5xl font-black tracking-tight">Build your Knowledge Base</h1>
                <p className="text-muted-foreground text-xl font-medium max-w-4xl leading-relaxed">
                    Upload documents, audio, or video files to train <span className="text-foreground font-bold">{agentName}</span> with domain-specific intelligence.
                </p>
            </div>

            {/* Upload Zone */}
            <div
                className={cn(
                    "border-2 border-dashed border-primary/20 rounded-[2.5rem] bg-card p-20 flex flex-col items-center justify-center transition-all hover:bg-primary/[0.02] hover:border-primary/40 group cursor-pointer shadow-inner relative overflow-hidden",
                    isUploading && "border-primary bg-primary/[0.03]"
                )}
            >
                <div className="flex gap-6 mb-10 relative z-10">
                    <div className="w-16 h-16 bg-secondary/50 rounded-2xl flex items-center justify-center text-muted-foreground group-hover:text-primary transition-all group-hover:scale-110 shadow-sm border border-border">
                        <FileText className="w-8 h-8" />
                    </div>
                    <div className="w-16 h-16 bg-secondary/50 rounded-2xl flex items-center justify-center text-muted-foreground group-hover:text-primary transition-all group-hover:scale-110 shadow-sm border border-border">
                        <FileText className="w-8 h-8 rotate-12" />
                    </div>
                    <div className="w-16 h-16 bg-secondary/50 rounded-2xl flex items-center justify-center text-muted-foreground group-hover:text-primary transition-all group-hover:scale-110 shadow-sm border border-border">
                        <Video className="w-8 h-8 -rotate-6" />
                    </div>
                </div>

                <h3 className="text-2xl font-black mb-2 relative z-10">Drag and drop files here</h3>
                <p className="text-sm text-muted-foreground mb-12 text-center font-medium opacity-70 relative z-10">
                    Support for PDF, DOCX, MP3, MP4 (Max 50MB per file)
                </p>

                <button className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-2xl font-black flex items-center gap-3 transition-all transform active:scale-95 shadow-2xl shadow-primary/30 relative z-10 hover:translate-y-[-2px]">
                    <Upload className="w-6 h-6" />
                    Browse Files
                </button>
            </div>

            {/* File List Section */}
            <div className="space-y-8">
                <h2 className="text-3xl font-black tracking-tight">Uploaded Knowledge</h2>
                <div className="space-y-4">
                    {files.map((file, i) => (
                        <div key={i} className="bg-card border border-border rounded-3xl p-6 flex items-center gap-8 group hover:border-primary/30 transition-all hover:shadow-lg shadow-sm">
                            <div className="w-14 h-14 bg-secondary/50 rounded-2xl flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors border border-border">
                                {file.type === 'pdf' ? <FileText className="w-7 h-7" /> : file.type === 'audio' ? <Music className="w-7 h-7" /> : <FileText className="w-7 h-7" />}
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-lg font-bold truncate">{file.name}</span>
                                </div>
                                <div className="flex items-center gap-4 text-xs text-muted-foreground font-black uppercase tracking-widest opacity-60">
                                    <span>{file.size}</span>
                                    {file.status === "Indexed" ? (
                                        <span className="text-green-500 flex items-center gap-1.5 bg-green-500/10 px-2 py-0.5 rounded-full">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Indexed
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-1.5 text-primary">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> {file.status}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-center gap-8 min-w-[320px]">
                                <div className="flex-1 space-y-2">
                                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden border border-border shadow-inner">
                                        <div
                                            className={cn(
                                                "h-full transition-all duration-1000 rounded-full",
                                                file.progress === 100 ? "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.3)]" : "bg-primary animate-pulse shadow-[0_0_10px_rgba(37,99,235,0.3)]"
                                            )}
                                            style={{ width: `${file.progress}%` }}
                                        />
                                    </div>
                                </div>
                                <span className="text-sm font-black w-12 text-right tracking-tighter">{file.progress}%</span>
                                <button className="text-muted-foreground hover:text-destructive transition-colors p-2.5 hover:bg-destructive/10 rounded-xl border border-transparent hover:border-destructive/20">
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Navigation */}
            <div className="pt-12 flex border-t border-border items-center justify-between">
                <Link href="/dashboard" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all font-black uppercase tracking-widest text-xs group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Dashboard
                </Link>
                <div className="flex gap-6">
                    <button className="bg-secondary hover:bg-secondary/80 px-8 py-4 rounded-2xl font-black transition-all border border-border shadow-sm active:scale-95 text-xs uppercase tracking-widest">
                        Add More Files
                    </button>
                    <Link href="/dashboard/agents/preview" className="bg-primary hover:bg-primary/90 text-white px-12 py-4 rounded-2xl font-black transition-all shadow-xl shadow-primary/20 hover:translate-y-[-2px] active:scale-95 flex items-center gap-3 uppercase text-xs tracking-[0.2em]">
                        Next
                        <Plus className="w-4 h-4" />
                    </Link>
                </div>
            </div>

            {/* Success Toast */}
            {showToast && (
                <div className="fixed bottom-12 right-12 bg-card border border-border shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] rounded-[2rem] p-6 flex items-center gap-6 animate-in slide-in-from-bottom-8 duration-500 ring-4 ring-primary/5 dark:ring-white/5 pr-16 group">
                    <div className="bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.4)] text-white p-3 rounded-2xl">
                        <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div>
                        <p className="font-black text-xl leading-tight">Upload successful</p>
                        <p className="text-sm text-muted-foreground font-medium mt-1">3 files added to knowledge base</p>
                    </div>
                    <button onClick={() => setShowToast(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground p-1">
                        <X className="w-5 h-5" />
                    </button>
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem] -z-10" />
                </div>
            )}
        </div>
    );
}

export default function KnowledgeBasePage() {
    return (
        <Suspense fallback={
            <div className="p-12 max-w-6xl mx-auto space-y-12 animate-pulse">
                <div className="h-10 bg-secondary rounded-xl w-1/3"></div>
                <div className="h-64 bg-secondary rounded-3xl w-full"></div>
            </div>
        }>
            <KnowledgeBaseContent />
        </Suspense>
    );
}
