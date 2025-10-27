import Logo from "@/icon/Logo";
import LogoText from "@/icon/LogoText";
import { menuItem } from "@/lib/types";

const Footer = ({ menus }: { menus: menuItem[] }) => {
  return (
    <div className="px-4 mt-16">
      <div className="max-w-gutter mx-auto flex flex-col md:flex-row items-center justify-between border-t-2 border-t-white/20 py-10 gap-y-8">
        <div className="max-md:w-full grid grid-cols-3 md:flex gap-4 md:gap-9 items-center">
          {menus.map((menu) => (
            <a
              key={menu.title}
              href={menu.url}
              className="animated-underline font-dm-sans"
            >
              {menu.title}
            </a>
          ))}
        </div>
        <div className="flex flex-col items-center md:items-end gap-3 md:gap-4">
          <div className="flex items-center gap-1.5">
            <Logo />
            <LogoText />
          </div>
          <p className="text-xs opacity-50">Start Your Fitness Journey Today</p>
          <p className="text-xs opacity-50">
            © {new Date().getFullYear()} — All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
