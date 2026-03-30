import React, { useEffect } from "react";

const ChatWidget = () => {
  useEffect(() => {
    // Check if script is already present to prevent duplicates
    if (document.querySelector('script[data-widget-id="680fa47e2bada73f44521d20"]')) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://beta.leadconnectorhq.com/loader.js";
    script.setAttribute(
      "data-resources-url",
      "https://beta.leadconnectorhq.com/chat-widget/loader.js"
    );
    script.setAttribute("data-widget-id", "680fa47e2bada73f44521d20");
    script.async = true;

    document.body.appendChild(script);

    return () => {
      // Cleanup script if component unmounts (optional, but good practice)
      // Usually chat widgets are meant to stay, but in React it's safer to manage it.
      // However, the loader might inject other elements that we can't easily clean up.
      // It's often better to just leave the script or do a soft cleanup.
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      
      // Some widgets create an iframe or div we might want to clean up, 
      // but without knowing the exact ID, we'll just clean the script tag.
    };
  }, []);

  return null; // This component doesn't render any UI itself
};

export default ChatWidget;
