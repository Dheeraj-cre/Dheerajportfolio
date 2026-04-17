import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Chatbot.css";

const WELCOME_MESSAGE = {
  id: 1,
  role: "bot",
  text: "Hi! I'm Dheeraj's AI assistant. Ask me anything about his skills, projects, or experience.",
  timestamp: new Date(),
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMsg = {
      id: Date.now(),
      role: "user",
      text: trimmed,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const { data } = await axios.post("https://ai-chatbot-1lvp.onrender.com/chat", {
        message: trimmed,
      });

const botMsg = {
  id: Date.now() + 1,
  role: "bot",
  text: data.reply || "⚠️ No response from server",
  timestamp: new Date(),
};
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "bot",
          text: "Oops! Something went wrong. Please try again.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date) =>
    date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="chatbot-overlay"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Chat Window */}
      <div
        className={`chatbot-window ${isOpen ? "chatbot-window--open" : ""}`}
        role="dialog"
        aria-label="Chat with Dheeraj's AI assistant"
        aria-modal="true"
      >
        {/* Header */}
        <div className="chatbot-header">
          <div className="chatbot-header__info">
            <div className="chatbot-avatar">
              <span>D</span>
              <span className="chatbot-avatar__status" aria-hidden="true" />
            </div>
            <div>
              <div className="chatbot-header__title">Ask About Me 🤖</div>
              <div className="chatbot-header__subtitle">
                Dheeraj's AI Assistant · Online
              </div>
            </div>
          </div>
          <button
            className="chatbot-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M2 2L14 14M14 2L2 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="chatbot-messages" role="log" aria-live="polite">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`chatbot-message chatbot-message--${msg.role}`}
            >
              {msg.role === "bot" && (
                <div className="chatbot-message__avatar" aria-hidden="true">
                  🤖
                </div>
              )}
              <div className="chatbot-message__body">
                <div className="chatbot-bubble">{msg.text}</div>
                <div className="chatbot-message__time">
                  {formatTime(msg.timestamp)}
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="chatbot-message chatbot-message--bot">
              <div className="chatbot-message__avatar" aria-hidden="true">
                🤖
              </div>
              <div className="chatbot-message__body">
                <div className="chatbot-bubble chatbot-bubble--typing">
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="chatbot-input-area">
          <textarea
            ref={inputRef}
            className="chatbot-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about Dheeraj..."
            rows={1}
            disabled={isLoading}
            aria-label="Type your message"
          />
          <button
            className="chatbot-send"
            onClick={sendMessage}
            disabled={!input.trim() || isLoading}
            aria-label="Send message"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M16 2L2 8.5L8 9.5M16 2L10 16L8 9.5M16 2L8 9.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          className="chatbot-toggle"
          onClick={() => setIsOpen(true)}
          aria-label="Open chat with Dheeraj's AI assistant"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="chatbot-toggle__badge" aria-hidden="true" />
        </button>
      )}
    </>
  );
}