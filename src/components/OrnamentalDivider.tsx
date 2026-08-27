import React from "react";

interface OrnamentalDividerProps {
  variant?: "lotus" | "peacock" | "floral" | "simple";
  className?: string;
}

export const OrnamentalDivider: React.FC<OrnamentalDividerProps> = ({
  variant = "lotus",
  className = "",
}) => {
  return (
    <div className={`flex items-center justify-center my-6 gap-3 ${className}`} aria-hidden="true">
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-gold-400/60" />
      
      {variant === "lotus" && (
        <svg
          className="w-7 h-7 text-gold-500 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          {/* Central Lotus Flower SVG */}
          <path
            d="M12 4C10.5 7.5 9 10 7 12C9.5 12 11.5 10.5 12 8.5C12.5 10.5 14.5 12 17 12C15 10 13.5 7.5 12 4Z"
            fill="currentColor"
            fillOpacity="0.15"
          />
          <path d="M12 4C10.5 7.5 9 10 7 12C9.5 12 11.5 10.5 12 8.5C12.5 10.5 14.5 12 17 12C15 10 13.5 7.5 12 4Z" />
          <path d="M12 8.5C10.5 11.5 7 13.5 4 14C7 15.5 10.5 15 12 12.5C13.5 15 17 15.5 20 14C17 13.5 13.5 11.5 12 8.5Z" />
          <path d="M12 12.5C10 15 7.5 17.5 4 19C7.5 19 11 17.5 12 15C13 17.5 16.5 19 20 19C16.5 17.5 14 15 12 12.5Z" />
          <circle cx="12" cy="18.5" r="1" fill="currentColor" />
        </svg>
      )}

      {variant === "peacock" && (
        <svg
          className="w-7 h-7 text-gold-500 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          {/* Peacock Feather Motif */}
          <path d="M12 21C12 21 7 16 7 11C7 8.24 9.24 6 12 6C14.76 6 17 8.24 17 11C17 16 12 21 12 21Z" />
          <path d="M12 16C12 16 9.5 13.5 9.5 11C9.5 9.62 10.62 8.5 12 8.5C13.38 8.5 14.5 9.62 14.5 11C14.5 13.5 12 16 12 16Z" fill="currentColor" fillOpacity="0.2" />
          <circle cx="12" cy="11" r="1.5" fill="currentColor" />
          <path d="M7 11C5 10 3.5 8 3 5" />
          <path d="M17 11C19 10 20.5 8 21 5" />
        </svg>
      )}

      {variant === "floral" && (
        <svg
          className="w-6 h-6 text-gold-500 shrink-0"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2L13.5 8.5L20 10L14.5 13.5L16 20L12 16L8 20L9.5 13.5L4 10L10.5 8.5L12 2Z" opacity="0.8" />
        </svg>
      )}

      {variant === "simple" && (
        <div className="w-2 h-2 rotate-45 border border-gold-500 bg-gold-200/50 shrink-0" />
      )}

      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-gold-400/60" />
    </div>
  );
};

