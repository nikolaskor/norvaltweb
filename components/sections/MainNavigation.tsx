"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
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
} from "@/components/ui/NavigationMenu";
import { Button } from "@/components/ui/Button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { ChevronDown } from "lucide-react";

const solutions: {
  title: string;
  href: string;
  description: string;
  icon: React.ElementType;
}[] = [
  {
    title: "Chat Agent",
    href: "/tjenester/chat-agent",
    description:
      "Intelligent kundeservice som svarer på spørsmål døgnet rundt.",
    icon: Bot,
  },
  {
    title: "Voice Agent",
    href: "/tjenester/voice-agent",
    description:
      "Talebasert kundeservice som håndterer telefonsamtaler automatisk.",
    icon: Mic,
  },
  {
    title: "Arbeidsflyt Automatisering",
    href: "/tjenester/workflow",
    description: "Automatiser rutineoppgaver og effektiviser arbeidsprosesser.",
    icon: Workflow,
  },
  {
    title: "AI Kurs og Rådgivning",
    href: "/tjenester/kurs-og-radgivning",
    description:
      "Øk kompetansen internt med skreddersydde AI-kurs og rådgivning.",
    icon: GraduationCap,
  },
];

export default function NavigationMain() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [currentLanguage, setCurrentLanguage] = React.useState("NO");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        {" "}
        {/* Increased height */}
        {/* Logo */}
        <Link
          href="/"
          className="mr-8 flex items-center transition-opacity hover:opacity-80"
          aria-label="Norvalt Home"
        >
          <Image
            src="/logos/norvalt-logo-color.png"
            alt="Norvalt Logo"
            width={160}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </Link>
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex z-[100]">
          {" "}
          {/* Use lg breakpoint */}
          <NavigationMenuList className="gap-1">
            {" "}
            {/* Added gap between items */}
            {/* Løsninger Megamenu */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-12 px-5 text-sm">
                {" "}
                {/* Increased height, padding, and font size */}
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent className="z-[100] bg-white shadow-lg rounded-xl">
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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
              <Link href="/why-ai" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "h-12 px-5 text-sm"
                  )}
                >
                  Why AI?
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/case-studies" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "h-12 px-5 text-sm"
                  )}
                >
                  Case Studies
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/om-oss" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "h-12 px-5 text-sm"
                  )}
                >
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/kontakt" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "h-12 px-5 text-sm"
                  )}
                >
                  Contact
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
            {/* Language Dropdown (Desktop) */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="lg"
                  className="flex items-center gap-1"
                >
                  {/* TODO: Add flag icon based on currentLanguage */}
                  {currentLanguage}
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setCurrentLanguage("NO")}>
                  {/* TODO: Add Norwegian flag icon */} NO
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setCurrentLanguage("EN")}>
                  {/* TODO: Add British flag icon */} EN
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* Book a demo Button */}
            <Link href="/contact" passHref>
              <Button size="lg">Book et møte</Button>
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
                  Services
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
                  href="/why-ai"
                  className="text-base font-medium transition-colors hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Why AI?
                </Link>
                <Link
                  href="/case-studies"
                  className="text-base font-medium transition-colors hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Case Studies
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
                {/* Language Dropdown (Mobile) */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="h-12 text-base font-medium w-full justify-start flex items-center gap-2"
                    >
                      {/* TODO: Add flag icon based on currentLanguage */}
                      {currentLanguage}
                      <ChevronDown className="h-4 w-4 opacity-50" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem
                      onClick={() => {
                        setCurrentLanguage("NO");
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {/* TODO: Add Norwegian flag icon */} NO
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => {
                        setCurrentLanguage("EN");
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {/* TODO: Add British flag icon */} EN
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                {/* Book a demo Button (Mobile) */}
                <Link href="/contact" passHref>
                  <Button
                    className="h-12 text-base font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Book a demo
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
  React.ComponentPropsWithoutRef<"a"> & {
    icon: React.ElementType;
  }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50/50 hover:text-orange-600",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-orange-50 text-orange-600">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-medium leading-none mb-1">
                {title}
              </div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
              </p>
            </div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
