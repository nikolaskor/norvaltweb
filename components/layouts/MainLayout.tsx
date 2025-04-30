import { MainNav } from "@/components/navigation/MainNav";
import { SectionProps } from "@/types";
import { cn } from "@/lib/utils";

interface MainLayoutProps extends SectionProps {
  showNav?: boolean;
}

export function MainLayout({
  children,
  className,
  showNav = true,
}: MainLayoutProps) {
  return (
    <div className={cn("min-h-screen flex flex-col", className)}>
      {showNav && (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center">
            <MainNav />
          </div>
        </header>
      )}
      <main className="flex-1">{children}</main>
    </div>
  );
}
