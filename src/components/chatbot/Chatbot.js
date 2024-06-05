import React, { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    try {
      if (window.Quiq && !window.chat) {
        window.chat = window.Quiq({
          pageConfigurationId: "default",
        });
      }
    } catch (error) {
      console.error("Quiq initialization error:", error);
    }
  }, []);

  return <></>;
};

export default Chatbot;
