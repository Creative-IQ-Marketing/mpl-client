import { useEffect } from "react";

/**
 * Chat widget loader — deferred until first user interaction OR 3 s.
 *
 * Previously injected the LeadConnector script immediately on mount.
 * That heavy initialisation (loader.js + chat-widget/loader.js) ran
 * concurrently with React hydration and initial paint, contributing to
 * the 6 000 ms INP.  Now we wait for the first sign of user intent
 * before loading any third-party code, so the critical path is clear.
 */
const WIDGET_ID = "680fa47e2bada73f44521d20";
const INTERACTION_EVENTS = ["mousedown", "touchstart", "scroll", "keydown"];

const ChatWidget = () => {
  useEffect(() => {
    let loaded = false;

    const load = () => {
      if (loaded) return;
      loaded = true;

      // Remove all listeners — only need to fire once
      INTERACTION_EVENTS.forEach((ev) => window.removeEventListener(ev, load));

      if (document.querySelector(`script[data-widget-id="${WIDGET_ID}"]`)) {
        return;
      }

      const script = document.createElement("script");
      script.src = "https://beta.leadconnectorhq.com/loader.js";
      script.setAttribute(
        "data-resources-url",
        "https://beta.leadconnectorhq.com/chat-widget/loader.js",
      );
      script.setAttribute("data-widget-id", WIDGET_ID);
      script.async = true;
      document.body.appendChild(script);
    };

    // Trigger on first interaction (ideal path — user is engaged)
    INTERACTION_EVENTS.forEach((ev) =>
      window.addEventListener(ev, load, { once: true, passive: true }),
    );

    // Fallback: load after 3 s even with no interaction
    const timer = setTimeout(load, 3000);

    return () => {
      clearTimeout(timer);
      INTERACTION_EVENTS.forEach((ev) => window.removeEventListener(ev, load));
    };
  }, []);

  return null;
};

export default ChatWidget;
