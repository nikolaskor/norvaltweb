"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Bot, // Example Icon for Chat Agent
  Mic, // Example Icon for Voice Agent
  Workflow, // Example Icon for Workflow Automation
  GraduationCap, // Example Icon for AI Kurs
  Menu,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/Button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const solutions: {
  title: string;
  href: string;
  description: string;
  icon: React.ElementType;
}[] = [
  {
    title: "Chat Agent",
    href: "/losninger/chat-agent",
    description:
      "Intelligent kundeservice som svarer på spørsmål døgnet rundt.",
    icon: Bot,
  },
  {
    title: "Voice Agent",
    href: "/losninger/voice-agent",
    description:
      "Talebasert kundeservice som håndterer telefonsamtaler automatisk.",
    icon: Mic,
  },
  {
    title: "Arbeidsflyt Automatisering",
    href: "/losninger/arbeidsflyt-automatisering",
    description: "Automatiser rutineoppgaver og effektiviser arbeidsprosesser.",
    icon: Workflow,
  },
  {
    title: "AI Kurs og Rådgivning",
    href: "/losninger/ai-kurs",
    description:
      "Øk kompetansen internt med skreddersydde AI-kurs og rådgivning.",
    icon: GraduationCap,
  },
];

export default function NavigationMain() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        {" "}
        {/* Increased height */}
        {/* Logo */}
        <Link
          href="/"
          className="mr-8 flex items-center space-x-2 transition-opacity hover:opacity-80"
        >
          {" "}
          {/* Increased margin-right and added hover effect */}
          {/* Placeholder for logo if you have one */}
          {/* <img src="/logo.svg" alt="Norvalt Logo" className="h-8 w-auto" /> */}
          <span className="text-xl font-bold tracking-tight">Norvalt</span>{" "}
          {/* Increased font size and added tracking */}
        </Link>
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          {" "}
          {/* Use lg breakpoint */}
          <NavigationMenuList className="gap-1">
            {" "}
            {/* Added gap between items */}
            {/* Løsninger Megamenu */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-12 px-5 text-base">
                {" "}
                {/* Increased height, padding, and font size */}
                Løsninger
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-4 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {" "}
                  {/* Increased gap and padding */}
                  {solutions.map((solution) => (
                    <ListItem
                      key={solution.title}
                      title={solution.title}
                      href={solution.href}
                      icon={solution.icon}
                    >
                      {solution.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/* Other Links */}
            <NavigationMenuItem>
              <Link href="/industri" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "h-12 px-5 text-base" /* Increased height, padding, and font size */
                  )}
                >
                  Industri
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/om-oss" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "h-12 px-5 text-base"
                  )}
                >
                  Om Oss
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/kontakt" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "h-12 px-5 text-base"
                  )}
                >
                  Kontakt Oss
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/* Action Buttons & Mobile Menu Trigger */}
        <div className="flex items-center gap-3">
          {" "}
          {/* Increased gap */}
          <div className="hidden lg:flex gap-3">
            {" "}
            {/* Increased gap */} {/* Use lg breakpoint */}
            <Button
              variant="ghost"
              className="h-12 px-5 text-base font-medium transition-colors" /* Increased height, padding, font size */
            >
              Logg inn
            </Button>
            <Link href="/contact" passHref>
              <Button
                className="h-12 px-6 text-base font-medium" /* Increased height, padding, font size */
              >
                Kom i gang
              </Button>
            </Link>
          </div>
          {/* Mobile Menu Trigger */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 lg:hidden" /* Increased size */
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Åpne meny</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0 pt-12">
              {" "}
              {/* Increased top padding */}
              <Link
                href="/"
                className="flex items-center px-7 mb-8" /* Increased margin */
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-xl font-bold tracking-tight">
                  Norvalt
                </span>
              </Link>
              <nav className="flex flex-col space-y-5 px-7">
                {" "}
                {/* Increased spacing */}
                <span className="font-semibold text-base text-muted-foreground">
                  {" "}
                  {/* Increased font size */}
                  Løsninger
                </span>
                {solutions.map((solution) => (
                  <Link
                    key={solution.title}
                    href={solution.href}
                    className="text-base font-medium transition-colors hover:text-primary pl-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {solution.title}
                  </Link>
                ))}
                <Link
                  href="/industri"
                  className="text-base font-medium transition-colors hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Industri
                </Link>
                <Link
                  href="/om-oss"
                  className="text-base font-medium transition-colors hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Om Oss
                </Link>
                <Link
                  href="/kontakt"
                  className="text-base font-medium transition-colors hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Kontakt Oss
                </Link>
              </nav>
              <div className="px-7 mt-8 flex flex-col gap-3">
                {" "}
                {/* Increased margin and gap */}
                <Button
                  variant="ghost"
                  className="h-12 text-base font-medium" /* Increased height and font size */
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Logg inn
                </Button>
                <Link href="/contact" passHref>
                  <Button
                    className="h-12 text-base font-medium" /* Increased height and font size */
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Kom i gang
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

// Helper component for megamenu items
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: React.ElementType }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-2 rounded-md p-4 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-3">
            <Icon className="h-5 w-5 text-primary" />
            <div className="text-base font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
