import { useEffect } from "react";

declare global {
  interface Window {
    chatbase: any;
    embeddedChatbotConfig: any;
  }
}

const ChatWidget = () => {
  useEffect(() => {
    const isDarkMode = () => {
      return document.documentElement.classList.contains("dark");
    };

    // Set initial config
    window.embeddedChatbotConfig = {
      chatbotId: "9hbDZNdz4Hj86lJtrAEip",
      domain: "www.chatbase.co",
      theme: isDarkMode() ? "dark" : "light",
    };

    const loadChatbase = () => {
      if (document.getElementById("chatbase-script")) return;
      
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = "chatbase-script";
      script.defer = true;
      document.body.appendChild(script);
    };

    if (document.readyState === "complete") {
      loadChatbase();
    } else {
      window.addEventListener("load", loadChatbase);
    }

    // Watch for theme changes and update via API
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const theme = isDarkMode() ? "dark" : "light";
          // Update config
          if (window.embeddedChatbotConfig) {
            window.embeddedChatbotConfig.theme = theme;
          }
          // Try to update via chatbase API if available
          if (window.chatbase && typeof window.chatbase === "function") {
            try {
              window.chatbase("setTheme", theme);
            } catch (e) {
              // Chatbase not ready
            }
          }
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => {
      window.removeEventListener("load", loadChatbase);
      observer.disconnect();
    };
  }, []);

  return null;
};

export default ChatWidget;
