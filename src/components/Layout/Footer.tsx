import { m, useInView } from "motion/react";
import { useRef } from "react";
import Logo from "@/icon/Logo";
import LogoText from "@/icon/LogoText";
import { menuItem } from "@/lib/types";

const Footer = ({ menus }: { menus: menuItem[] }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <m.div
      ref={ref}
      className="px-4 mt-16"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <m.div
        className="max-w-gutter mx-auto flex flex-col md:flex-row items-center justify-between border-t-2 border-t-white/20 py-10 gap-y-8"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <m.div
          className="max-md:w-full grid grid-cols-3 md:flex gap-4 md:gap-9 items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {menus.map((menu, index) => (
            <m.a
              key={menu.title}
              href={menu.url}
              className="animated-underline font-dm-sans"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
            >
              {menu.title}
            </m.a>
          ))}
        </m.div>
        <m.div
          className="flex flex-col items-center md:items-end gap-3 md:gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <m.div
            className="flex items-center gap-1.5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <Logo />
            <LogoText />
          </m.div>
          <m.p
            className="text-xs opacity-50"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 0.5, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4, delay: 1.2 }}
          >
            Start Your Fitness Journey Today
          </m.p>
          <m.p
            className="text-xs opacity-50"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 0.5, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4, delay: 1.4 }}
          >
            © {new Date().getFullYear()} — All rights reserved
          </m.p>
        </m.div>
      </m.div>
    </m.div>
  );
};

export default Footer;
