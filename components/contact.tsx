import { Mail, MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";

export const Contact = () => {
  return (
    <div id="contact" className="flex flex-col gap-8">
      <h5 className="title ">Contact</h5>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="border border-foreground/10 px-4 py-2 flex items-center gap-2">
          <MapPin size={16} />
          <p className="text-sm opacity-70">Kolkata, India</p>
        </div>

        <div className="border border-foreground/10 px-4 py-2 flex items-center gap-2">
          <PhoneCall size={16} />
          <Link
            href="tel:+919831479113"
            className="text-sm opacity-70 hover:opacity-100 transition-all duration-300"
          >
            +91 9831479113
          </Link>
        </div>
        <div className="border border-foreground/10 px-4 py-2 flex items-center gap-2">
          <Mail size={16} />
          <Link
            href="mailto:adioticswapnanil@gmail.com"
            className="text-sm opacity-70 hover:opacity-100 transition-all duration-300"
          >
            adioticswapnanil@gmail.com
          </Link>
        </div>
      </div>
    </div>
  );
};
