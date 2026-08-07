import { useEffect } from "react";

declare global {
  interface Window {
    chatbase: any;
    embeddedChatbotConfig: any;
  }
}

const CHATBOT_ID = "CBwnxPYR09j7mN8hlhjbp";

const isDarkMode = () => document.documentElement.classList.contains("dark");

let loading = false;

/** Loads the Chatbase script on demand and opens the chat. Never runs on page load. */
export const openCarlBot = () => {
  if (document.getElementById("chatbase-script")) {
    if (typeof window.chatbase === "function") window.chatbase("open");
    return;
  }

  if (loading) return;
  loading = true;

  window.embeddedChatbotConfig = {
    chatbotId: CHATBOT_ID,
    domain: "www.chatbase.co",
    theme: isDarkMode() ? "dark" : "light",
  };

  const script = document.createElement("script");
  script.src = "https://www.chatbase.co/embed.min.js";
  script.id = "chatbase-script";
  script.setAttribute("chatbotId", CHATBOT_ID);
  script.setAttribute("domain", "www.chatbase.co");
  script.defer = true;
  script.onload = () => {
    loading = false;
    setTimeout(() => {
      if (typeof window.chatbase === "function") window.chatbase("open");
    }, 400);
  };
  document.body.appendChild(script);
};

const ChatWidget = () => {
  useEffect(() => {
    // Keep widget theme in sync, but only once it has actually been loaded.
    const observer = new MutationObserver(() => {
      if (!document.getElementById("chatbase-script")) return;
      const theme = isDarkMode() ? "dark" : "light";

      if (window.embeddedChatbotConfig) {
        window.embeddedChatbotConfig.theme = theme;
      }

      try {
        if (typeof window.chatbase === "function") {
          window.chatbase("updateTheme", theme);
        }
        const iframe = document.querySelector('iframe[id*="chatbase"]') as HTMLIFrameElement | null;
        if (iframe?.contentWindow) {
          iframe.contentWindow.postMessage({ type: "theme", theme }, "*");
        }
      } catch {
        // Chatbase not ready
      }
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return null;
};

export default ChatWidget;
