import { AlertTriangle, Bot, Loader2, MessageSquare, Send, User } from "lucide-react";
import React, { Component } from "react";
import { useState, useRef, useEffect } from "react";

export const ChatbotSection = ({ profileContext }) => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: `Hello! I am Hafezd's AI assistant, ready to answer your questions about his profile. How may I help you today?`,
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  const API_URL = "https://deployment.datasaur.ai/api/deployment/2067/1247/chat/completions";
  const API_KEY = import.meta.env.VITE_API_KEY;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const queryAPI = async (userMessage) => {
    setIsLoading(true);
    setError(null);
    const enrichedUserMessage = `Based on the profile of Hafezd El Daffa (${profileContext}), answer this question: ${userMessage}`;
    const apiMessages = [{ role: "user", content: enrichedUserMessage }];

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: apiMessages }),
      });
      const result = await response.json().catch((parseErr) => {
        console.error("Failed to parse response JSON:", parseErr);
        throw new Error(
          `Failed to parse API response. Status: ${response.status} ${response.statusText}.`
        );
      });
      if (!response.ok) {
        const errorDetail =
          result?.error?.message || result?.message || JSON.stringify(result);
        throw new Error(
          `API Error: ${response.status} ${response.statusText}. Detail: ${errorDetail}`
        );
      }
      const assistantReply = result?.choices?.[0]?.message?.content;
      if (!assistantReply) throw new Error("Assistant reply not found.");
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: assistantReply },
      ]);
    } catch (err) {
      console.error("API call failed:", err);
      let displayError =
        err instanceof TypeError && err.message.includes("fetch")
          ? "Network error or CORS issue. Direct API calls from browser may be blocked. A backend proxy is recommended for production."
          : `Failed to get response: ${err.message || "Unknown error"}.`;
      setError(displayError);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Apologies, an error occurred: ${err.message.substring(
            0,
            100
          )}... Please try again.`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    setMessages((prev) => [...prev, { role: "user", content: input }]);
    queryAPI(input);
    setInput("");
  };

  return (
    <section id="chatbot" className="py-16 md:py-20 bg-slate-900 w-full">
      {" "}
      {/* Main section bg, w-full ensures it spans its parent */}
      {/* This div now controls padding for the full-width content area */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center text-slate-100 mb-10 text-center">
          {" "}
          {/* text-center for title block */}
          <MessageSquare
            size={40}
            className="mr-4 text-indigo-400 flex-shrink-0"
          />{" "}
          {/* flex-shrink-0 for icon */}
          <h2 className="text-4xl md:text-5xl font-bold">
            Talk with AI Assistant
          </h2>
        </div>
        {/* Note: To keep the note box and chat card from becoming overly wide on large screens, 
               we can apply max-w- and mx-auto to them individually if desired.
               For now, they will expand to the padded width of this container.
               If you want to constrain the chat card itself, add max-w- classes and mx-auto to the div below.
           */}

        {/* Chatbot card: This will now also be full width (padded). Add max-w-xl (or similar) and mx-auto here if you want to constrain IT. */}
        <div className="bg-slate-800 shadow-2xl rounded-2xl p-6 md:p-8 border border-slate-700">
          <div className="h-96 overflow-y-auto mb-6 p-4 bg-slate-700/50 rounded-xl border border-slate-600 flex flex-col space-y-5">
            {" "}
            {/* Message display area */}
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-end gap-3 ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.role === "assistant" && (
                  <Bot className="h-8 w-8 text-indigo-300 flex-shrink-0 p-1.5 bg-indigo-700/70 rounded-full shadow-md" />
                )}
                <div
                  className={`max-w-[80%] px-5 py-3 rounded-t-xl ${
                    msg.role === "user"
                      ? "rounded-l-xl bg-indigo-600 text-white shadow-md"
                      : "rounded-r-xl bg-slate-600 text-slate-100 shadow-md"
                  }`}
                >
                  {msg.content}
                </div>
                {msg.role === "user" && (
                  <User className="h-8 w-8 text-slate-300 flex-shrink-0 p-1.5 bg-slate-700 rounded-full shadow-md" />
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start items-center gap-3">
                {" "}
                <Bot className="h-8 w-8 text-indigo-300 p-1.5 bg-indigo-700/70 rounded-full shadow-md animate-pulse" />{" "}
                <div className="px-5 py-3 rounded-r-xl rounded-t-xl bg-slate-600">
                  {" "}
                  <Loader2 className="h-5 w-5 animate-spin text-slate-100" />{" "}
                </div>{" "}
              </div>
            )}
            {error && (
              <div className="flex items-center gap-3 text-red-400 p-3 bg-red-900/30 rounded-lg border border-red-700 text-sm shadow">
                {" "}
                <AlertTriangle className="h-5 w-5 flex-shrink-0" />{" "}
                <p>{error}</p>{" "}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSubmit} className="flex items-center gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Hafezd's profile, skills, or experience..."
              className="flex-grow px-5 py-3.5 bg-slate-700 border border-slate-600 text-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-base placeholder-slate-400"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3.5 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center"
              disabled={isLoading || !input.trim()}
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Send className="h-5 w-5" />
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
