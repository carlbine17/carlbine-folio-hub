import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const FerrariToggle = () => {
  const [isFerrari, setIsFerrari] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("ferrariTheme") === "true";
    setIsFerrari(stored);
    document.documentElement.classList.toggle("ferrari", stored);
  }, []);

  const toggleFerrari = () => {
    const newValue = !isFerrari;
    setIsFerrari(newValue);
    localStorage.setItem("ferrariTheme", String(newValue));
    document.documentElement.classList.toggle("ferrari", newValue);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleFerrari}
      className={`relative overflow-hidden group transition-all ${isFerrari ? "text-[#FF2800]" : "text-muted-foreground"}`}
      aria-label="Toggle Ferrari theme"
      title="Ferrari Theme"
    >
      {/* Ferrari Prancing Horse SVG */}
      <svg
        viewBox="0 0 24 24"
        className={`h-5 w-5 transition-all ${isFerrari ? "scale-110" : "scale-100"}`}
        fill="currentColor"
      >
        <path d="M12 2C11.5 2 11 2.19 10.59 2.59L7.29 5.88C6.91 6.26 6.91 6.87 7.29 7.25L8 8L6.59 9.41C6.21 9.79 6.21 10.4 6.59 10.78L7.5 11.7L4.21 14.99C3.83 15.37 3.83 15.98 4.21 16.36L7.64 19.79C8.02 20.17 8.63 20.17 9.01 19.79L12.3 16.5L13.22 17.41C13.6 17.79 14.21 17.79 14.59 17.41L16 16L16.75 16.71C17.13 17.09 17.74 17.09 18.12 16.71L21.41 13.41C21.79 13.03 21.79 12.42 21.41 12.04L18.12 8.75C17.74 8.37 17.13 8.37 16.75 8.75L16 9.5L14.59 8.09C14.21 7.71 13.6 7.71 13.22 8.09L12.3 9L9.01 5.71C8.63 5.33 8.02 5.33 7.64 5.71L7 6.35L6.29 5.64C5.91 5.26 5.91 4.65 6.29 4.27L9.59 1C10 0.59 10.5 0.5 11 0.5" />
        {/* Simplified horse head shape */}
        <path d="M15 4C15.5 3 16.5 2.5 17.5 3C18.5 3.5 19 4.5 18.5 5.5C18 6.5 17 7 16 6.5L15 6V4Z" />
        <path d="M17 6L19 5L20 6.5L18.5 8L17 6Z" />
        <circle cx="17.5" cy="4.5" r="0.5" />
      </svg>
      <span className="sr-only">Toggle Ferrari theme</span>
    </Button>
  );
};

export default FerrariToggle;