import { useEffect, useState } from "react";
import Logo from "@/icon/Logo";
import LogoText from "@/icon/LogoText";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { menuItem } from "@/lib/types";
import { Menu, X } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const Navbar = ({ menus }: { menus: menuItem[] }) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "py-5 px-4 border-b-2 transition-all duration-300 sticky top-0 z-50 bg-background/30 backdrop-blur-md",
        hasScrolled ? "border-b-primary/10 shadow-md" : "border-b-background"
      )}
    >
      <div
        className={cn(
          "max-w-gutter mx-auto flex items-center justify-between transition-all duration-300"
        )}
      >
        <div className="flex items-center gap-1.5">
          <Logo />
          <LogoText />
        </div>
        <div className="flex gap-9 items-center max-md:hidden">
          {menus?.map((menu) => (
            <a
              key={menu.title}
              href={menu.url}
              className="animated-underline font-nohemi font-medium uppercase"
            >
              {menu.title}
            </a>
          ))}
        </div>
        <div className="flex gap-2 items-center">
          <Button>Download</Button>
          <div
            className="cursor-pointer md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </div>
        </div>
      </div>
      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <div className="flex items-center gap-1.5">
                <Logo />
                <LogoText />
              </div>
            </SheetTitle>
            <div className="flex flex-col gap-6 mt-8">
              {menus?.map((menu) => (
                <a
                  key={menu.title}
                  href={menu.url}
                  className="animated-underline font-nohemi font-medium uppercase"
                  onClick={() => setMenuOpen(false)}
                >
                  {menu.title}
                </a>
              ))}
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
