"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Home, List, AlertCircle, Menu } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white px-4 py-3 shadow-sm flex items-center justify-between">
      <h1 className="text-xl font-bold text-blue-600">Watchlist</h1>

      <nav className="hidden md:flex items-center gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 hover:text-blue-600 transition-colors"
        >
          <Home className="h-5 w-5" />
          <span>Home</span>
        </Link>
        <Link
          href="/listas"
          className="flex items-center gap-2 hover:text-blue-600 transition-colors"
        >
          <List className="h-5 w-5" />
          <span>List</span>
        </Link>
        <Link
          href="/eventos"
          className="flex items-center gap-2 hover:text-blue-600 transition-colors"
        >
          <AlertCircle className="h-5 w-5" />
          <span>Events</span>
        </Link>
      </nav>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Menú</SheetTitle>
          </SheetHeader>
          <nav className="mt-6 flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 hover:text-blue-600 transition-colors"
              onClick={() => setOpen(false)}
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link
              href="/listas"
              className="flex items-center gap-2 hover:text-blue-600 transition-colors"
              onClick={() => setOpen(false)}
            >
              <List className="h-5 w-5" />
              <span>List</span>
            </Link>
            <Link
              href="/eventos"
              className="flex items-center gap-2 hover:text-blue-600 transition-colors"
              onClick={() => setOpen(false)}
            >
              <AlertCircle className="h-5 w-5" />
              <span>Events</span>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
