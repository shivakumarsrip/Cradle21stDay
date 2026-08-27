import React from "react";
import Image from "next/image";
import { OrnamentalDivider } from "./OrnamentalDivider";

export const PrinceSection: React.FC = () => {
  return (
    <section id="prince" className="py-16 px-4 bg-ivory-50 relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        {/* Footprints Icon / Lotus Motif Header */}
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-gold-100/80 border border-gold-300/50 mb-4 shadow-sm">
          {/* Golden Footprints SVG */}
          <svg
            className="w-8 h-8 text-gold-600"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            {/* Baby footprint vectors */}
            <ellipse cx="9" cy="17" rx="2.5" ry="3.5" transform="rotate(-10 9 17)" />
            <circle cx="7" cy="11.5" r="0.9" />
            <circle cx="8.5" cy="10.8" r="1.1" />
            <circle cx="10.2" cy="11.2" r="1.0" />
            <circle cx="11.8" cy="12.2" r="0.8" />
            <ellipse cx="16" cy="16.5" rx="2.3" ry="3.3" transform="rotate(10 16 16.5)" />
            <circle cx="13.2" cy="11.8" r="0.8" />
            <circle cx="14.8" cy="10.8" r="1.0" />
            <circle cx="16.5" cy="10.5" r="1.1" />
            <circle cx="18" cy="11.2" r="0.9" />
          </svg>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-indigoaccent-900 tracking-wide uppercase">
          Our Little Prince Has Arrived
        </h2>

        <p className="font-telugu text-lg sm:text-2xl text-gold-700 font-semibold my-2 px-2">
          మా చిన్నారి రాకతో మా ఇంట ఆనందం నిండింది
        </p>

        <p className="text-xs sm:text-sm font-sans font-semibold text-sandalwood-500 tracking-widest uppercase">
          Born on 09 August 2026
        </p>

        <OrnamentalDivider variant="peacock" className="my-4" />

        {/* Card with Cradle Detail Image and Emotional Copy */}
        <div className="card-gold-frame rounded-2xl p-6 sm:p-8 mt-6 relative shadow-card-luxury">
          <div className="corner-ornament-tl" />
          <div className="corner-ornament-tr" />
          <div className="corner-ornament-bl" />
          <div className="corner-ornament-br" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Image Column */}
            <div className="md:col-span-5 relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/cradle_detail.jpg"
                alt="Close-up detail of traditional South Indian wooden cradle decorated with fresh flowers"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover"
              />
            </div>

            {/* Content Column */}
            <div className="md:col-span-7 text-center md:text-left space-y-4">
              <p className="font-display italic text-lg sm:text-xl text-gold-800 leading-relaxed font-medium">
                &ldquo;Tiny hands, tiny feet, and a heart full of love.&rdquo;
              </p>
              <p className="font-sans text-sm sm:text-base text-indigoaccent-900/80 leading-relaxed">
                Our little prince has brought a beautiful new beginning to our family, and we are delighted to celebrate this precious occasion with our loved ones.
              </p>
              <div className="pt-2 flex items-center justify-center md:justify-start gap-4 text-xs font-serif text-sandalwood-500">
                <span className="flex items-center gap-1">
                  <span className="text-gold-500">❖</span> Precious Blessings
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-gold-500">❖</span> New Beginnings
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

