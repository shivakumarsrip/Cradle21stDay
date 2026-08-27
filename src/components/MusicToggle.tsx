"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

export const MusicToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Soothing traditional Indian flute frequencies (Mohanam Raga notes: S R2 G3 P D2 S')
  const notes = [293.66, 329.63, 369.99, 440.0, 493.88, 587.33];

  const stopAudio = () => {
    oscillatorsRef.current.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // ignore
      }
    });
    oscillatorsRef.current = [];

    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.1);
    }
  };

  const startAudio = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }

      if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;
      stopAudio();

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.01, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 2);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Play soft soothing ambient chords mimicking acoustic bamboo flute sound
      const baseFreqs = [notes[0], notes[2], notes[3]];
      baseFreqs.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Soft subtle tremolo/vibrato for flute feel
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(4.5 + i * 0.5, ctx.currentTime);
        lfoGain.gain.setValueAtTime(2.5, ctx.currentTime);
        lfo.connect(osc.frequency);
        lfo.start();

        oscGain.gain.setValueAtTime(0.3 / (i + 1), ctx.currentTime);
        osc.connect(oscGain);
        oscGain.connect(masterGain);

        osc.start();
        oscillatorsRef.current.push(osc);
      });
    } catch {
      // Audio playback fallback
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopAudio();
      setIsPlaying(false);
    } else {
      startAudio();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      stopAudio();
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? "Mute Background Music" : "Play Ambient Music"}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-ivory-50/90 backdrop-blur-md border border-gold-400/50 shadow-md text-indigoaccent-900 hover:bg-gold-100 hover:border-gold-500 transition-all text-xs font-medium focus:outline-none focus:ring-2 focus:ring-gold-500"
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-4 h-4 text-gold-600 animate-pulse" />
            <span className="hidden sm:inline text-gold-700 font-serif">Music On</span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-sandalwood-500" />
            <span className="hidden sm:inline text-sandalwood-500 font-serif">Music Off</span>
          </>
        )}
      </button>
    </div>
  );
};

