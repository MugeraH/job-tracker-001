"use client";

import React from "react";
import Image from "next/image";
import { ModeToggle } from "./ui/ModeToggle";
import Container from "./Container";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, ShoppingCartIcon } from "lucide-react";
import ProfileButton from "./ui/ProfileButton";

type Props = {};

// const routes = [
//   { href: "/", label: "Products" },
//   { href: "/", label: "Categories" },
//   { href: "/", label: "About" },
// ];

function Navbar({}: Props) {
  return (
    <header className=" sm:flex sm:justify-between py-2 px-0 mb-2 border-b ">
      <div className="mx-auto w-full max-w-9xl">
        <div className="relative px-4 sm:px-6 lg:px-8 flex  h-16 items-center justify-between w-full">
          <div className="flex items-center">
            {/* <Sheet>
              <SheetTrigger>
                <Menu className="h-6 md:hidden w-6" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[250px] sm:w-[300px]">
                <nav className="flex flex-col gap-4">
                  {routes.map((route, i) => (
                    <Link
                      key={i}
                      href={route.href}
                      className="block px-2 py-1 text-lg"
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet> */}
            <Link href="/" className="ml-4 lg:ml-0">
              <h1 className="text-xl font-bold">Job Tracker</h1>
            </Link>
          </div>

          <div className="flex items-center gap-1">
            <ModeToggle />
            <ProfileButton />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
