import React from "react";
import Image from "next/image";
import { OrnamentalDivider } from "./OrnamentalDivider";
import { ChevronDown } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between items-center pt-8 pb-12 px-4 text-center overflow-hidden">
      {/* Background Subtle Gradient & Kolam Motif */}
      <div className="absolute inset-0 bg-radial-highlight -z-10 pointer-events-none" />

      {/* Top Header & Auspicious Telugu Title */}
      <div className="w-full max-w-xl mx-auto pt-4 z-10 flex flex-col items-center">
        <div className="inline-block px-4 py-1 rounded-full bg-gold-100/70 border border-gold-300/60 text-gold-800 font-telugu text-lg sm:text-xl font-bold tracking-wide mb-3 shadow-sm">
          శుభమస్తు
        </div>

        {/* English Event Title */}
        <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold tracking-wider text-indigoaccent-900 uppercase leading-tight px-2 drop-shadow-sm">
          Cradle & Naming Ceremony
        </h1>

        <p className="font-serif text-sm sm:text-lg font-bold text-gold-800 uppercase tracking-widest mt-1">
          Prem & Sravya&apos;s Son
        </p>

        {/* Telugu Main Event Title */}
        <h2 className="font-telugu text-xl sm:text-3xl text-gold-700 font-semibold my-1.5 px-2">
          ఊయల మరియు నామకరణ మహోత్సవం
        </h2>

        <OrnamentalDivider variant="lotus" className="my-3" />

        {/* Prince Announcement */}
        <p className="font-display italic text-lg sm:text-2xl text-sandalwood-500 font-medium tracking-wide">
          &ldquo;Our little prince has arrived&rdquo;
        </p>

        {/* Baby Date of Birth */}
        <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/80 border border-gold-200 text-xs sm:text-sm font-semibold tracking-widest text-indigoaccent-800 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
          <span>Sunday, 09 August 2026</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
        </div>
      </div>

      {/* Main Hero Visual Card */}
      <div className="w-full max-w-2xl my-6 z-10 px-2 sm:px-0">
        <div className="card-gold-frame rounded-2xl p-2 sm:p-3 overflow-hidden shadow-card-luxury group">
          <div className="corner-ornament-tl" />
          <div className="corner-ornament-tr" />
          <div className="corner-ornament-bl" />
          <div className="corner-ornament-br" />

          <div className="relative aspect-[16/9] sm:aspect-[16/10] w-full rounded-xl overflow-hidden shadow-inner">
            <Image
              src="/images/hero_cradle.jpg"
              alt="Traditional South Indian carved wooden baby cradle decorated with jasmine garlands, marigold flowers, and brass diyas"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 768px"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigoaccent-900/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="z-10 flex flex-col items-center gap-1 text-gold-600/80 animate-subtle-float">
        <span className="text-[11px] font-sans tracking-widest uppercase text-sandalwood-500">
          Scroll To Explore
        </span>
        <a
          href="#prince"
          aria-label="Scroll to Our Little Prince section"
          className="p-1 rounded-full hover:text-gold-700 transition-colors"
        >
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

