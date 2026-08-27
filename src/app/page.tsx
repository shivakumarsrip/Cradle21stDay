import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { PrinceSection } from "@/components/PrinceSection";
import { InvitationCardSection } from "@/components/InvitationCardSection";
import { CeremonyDetailsSection } from "@/components/CeremonyDetailsSection";
import { ClosingSection } from "@/components/ClosingSection";
import { MusicToggle } from "@/components/MusicToggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory-100 text-indigoaccent-900 selection:bg-gold-200 relative">
      {/* Ambient Music Toggle Button */}
      <MusicToggle />

      {/* Section 1 — Hero Opening */}
      <HeroSection />

      {/* Section 2 — Our Little Prince */}
      <PrinceSection />

      {/* Section 3 — Traditional Invitation Card */}
      <InvitationCardSection />

      {/* Section 4 — Ceremony & Venue Details */}
      <CeremonyDetailsSection />

      {/* Section 5 — Warm Closing */}
      <ClosingSection />
    </main>
  );
}

