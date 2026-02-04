"use client";

import { useState } from "react";
import { MessageSquare, Settings, Share2, Palette, Activity, ShieldCheck, Send, Upload, Copy, RefreshCcw, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AgentConfigPage() {
    const [primaryColor, setPrimaryColor] = useState("#2563eb");
    const [welcomeMessage, setWelcomeMessage] = useState("Hello! I'm your AI assistant trained on internal data. How can I help you today?");

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Settings Panel (Left) */}
            <aside className="w-80 bg-card border-r border-border flex flex-col overflow-auto">
                <div className="p-6 border-b border-border">
                    <h2 className="text-xl font-bold">Agent Settings</h2>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1 font-semibold">Chatbot v1.2.0-stable</p>
                </div>

                <nav className="p-4 space-y-1">
                    <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-secondary/30 transition-colors">
                        <Palette className="w-4 h-4" /> Appearance
                    </button>
                    <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-secondary/30 transition-colors">
                        <Activity className="w-4 h-4" /> Behavior
                    </button>
                    <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium bg-primary/10 text-primary">
                        <Share2 className="w-4 h-4" /> Integration
                    </button>
                    <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-secondary/30 transition-colors">
                        <Activity className="w-4 h-4" /> Analytics
                    </button>
                    <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-secondary/30 transition-colors">
                        <ShieldCheck className="w-4 h-4" /> Privacy & Security
                    </button>
                </nav>
            </aside>

            {/* Preview Area (Center) */}
            <main className="flex-1 bg-background p-10 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute top-10 left-10">
                    <h1 className="text-3xl font-bold mb-2">Live Preview</h1>
                    <p className="text-muted-foreground">See how your chatbot appears on your website in real-time.</p>
                </div>

                {/* Mock Browser/Site */}
                <div className="w-full max-w-2xl bg-card rounded-2xl border border-border overflow-hidden shadow-2xl scale-90 md:scale-100">
                    <div className="h-10 bg-secondary border-b border-border flex items-center px-4 gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                        </div>
                        <div className="flex-1 mx-4 h-6 bg-background rounded-md border border-border flex items-center px-3">
                            <span className="text-[10px] text-muted-foreground">yourdomain.com</span>
                        </div>
                    </div>

                    <div className="h-96 bg-background p-8 flex flex-col gap-4 opacity-30 select-none">
                        <div className="w-2/3 h-8 bg-secondary rounded-lg" />
                        <div className="w-1/2 h-4 bg-secondary rounded-lg" />
                        <div className="grid grid-cols-3 gap-4 mt-8">
                            <div className="aspect-square bg-secondary rounded-xl" />
                            <div className="aspect-square bg-secondary rounded-xl" />
                            <div className="aspect-square bg-secondary rounded-xl" />
                        </div>
                    </div>

                    {/* Floating Chat Widget Mockup */}
                    <div className="absolute bottom-6 right-6 w-80 shadow-2xl rounded-2xl overflow-hidden border border-white/10 animate-in slide-in-from-bottom-5 duration-500">
                        <div
                            className="p-4 flex items-center justify-between text-white"
                            style={{ backgroundColor: primaryColor }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center overflow-hidden border border-white/10">
                                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100" className="w-full h-full object-cover" alt="avatar" />
                                </div>
                                <div>
                                    <p className="font-bold text-sm">Support Bot</p>
                                    <p className="text-[10px] opacity-80">Online | Replies in seconds</p>
                                </div>
                            </div>
                            <X className="w-4 h-4 opacity-50" />
                        </div>
                        <div className="bg-card p-4 h-64 flex flex-col justify-end gap-4 overflow-auto">
                            <div className="bg-secondary p-3 rounded-2xl rounded-tl-none text-xs max-w-[85%] self-start border border-border">
                                {welcomeMessage}
                            </div>
                            <div className="mt-auto pt-4 border-t border-border flex items-center gap-2">
                                <div className="flex-1 bg-secondary rounded-full px-4 py-2 text-[10px] text-muted-foreground">
                                    Type a message...
                                </div>
                                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: primaryColor }}>
                                    <Send className="w-3.5 h-3.5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Configuration Sidebar (Right) */}
            <aside className="w-96 bg-card border-l border-border flex flex-col overflow-auto">
                <div className="p-6 space-y-8">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold">Configuration</h2>
                        <button className="bg-primary text-primary-foreground px-4 py-1.5 rounded-lg text-sm font-bold shadow-lg shadow-primary/20">
                            Deploy Agent
                        </button>
                    </div>

                    {/* Appearance Form */}
                    <div className="space-y-6">
                        <div className="space-y-3">
                            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Primary Brand Color</label>
                            <div className="flex gap-3">
                                <div className="w-12 h-12 rounded-lg border border-border overflow-hidden p-1 bg-background">
                                    <div className="w-full h-full rounded cursor-pointer" style={{ backgroundColor: primaryColor }} />
                                </div>
                                <input
                                    type="text"
                                    value={primaryColor}
                                    onChange={(e) => setPrimaryColor(e.target.value)}
                                    className="flex-1 bg-background border border-border rounded-lg px-4 text-sm font-mono focus:ring-1 ring-primary outline-none"
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Bot Identity</label>
                            <div className="border border-dashed border-border rounded-xl p-4 flex items-center gap-4 hover:border-primary/50 transition-colors cursor-pointer group">
                                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100" className="w-12 h-12 rounded-full border border-border" alt="avatar" />
                                <div className="flex-1">
                                    <p className="text-sm font-semibold group-hover:text-primary">Update Avatar</p>
                                    <p className="text-[10px] text-muted-foreground">JPG, PNG or SVG. Max 2MB.</p>
                                </div>
                                <Upload className="w-4 h-4 text-muted-foreground" />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Welcome Message</label>
                            <textarea
                                value={welcomeMessage}
                                onChange={(e) => setWelcomeMessage(e.target.value)}
                                rows={4}
                                className="w-full bg-background border border-border rounded-lg p-4 text-sm focus:ring-1 ring-primary outline-none resize-none"
                            />
                        </div>

                        <div className="pt-6 border-t border-border space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Embed Code</label>
                                <button className="text-[10px] font-bold text-primary flex items-center gap-1">
                                    <Copy className="w-3 h-3" /> Copy Code
                                </button>
                            </div>
                            <div className="bg-background rounded-lg p-4 border border-border font-mono text-[10px] text-purple-400 overflow-hidden relative">
                                <pre className="whitespace-pre-wrap leading-relaxed">
                                    {`<script>
  window.AIAgentConfig = {
    agentId: 'agt_8f2x9sL',
    primaryColor: '${primaryColor}',
    welcomeMessage: '${welcomeMessage.substring(0, 10)}...'
  };
</script>
<script src="https://cdn.aiagent.io/widget.js" async></script>`}
                                </pre>
                            </div>
                            <p className="text-[10px] text-muted-foreground">Paste this snippet into your website's <code>&lt;body&gt;</code> or <code>&lt;head&gt;</code> section to activate the chatbot.</p>
                        </div>
                    </div>

                    <div className="flex gap-4 pt-6">
                        <button className="flex-1 bg-primary text-primary-foreground py-3 rounded-xl font-bold transition-all shadow-lg shadow-primary/20">
                            Save Changes
                        </button>
                        <button className="p-3 bg-secondary rounded-xl hover:bg-secondary/70 transition-colors">
                            <RefreshCcw className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </aside>
        </div>
    );
}
