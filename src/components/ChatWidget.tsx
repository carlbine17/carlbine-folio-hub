import { useEffect } from "react";

const ChatWidget = () => {
  useEffect(() => {
    const isDarkMode = () => {
      // Check documentElement since ThemeToggle uses that
      return document.documentElement.classList.contains("dark");
    };

    const loadChatbase = () => {
      // Remove old script if it exists
      const oldScript = document.getElementById("chatbase-script");
      if (oldScript) oldScript.remove();

      // Also remove the chatbase iframe/widget to force reload
      const oldWidget = document.getElementById("chatbase-bubble-button");
      if (oldWidget) oldWidget.remove();
      const oldWindow = document.getElementById("chatbase-bubble-window");
      if (oldWindow) oldWindow.remove();

      // Create new script with theme
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = "chatbase-script";
      script.setAttribute("chatbotId", "9hbDZNdz4Hj86lJtrAEip");
      script.setAttribute("domain", "www.carlbine.com");
      script.setAttribute("theme", isDarkMode() ? "dark" : "light");
      script.defer = true;
      document.body.appendChild(script);
    };

    if (document.readyState === "complete") {
      loadChatbase();
    } else {
      window.addEventListener("load", loadChatbase);
    }

    // Watch for theme changes on documentElement
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          loadChatbase();
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
