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
import { Home, List, AlertCircle, Menu, Shield } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-primary text-primary-foreground shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Shield className="h-8 w-8 mr-3" />
            <span className="font-bold text-xl">SecureWatch</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-primary-foreground/80 transition-colors">
              <div className="flex items-center gap-2">
                <Home className="h-5 w-5" />
                <span>Home</span>
              </div>
            </Link>
            <Link href="/listas" className="hover:text-primary-foreground/80 transition-colors">
              <div className="flex items-center gap-2">
                <List className="h-5 w-5" />
                <span>Lists</span>
              </div>
            </Link>
            <Link href="/eventos" className="hover:text-primary-foreground/80 transition-colors">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                <span>Events</span>
              </div>
            </Link>
          </div>
          
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-primary-foreground">
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
                  <span>Lists</span>
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
        </div>
      </div>
    </nav>
  );
}
