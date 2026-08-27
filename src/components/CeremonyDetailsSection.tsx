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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Date & Time Column */}
            <div className="p-6 sm:p-8 rounded-xl bg-ivory-50 border border-gold-200/80 flex flex-col justify-between items-center text-center space-y-6">
              {/* Date Section */}
              <div className="flex flex-col items-center text-center w-full space-y-1.5">
                <div className="p-2.5 rounded-full bg-gold-100 border border-gold-300 shadow-xs mb-1">
                  <Calendar className="w-5 h-5 text-gold-700" />
                </div>
                <span className="text-[11px] font-sans font-semibold tracking-widest text-sandalwood-500 uppercase block">
                  Date
                </span>
                <span className="font-serif text-base sm:text-lg font-bold text-indigoaccent-900 uppercase">
                  Saturday, 29 August 2026
                </span>
              </div>

              {/* Time Section */}
              <div className="w-full pt-5 border-t border-gold-200/60 flex flex-col items-center text-center space-y-1.5">
                <div className="p-2.5 rounded-full bg-gold-100 border border-gold-300 shadow-xs mb-1">
                  <Clock className="w-5 h-5 text-gold-700" />
                </div>
                <span className="text-[11px] font-sans font-semibold tracking-widest text-sandalwood-500 uppercase block">
                  Time
                </span>
                <span className="font-serif text-base sm:text-lg font-bold text-indigoaccent-900">
                  12:00 PM (Noon)
                </span>
              </div>
            </div>

            {/* Venue Column */}
            <div className="p-6 sm:p-8 rounded-xl bg-ivory-50 border border-gold-200/80 flex flex-col justify-between items-center text-center space-y-6">
              {/* Venue Info Section */}
              <div className="flex flex-col items-center text-center w-full space-y-1.5">
                <div className="p-2.5 rounded-full bg-gold-100 border border-gold-300 shadow-xs mb-1">
                  <MapPin className="w-5 h-5 text-gold-700" />
                </div>
                <span className="text-[11px] font-sans font-semibold tracking-widest text-sandalwood-500 uppercase block">
                  Venue
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-indigoaccent-900 uppercase">
                  MSR Gardens
                </h3>
                <p className="font-sans text-sm text-indigoaccent-900/80 leading-relaxed pt-0.5">
                  Eduloor Road, Kattangur
                  <br />
                  Pin Code: 508205
                </p>
              </div>

              {/* View Location Button */}
              <div className="w-full pt-3">
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "#1E3A4C",
                    color: "#FAF0D7",
                    border: "1.5px solid #C5A059",
                    boxShadow: "0 4px 14px rgba(30, 58, 76, 0.25)",
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-serif text-sm font-bold tracking-wider uppercase shadow-md hover:bg-gold-700 hover:text-white active:scale-[0.99] transition-all focus:outline-none focus:ring-2 focus:ring-gold-500 cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-gold-400" />
                  <span className="font-bold tracking-widest">Open Location Map</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gold-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Embedded Google Map Section */}
          <div className="mt-8 pt-6 border-t border-gold-200/80">
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-xs font-serif font-bold text-indigoaccent-900 uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-gold-600" />
                Venue Map Location
              </span>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-sans text-gold-700 hover:text-gold-800 font-semibold underline flex items-center gap-1"
              >
                Open in Maps App <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-xl overflow-hidden border border-gold-300/80 shadow-sm bg-ivory-100">
              <iframe
                title="MSR Gardens Venue Map Location"
                src="https://maps.google.com/maps?q=MSR%20Gardens%2C%20Eduloor%20Road%2C%20Kattangur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
