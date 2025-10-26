import { useEffect, useState } from "react";
import Logo from "@/icon/Logo";
import LogoText from "@/icon/LogoText";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { menuItem } from "@/lib/types";

const Navbar = ({ menus }: { menus: menuItem[] }) => {
  const [hasScrolled, setHasScrolled] = useState(false);

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
        <div className="flex gap-9 items-center">
          {menus?.map((menu) => (
            <a
              key={menu.title}
              href={menu.url}
              className="animated-underline font-agane font-medium uppercase"
            >
              {menu.title}
            </a>
          ))}
        </div>
        <Button>Download Ai.Mate</Button>
      </div>
    </div>
  );
};

export default Navbar;
