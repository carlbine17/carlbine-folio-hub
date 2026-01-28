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

    const loadChatbase = () => {
      if (document.getElementById("chatbase-script")) return;
      
      const theme = isDarkMode() ? "dark" : "light";
      
      // Set config before script loads - use popup mode for mobile
      window.embeddedChatbotConfig = {
        chatbotId: "9hbDZNdz4Hj86lJtrAEip",
        domain: "www.chatbase.co",
        theme: theme,
      };

      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = "chatbase-script";
      script.setAttribute("chatbotId", "9hbDZNdz4Hj86lJtrAEip");
      script.setAttribute("domain", "www.chatbase.co");
      script.defer = true;
      document.body.appendChild(script);
      
      // Add CSS to make chatbot a popup on mobile instead of fullscreen
      const style = document.createElement("style");
      style.id = "chatbase-mobile-style";
      style.textContent = `
        @media (max-width: 768px) {
          iframe[id*="chatbase"], 
          iframe[src*="chatbase"],
          div[id*="chatbase-bubble"] + iframe {
            max-height: 70vh !important;
            max-width: 90vw !important;
            bottom: 80px !important;
            right: 10px !important;
            border-radius: 16px !important;
            box-shadow: 0 10px 40px rgba(0,0,0,0.3) !important;
          }
        }
      `;
      document.head.appendChild(style);
    };

    // Small delay to ensure theme is set from localStorage
    setTimeout(() => {
      if (document.readyState === "complete") {
        loadChatbase();
      } else {
        window.addEventListener("load", loadChatbase);
      }
    }, 100);

    // Watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const theme = isDarkMode() ? "dark" : "light";
          
          // Update config
          if (window.embeddedChatbotConfig) {
            window.embeddedChatbotConfig.theme = theme;
          }
          
          // Update via chatbase API
          if (window.chatbase) {
            try {
              if (typeof window.chatbase === "function") {
                window.chatbase("updateTheme", theme);
              }
              // Also try the config update method
              const iframe = document.querySelector('iframe[id*="chatbase"]') as HTMLIFrameElement;
              if (iframe?.contentWindow) {
                iframe.contentWindow.postMessage({ type: "theme", theme }, "*");
              }
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
