import Link from "next/link";
import Image from "next/image";
import { LayoutDashboard, Bot, Settings, Database, LogOut, BarChart3, Receipt, HelpCircle, FileText } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen w-full bg-background transition-colors duration-300">
            {/* Sidebar */}
            <aside className="w-72 bg-card border-r border-border hidden md:flex flex-col">
                <div className="p-8 pb-4">
                    <Link href="/dashboard" className="flex items-center gap-3 group">
                        <div className="bg-primary p-2 rounded-xl group-hover:scale-110 transition-transform shadow-lg shadow-primary/20 text-white">
                            <Bot className="w-6 h-6" />
                        </div>
                        <div>
                            <h1 className="font-bold text-lg leading-tight">AI Studio</h1>
                            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">Enterprise Tier</p>
                        </div>
                    </Link>
                </div>

                <nav className="flex-1 px-4 py-8 space-y-2">
                    <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl bg-primary/10 text-primary border border-primary/10 transition-all">
                        <Bot className="w-5 h-5" />
                        My AIs
                    </Link>
                    <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl text-muted-foreground hover:bg-secondary/50 hover:text-foreground transition-all">
                        <BarChart3 className="w-5 h-5" />
                        Analytics
                    </Link>
                    <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl text-muted-foreground hover:bg-secondary/50 hover:text-foreground transition-all">
                        <Receipt className="w-5 h-5" />
                        Billing
                    </Link>
                    <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl text-muted-foreground hover:bg-secondary/50 hover:text-foreground transition-all">
                        <Settings className="w-5 h-5" />
                        Settings
                    </Link>
                </nav>

                <div className="p-4 space-y-2 mb-4">
                    <ThemeToggle />
                    <Link href="/docs" className="flex items-center gap-3 px-4 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground">
                        <FileText className="w-4 h-4" />
                        DOCS
                    </Link>
                    <Link href="/support" className="flex items-center gap-3 px-4 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground">
                        <HelpCircle className="w-4 h-4" />
                        SUPPORT
                    </Link>

                    <div className="mt-4 p-4 bg-secondary/30 border border-border rounded-2xl flex items-center gap-3 group cursor-pointer hover:border-primary/50 transition-all shadow-sm">
                        <div className="w-10 h-10 rounded-full bg-orange-200 border-2 border-primary/20 overflow-hidden shadow-inner flex items-center justify-center relative">
                            <Image
                                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop"
                                alt="User"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs font-bold truncate">Alex Rivard</p>
                            <p className="text-[10px] text-muted-foreground truncate font-medium">alex@studio.ai</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto bg-background/50 transition-colors duration-300">
                {children}
            </main>
        </div>
    );
}
