import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/NavigationMenu";
import { MessageSquare, Mic, Workflow, BookOpen } from "lucide-react";

const services = [
  {
    title: "Chat Agent",
    href: "/tjenester/chat-agent",
    description:
      "Intelligent kundeservice som svarer på spørsmål døgnet rundt.",
    icon: <MessageSquare className="h-4 w-4" />,
  },
  {
    title: "Voice Agent",
    href: "/tjenester/voice-agent",
    description:
      "Talebasert kundeservice som håndterer telefonsamtaler effektivt.",
    icon: <Mic className="h-4 w-4" />,
  },
  {
    title: "Workflow Automatisering",
    href: "/tjenester/workflow",
    description: "Automatiser rutineoppgaver og effektiviser arbeidsprosesser.",
    icon: <Workflow className="h-4 w-4" />,
  },
  {
    title: "Kurs & Rådgivning",
    href: "/tjenester/kurs-og-radgivning",
    description: "Skreddersydde AI-kurs og strategisk rådgivning.",
    icon: <BookOpen className="h-4 w-4" />,
  },
];

const ListItem = ({
  className,
  title,
  href,
  description,
  icon,
  ...props
}: {
  className?: string;
  title: string;
  href: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {icon}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {description}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export function ServicesNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Tjenester</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {services.map((service) => (
                <ListItem key={service.href} {...service} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
