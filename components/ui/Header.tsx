"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const services = [
  {
    name: "Chat Agent",
    description: "Engasjerende samtaler med AI-assistenten din",
    href: "/tjenester/chat-agent",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Voice Agent",
    description: "Talebasert interaksjon med AI-løsninger",
    href: "/tjenester/voice-agent",
    icon: PhoneIcon,
  },
  {
    name: "Workflow",
    description: "Automatiser oppgaver og optimaliser prosesser",
    href: "/tjenester/workflow",
    icon: ArrowPathIcon,
  },
  {
    name: "Kurs og Rådgivning",
    description: "Ekspertopplæring i AI-teknologier",
    href: "/tjenester/kurs-og-radgivning",
    icon: ChartPieIcon,
  },
];

const callsToAction = [
  { name: "Se demo", href: "#", icon: PlayCircleIcon },
  { name: "Kontakt oss", href: "/kontakt", icon: PhoneIcon },
];

export function Header({ className }: { className?: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className
      )}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Norvalt</span>
            <Image
              src="/logos/norvalt-logo-color.png"
              alt="Norvalt Logo"
              width={160}
              height={32}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-secondary"
          >
            <span className="sr-only">Åpne hovedmenyen</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-secondary hover:text-primary transition-colors">
              Tjenester
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-secondary"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {services.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-secondary group-hover:text-primary"
                      />
                    </div>
                    <div className="flex-auto">
                      <Link
                        href={item.href}
                        className="block font-semibold text-secondary"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-secondary hover:text-primary transition-colors"
                  >
                    <item.icon
                      aria-hidden="true"
                      className="size-5 flex-none text-secondary"
                    />
                    {item.name}
                  </Link>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Link
            href="/om-oss"
            className="text-sm/6 font-semibold text-secondary hover:text-primary transition-colors"
          >
            Om oss
          </Link>
          <Link
            href="https://norvalt.ghost.io/"
            className="text-sm/6 font-semibold text-secondary hover:text-primary transition-colors"
          >
            Blogg
          </Link>
          <Link
            href="/case"
            className="text-sm/6 font-semibold text-secondary hover:text-primary transition-colors"
          >
            Case
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/kontakt"
            className="text-sm/6 font-semibold text-secondary hover:text-primary transition-colors"
          >
            Kontakt oss <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Norvalt</span>
              <Image
                src="/logos/norvalt-logo-color.png"
                alt="Norvalt Logo"
                width={160}
                height={32}
                className="h-8 w-auto object-contain"
                priority
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-secondary"
            >
              <span className="sr-only">Lukk meny</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-secondary hover:bg-gray-50">
                    Tjenester
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...services, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as={Link}
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-secondary hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  href="/om-oss"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-secondary hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Om oss
                </Link>
                <Link
                  href="/blogg"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-secondary hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blogg
                </Link>
                <Link
                  href="/case"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-secondary hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Case
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="/kontakt"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-secondary hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Kontakt oss
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
