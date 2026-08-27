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

          {/* Main Inviter & Family Host Section */}
          <div className="my-6 space-y-5">
            {/* Maternal Grandparents / Hosts */}
            <div>
              <span className="text-xs font-sans font-semibold tracking-widest text-sandalwood-500 uppercase block mb-1">
                Invited by (Maternal Grandparents)
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gold-800 tracking-wide uppercase">
                Sripada Lalitha & Nanda Kumar
              </h3>
            </div>

            {/* Sripada Shivakumar (Mena Mama) below Maternal Grandparents */}
            <div className="pt-2">
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-indigoaccent-900 tracking-wide uppercase">
                Sripada Shivakumar
              </h4>
              <p className="font-sans text-xs sm:text-sm font-semibold tracking-widest text-sandalwood-500 uppercase mt-0.5">
                (Mena Mama)
              </p>
            </div>

            {/* Parents */}
            <div className="pt-3 border-t border-gold-300/40">
              <span className="text-xs font-sans font-semibold tracking-widest text-sandalwood-500 uppercase block mb-1">
                With the love of Parents
              </span>
              <h3 className="font-serif text-xl sm:text-3xl font-bold text-indigoaccent-900 tracking-wide uppercase">
                Kolloku Prem Kumar & Sravya
              </h3>
            </div>
          </div>

          <p className="font-display italic text-sm sm:text-base text-indigoaccent-900/80 my-4 max-w-lg mx-auto">
            cordially invite you and your family to bless their beloved baby boy and celebrate his
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

          {/* Paternal Grandparents Section (Bold) */}
          <div className="pt-4 border-t border-gold-300/40 text-center">
            <div className="space-y-1 max-w-md mx-auto py-2 px-4 rounded-xl bg-ivory-100/60 border border-gold-200/60 shadow-sm">
              <span className="text-[11px] font-sans font-semibold text-sandalwood-500 tracking-widest uppercase block">
                With the blessings of
              </span>
              <h4 className="font-serif text-lg sm:text-2xl font-extrabold text-gold-800 tracking-wide uppercase">
                Kolloju Rama & Raghu Chary
              </h4>
              <p className="text-xs font-semibold text-sandalwood-500 tracking-wider uppercase italic">
                (Paternal Grandparents)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

