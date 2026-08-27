import React from "react";
import Image from "next/image";
import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react";
import { OrnamentalDivider } from "./OrnamentalDivider";

export const CeremonyDetailsSection: React.FC = () => {
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=MSR+Gardens%2C+Eduloor+Road%2C+Kattangur";

  return (
    <section className="py-16 px-4 bg-ivory-100 relative">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-indigoaccent-900 uppercase tracking-wide">
            Join Us in Celebration
          </h2>
          <p className="font-telugu text-lg sm:text-2xl text-gold-700 font-semibold mt-1">
            మా ఆనందంలో మీరు కూడా భాగస్వాములు కండి
          </p>
          <OrnamentalDivider variant="floral" className="my-4" />
        </div>

        {/* Card Frame containing Event Details */}
        <div className="card-gold-frame rounded-2xl p-6 sm:p-10 shadow-card-luxury relative bg-white/90">
          <div className="corner-ornament-tl" />
          <div className="corner-ornament-tr" />
          <div className="corner-ornament-bl" />
          <div className="corner-ornament-br" />

          {/* Background Decor Visual Banner */}
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-8 shadow-sm">
            <Image
              src="/images/ceremony_decor.jpg"
              alt="South Indian traditional ceremony stage decoration with rice flour kolam, brass oil lamps, and marigold garlands"
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 text-white font-serif text-xs sm:text-sm font-medium tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-gold-400" />
              Ceremonial Venue Setup
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left items-stretch">
            {/* Date & Time Column */}
            <div className="p-6 rounded-xl bg-ivory-50 border border-gold-200/80 flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-3 text-gold-700">
                <div className="p-2 rounded-full bg-gold-100 border border-gold-300">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-sans font-semibold tracking-wider text-sandalwood-500 uppercase block">
                    Date
                  </span>
                  <span className="font-serif text-base sm:text-lg font-bold text-indigoaccent-900 uppercase">
                    Saturday, 29 August 2026
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-3 text-gold-700 pt-3 border-t border-gold-200/60">
                <div className="p-2 rounded-full bg-gold-100 border border-gold-300">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-sans font-semibold tracking-wider text-sandalwood-500 uppercase block">
                    Time
                  </span>
                  <span className="font-serif text-base sm:text-lg font-bold text-indigoaccent-900">
                    12:00 PM (Noon)
                  </span>
                </div>
              </div>
            </div>

            {/* Venue Column */}
            <div className="p-6 rounded-xl bg-ivory-50 border border-gold-200/80 flex flex-col justify-between space-y-4">
              <div className="flex items-start justify-center md:justify-start gap-3 text-gold-700">
                <div className="p-2 rounded-full bg-gold-100 border border-gold-300 shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-sans font-semibold tracking-wider text-sandalwood-500 uppercase block">
                    Venue
                  </span>
                  <h3 className="font-serif text-lg font-bold text-indigoaccent-900 uppercase">
                    MSR Gardens
                  </h3>
                  <p className="font-sans text-sm text-indigoaccent-900/80 mt-1 leading-relaxed">
                    Eduloor Road, Kattangur
                    <br />
                    Pin Code: 508205
                  </p>
                </div>
              </div>

              {/* View Location Button */}
              <div className="pt-3">
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gold-bg-gradient text-white font-serif text-sm font-bold tracking-wider uppercase shadow-md hover:shadow-lg hover:brightness-105 active:scale-[0.99] transition-all focus:outline-none focus:ring-2 focus:ring-gold-500"
                >
                  <MapPin className="w-4 h-4" />
                  <span>View Location</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

