import { menuType } from "@/lib/types";
import MainLayout from "../Layout/MainLayout";
import { m } from "motion/react";
import { Mail, Instagram } from "lucide-react";

const ContactContent = ({
  navData,
  footerData,
}: {
  navData: menuType;
  footerData: menuType;
}) => {
  return (
    <MainLayout navData={navData} footerData={footerData}>
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full -z-10" />

        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-nohemi font-bold mb-6">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto font-dm-sans leading-relaxed">
            Have questions, feedback, or just want to say hello? We&apos;d love
            to hear from you. Reach out to us directly or follow our journey.
          </p>
        </m.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl w-full">
          <m.a
            href="mailto:appaifitness@gmail.com"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="fratures-card group hover:bg-white/5 transition-all duration-300 flex flex-col items-center text-center gap-6 py-10"
          >
            <div className="p-5 rounded-full bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-300">
              <Mail size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-2xl font-nohemi font-semibold mb-2">
                Email Us
              </h3>
              <p className="text-white/60 font-dm-sans text-lg group-hover:text-primary transition-colors">
                appaifitness@gmail.com
              </p>
            </div>
          </m.a>

          <m.a
            href="https://www.instagram.com/aimate_club/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="fratures-card group hover:bg-white/5 transition-all duration-300 flex flex-col items-center text-center gap-6 py-10"
          >
            <div className="p-5 rounded-full bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-300">
              <Instagram size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-2xl font-nohemi font-semibold mb-2">
                Follow Us
              </h3>
              <p className="text-white/60 font-dm-sans text-lg group-hover:text-primary transition-colors">
                @aimate_club
              </p>
            </div>
          </m.a>
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactContent;
