import { useEffect } from "react";

declare global {
  interface Window {
    chatbase: any;
  }
}

const ChatWidget = () => {
  useEffect(() => {
    // Initialize chatbase
    if (!window.chatbase || window.chatbase("getState") !== "initialized") {
      window.chatbase = (...args: any[]) => {
        if (!window.chatbase.q) {
          window.chatbase.q = [];
        }
        window.chatbase.q.push(args);
      };
      window.chatbase = new Proxy(window.chatbase, {
        get(target, prop) {
          if (prop === "q") {
            return target.q;
          }
          return (...args: any[]) => target(prop, ...args);
        },
      });
    }

    // Load the script
    const onLoad = () => {
      if (document.getElementById("9hbDZNdz4Hj86lJtrAEip")) return;
      
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = "9hbDZNdz4Hj86lJtrAEip";
      script.setAttribute("domain", "www.chatbase.co");
      document.body.appendChild(script);
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }

    // Theme sync observer
    const updateChatbaseTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      if (window.chatbase && typeof window.chatbase === "function") {
        try {
          window.chatbase("setTheme", isDark ? "dark" : "light");
        } catch (e) {
          // Chatbase not ready yet
        }
      }
    };

    // Watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          updateChatbaseTheme();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    // Initial theme set with delay to ensure chatbase is loaded
    const themeInterval = setInterval(() => {
      if (window.chatbase) {
        updateChatbaseTheme();
        clearInterval(themeInterval);
      }
    }, 500);

    return () => {
      window.removeEventListener("load", onLoad);
      observer.disconnect();
      clearInterval(themeInterval);
    };
  }, []);

  return null;
};

export default ChatWidget;
