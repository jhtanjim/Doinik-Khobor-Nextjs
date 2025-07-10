"use client";
import Link from "next/dist/client/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoClose, IoMenuSharp } from "react-icons/io5";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Switch } from "../ui/switch";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* logo */}
        <Link href="/">
          <div>
            <h1 className="text-xl font-bold">DoinikKhobor</h1>
          </div>
        </Link>

        {/* navigation links */}
        <div className="hidden lg:flex ">
          <NavigationMenu>
            <NavigationMenuList>
              {/* News Link */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/news"
                  className={`link ${
                    pathname === "/news" ? "text-red-500 font-semibold" : ""
                  } px-4 py-2 hover:text-red-600`}
                >
                  News
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Services Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/services"
                  className={`link ${
                    pathname === "/services" ? "text-red-500 font-semibold" : ""
                  } px-4 py-2 hover:text-red-600`}
                >
                  Services
                </NavigationMenuLink>
                <NavigationMenuContent>
                  <ul className="p-4 space-y-2">
                    <li>
                      <NavigationMenuLink href="/services/web">
                        Web Development
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/services/mobile">
                        Mobile Development
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/services/seo">
                        SEO
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/about"
                  className={`link ${
                    pathname === "/about" ? "text-red-500 font-semibold" : ""
                  } px-4 py-2 hover:text-red-600`}
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/contact"
                  className={`link ${
                    pathname === "/contact  "
                      ? "text-red-500 font-semibold"
                      : ""
                  } px-4 py-2 hover:text-red-600`}
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* search bar placeholder */}
        <div className="hidden lg:flex ">
          {/* Future search bar component */}

          <div className="flex items-center space-x-4">
            <span>Dark Mode</span>
            <Switch />
            <Button variant="default">Login</Button>
          </div>
        </div>
        {/* mobile maenu */}
        <div className="lg:hidden flex">
          <Button
            onClick={toggleMenu}
            variant="outline"
            className="px-4 py-2 hover:text-red-600"
          >
            {isMenuOpen ? <IoClose size={24} /> : <IoMenuSharp size={24} />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
