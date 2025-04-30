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
    icon: <MessageSquare className="h-5 w-5 text-primary" />,
  },
  {
    title: "Voice Agent",
    href: "/tjenester/voice-agent",
    description:
      "Talebasert kundeservice som håndterer telefonsamtaler effektivt.",
    icon: <Mic className="h-5 w-5 text-primary" />,
  },
  {
    title: "Workflow Automatisering",
    href: "/tjenester/workflow",
    description: "Automatiser rutineoppgaver og effektiviser arbeidsprosesser.",
    icon: <Workflow className="h-5 w-5 text-primary" />,
  },
  {
    title: "Kurs & Rådgivning",
    href: "/tjenester/kurs-og-radgivning",
    description: "Skreddersydde AI-kurs og strategisk rådgivning.",
    icon: <BookOpen className="h-5 w-5 text-primary" />,
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
            "block select-none space-y-2 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-primary/5 focus:bg-primary/5",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-3">
            {icon}
            <div className="text-base font-semibold leading-none text-secondary">
              {title}
            </div>
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
          <NavigationMenuTrigger className="text-base font-semibold text-secondary hover:text-primary">
            Tjenester
          </NavigationMenuTrigger>
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
