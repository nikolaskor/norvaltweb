import Link from "next/link";
import { NavItem } from "@/types";
import { cn } from "@/lib/utils";

interface MainNavProps {
  items?: NavItem[];
  className?: string;
}

export function MainNav({ items, className }: MainNavProps) {
  return (
    <nav className={cn("flex items-center space-x-8", className)}>
      {items?.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-base font-semibold text-secondary transition-colors hover:text-primary"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
