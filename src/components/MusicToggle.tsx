"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Sparkles } from "lucide-react";

export const MusicToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const stopTimerRef = useRef<NodeJS.Timeout | null>(null);

  const start60sTimer = () => {
    if (stopTimerRef.current) {
      clearTimeout(stopTimerRef.current);
    }
    // Automatically stop music after 1 minute (60,000 ms)
    stopTimerRef.current = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }, 60000);
  };

  const stop60sTimer = () => {
    if (stopTimerRef.current) {
      clearTimeout(stopTimerRef.current);
      stopTimerRef.current = null;
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.6;

    const playAudio = () => {
      if (audio && audio.paused) {
        audio
          .play()
          .then(() => {
            setIsPlaying(true);
            setShowPrompt(false);
            start60sTimer();
            removeListeners();
          })
          .catch(() => {
            // Browser blocked unmuted autoplay, show subtle prompt & wait for user touch/click/scroll
            setShowPrompt(true);
          });
      }
    };

    const removeListeners = () => {
      document.removeEventListener("click", playAudio);
      document.removeEventListener("touchstart", playAudio);
      document.removeEventListener("pointerdown", playAudio);
      document.removeEventListener("scroll", playAudio);
    };

    // Try immediate autoplay
    playAudio();

    // Add document-level interaction listeners for immediate start on first touch/scroll/click
    document.addEventListener("click", playAudio, { once: true });
    document.addEventListener("touchstart", playAudio, { once: true });
    document.addEventListener("pointerdown", playAudio, { once: true });
    document.addEventListener("scroll", playAudio, { once: true });

    return () => {
      removeListeners();
      stop60sTimer();
    };
  }, []);

  const toggleMusic = (e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      stop60sTimer();
    } else {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          setShowPrompt(false);
          start60sTimer();
        })
        .catch((err) => {
          console.warn("Audio play error:", err);
        });
    }
  };

  return (
    <>
      {/* Hidden Native Audio Element for HTML5 Autoplay */}
      <audio
        ref={audioRef}
        src="/audio/krishna_ringtone.mp3"
        loop
        preload="auto"
        autoPlay
        playsInline
      />

      {/* Subtle Autoplay Helper Prompt if Browser Blocks Initial Unmuted Sound */}
      {showPrompt && !isPlaying && (
        <div
          onClick={toggleMusic}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-full bg-gold-600/95 text-white backdrop-blur-md border border-gold-300 shadow-xl flex items-center gap-2 text-xs font-serif font-bold tracking-wide animate-bounce cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-gold-200" />
          <span>Tap anywhere to play invitation music</span>
        </div>
      )}

      {/* Floating Top-Right Music Toggle Button */}
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
    </>
  );
};
