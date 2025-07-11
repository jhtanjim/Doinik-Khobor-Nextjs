"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Switch } from "../ui/switch";

import { ThemeContext } from "@/context/themeConext";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import MobileMenu from "./MobileMenu";

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar = () => {
  const pathname = usePathname();

  const { isDarkMode, toggleTheme }: any = useContext(ThemeContext);

  return (
    <header
      className={`py-4 shadow-md ${isDarkMode ? "bg-gray-900 text-white" : ""}`}
    >
      <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center sm:px-6 lg:px-8">
        {/* logo */}
        <div className="text-xl font-bold">
          <Link href="/">Daily News</Link>
        </div>

        {/* desktop menu */}
        <NavigationMenu className="hidden lg:flex ">
          <NavigationMenuList>
            <NavigationMenuItem className="flex space-x-8 items-center">
              <Link
                href="/news"
                className={`${
                  pathname === "/news" ? "text-red-500 font-semibold" : ""
                } hover:text-red-500`}
              >
                News
              </Link>

              <Link
                href="/services"
                className={`${
                  pathname === "/services" ? "text-red-500 font-semibold" : ""
                } hover:text-red-500`}
              >
                <NavigationMenuTrigger className="dark:bg-gray-900 dark:text-white">
                  Sevices
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="text-gray-600 shadow-md rounded-md px-5 py-4 space-y-2">
                    <li>
                      <Link href="/services/web">Web Development</Link>
                    </li>
                    <li>
                      <Link href="/services/app">Mobile Apps</Link>
                    </li>
                    <li>
                      <Link href="/services/seo">SEO</Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </Link>

              <Link
                href="/about"
                className={`${
                  pathname === "/about" ? "text-red-500 font-semibold" : ""
                } hover:text-red-500`}
              >
                About
              </Link>

              <Link
                href="/contact"
                className={`${
                  pathname === "/contact" ? "text-red-500 font-semibold" : ""
                } hover:text-red-500`}
              >
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* color switcher and login button */}
        <div className="hidden lg:flex items-center space-x-4">
          <div onClick={toggleTheme} className="flex items-center">
            <span className="mr-2">Dark Mode</span>
            <Switch />
          </div>
          <Button variant="default">Login</Button>
        </div>

        {/* mobile hamburger menu */}
        <MobileMenu />
      </nav>
    </header>
  );
};

export default Navbar;

// button : add to cart,
// hooks: useEffect, useState
