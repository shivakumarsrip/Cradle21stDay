import React from "react";
import Image from "next/image";
import { OrnamentalDivider } from "./OrnamentalDivider";

export const ClosingSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-radial-highlight text-center relative overflow-hidden">
      <div className="max-w-2xl mx-auto">
        <div className="card-gold-frame rounded-3xl p-8 sm:p-12 shadow-card-luxury bg-ivory-50/95 relative">
          <div className="corner-ornament-tl" />
          <div className="corner-ornament-tr" />
          <div className="corner-ornament-bl" />
          <div className="corner-ornament-br" />

          {/* Closing Artwork Motif */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full overflow-hidden mb-6 border-2 border-gold-400/60 shadow-md">
            <Image
              src="/images/closing_ornament.jpg"
              alt="Jasmine flowers, lotus blossom, peacock feather, wooden flute and glowing diya"
              fill
              sizes="160px"
              className="object-cover"
            />
          </div>

          <h2 className="font-serif text-xl sm:text-3xl font-bold text-indigoaccent-900 leading-snug">
            Your Presence & Blessings Mean the World to Us
          </h2>

          <p className="font-telugu text-lg sm:text-2xl text-gold-700 font-semibold my-3 px-2">
            మీ రాక, మీ ఆశీర్వాదాలే మా చిన్నారి వేడుకకు మరింత ఆనందం
          </p>

          <OrnamentalDivider variant="lotus" className="my-6" />

          <div className="space-y-1">
            <p className="font-display italic text-sm sm:text-base text-sandalwood-500 font-medium">
              With Love,
            </p>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-indigoaccent-900 uppercase tracking-wide">
              Sripada Lalitha & Nanda Kumar
            </h3>
          </div>

          {/* Traditional Auspicious End Stamp */}
          <div className="mt-8 inline-block px-6 py-1.5 rounded-full bg-gold-100 border border-gold-300 text-gold-800 font-telugu text-xl font-bold tracking-widest shadow-sm">
            శుభం
          </div>
        </div>

        {/* Footer Credit / Subtle copyright */}
        <p className="text-[11px] font-sans text-sandalwood-400 mt-8 tracking-wider">
          Cradle & Naming Ceremony • Saturday, 29 August 2026 • MSR Gardens
        </p>
      </div>
    </section>
  );
};

