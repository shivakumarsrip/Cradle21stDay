"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

export const MusicToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const attemptedAutoplay = useRef(false);

  useEffect(() => {
    // Initialize audio element with user uploaded file
    const audio = new Audio("/audio/krishna_ringtone.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    const startPlayback = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            removeInteractionListeners();
          })
          .catch(() => {
            // Autoplay blocked by browser policy until user interaction
          });
      }
    };

    const removeInteractionListeners = () => {
      window.removeEventListener("click", startPlayback);
      window.removeEventListener("touchstart", startPlayback);
      window.removeEventListener("pointerdown", startPlayback);
      window.removeEventListener("scroll", startPlayback);
    };

    // Attempt immediate autoplay on site load
    if (!attemptedAutoplay.current) {
      attemptedAutoplay.current = true;
      startPlayback();
    }

    // Attach interaction listeners to trigger playback on first tap/scroll if blocked on load
    window.addEventListener("click", startPlayback, { once: true });
    window.addEventListener("touchstart", startPlayback, { once: true });
    window.addEventListener("pointerdown", startPlayback, { once: true });
    window.addEventListener("scroll", startPlayback, { once: true });

    return () => {
      removeInteractionListeners();
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent triggering window click handler
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn("Audio playback error:", err);
        });
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? "Mute Background Music" : "Play Background Music"}
        className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-ivory-50/95 backdrop-blur-md border border-gold-400/70 shadow-md text-indigoaccent-900 hover:bg-gold-100 hover:border-gold-500 transition-all text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-gold-500 cursor-pointer"
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-4 h-4 text-gold-600 animate-pulse" />
            <span className="hidden sm:inline text-gold-800 font-serif">Music Playing</span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-sandalwood-500" />
            <span className="hidden sm:inline text-sandalwood-600 font-serif">Music Off</span>
          </>
        )}
      </button>
    </div>
  );
};
