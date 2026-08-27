import React from "react";
import { OrnamentalDivider } from "./OrnamentalDivider";

export const InvitationCardSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-radial-highlight relative">
      <div className="max-w-2xl mx-auto">
        <div className="card-gold-frame rounded-3xl p-6 sm:p-10 text-center shadow-card-luxury relative overflow-hidden bg-ivory-50/95">
          <div className="corner-ornament-tl" />
          <div className="corner-ornament-tr" />
          <div className="corner-ornament-bl" />
          <div className="corner-ornament-br" />

          {/* Invitation Header Text */}
          <p className="font-display italic text-base sm:text-lg text-sandalwood-500 font-medium mb-4">
            With immense joy and the blessings of our elders,
          </p>

          {/* Hosts / Maternal Grandparents */}
          <div className="my-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gold-800 tracking-wide uppercase">
              Sripada Lalitha & Nanda Kumar
            </h3>
            <p className="font-sans text-xs sm:text-sm font-semibold tracking-widest text-sandalwood-500 uppercase mt-1">
              (Maternal Grandparents)
            </p>
          </div>

          <p className="font-display italic text-sm sm:text-base text-indigoaccent-900/80 my-4 max-w-lg mx-auto">
            cordially invite you and your family to bless their beloved grandson and celebrate his
          </p>

          {/* Main Event Name Banner */}
          <div className="my-6 py-4 px-3 rounded-xl bg-gold-100/60 border border-gold-300/70 shadow-sm">
            <h2 className="font-serif text-xl sm:text-3xl font-bold text-indigoaccent-900 uppercase tracking-widest leading-snug">
              Cradle & Naming Ceremony
            </h2>
            <p className="font-telugu text-lg sm:text-2xl font-bold text-gold-700 mt-1">
              ఊయల మరియు నామకరణ మహోత్సవం
            </p>
          </div>

          <OrnamentalDivider variant="lotus" className="my-6" />

          {/* Family Hierarchy Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-gold-300/40 text-center">
            {/* Paternal Grandparents */}
            <div className="space-y-1">
              <span className="text-[11px] font-sans font-semibold text-sandalwood-500 tracking-wider uppercase block">
                With the blessings of
              </span>
              <h4 className="font-serif text-base font-bold text-indigoaccent-900">
                Kolloju Rama & Raghu Chary
              </h4>
              <p className="text-xs font-medium text-sandalwood-500 italic">
                Paternal Grandparents
              </p>
            </div>

            {/* Parents */}
            <div className="space-y-1 sm:border-x border-gold-300/40 sm:px-2">
              <span className="text-[11px] font-sans font-semibold text-sandalwood-500 tracking-wider uppercase block">
                With the love of
              </span>
              <h4 className="font-serif text-base font-bold text-indigoaccent-900">
                Kolloku Prem Kumar & Sravya
              </h4>
              <p className="text-xs font-medium text-sandalwood-500 italic">
                Parents
              </p>
            </div>

            {/* Mena Maama */}
            <div className="space-y-1">
              <span className="text-[11px] font-sans font-semibold text-sandalwood-500 tracking-wider uppercase block">
                Mena Maama
              </span>
              <h4 className="font-serif text-base font-bold text-indigoaccent-900">
                Sripada Shivakumar
              </h4>
              <p className="text-xs font-medium text-sandalwood-500 italic">
                Uncle
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

