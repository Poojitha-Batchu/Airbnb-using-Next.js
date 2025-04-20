// components/ChatBot.tsx
"use client";

import { useState, useEffect } from "react";
import { X, Send } from "lucide-react";
import Image from "next/image";

interface Message {
  text: string;
  isBot: boolean;
  options?: string[];
}

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [typing, setTyping] = useState(false);
  const [userInput, setUserInput] = useState("");

  const responses = [
    {
      question: "Hi! Where would you like to stay?",
      options: ["Goa", "Pune", "Mumbai", "Chennai", "Hyderabad", "Delhi", "Kolkata", "Jaipur", "Bengaluru", "Kerala"],
    },
    {
      question: "What type of place are you looking for?",
      options: ["Entire place", "Private room", "Shared room"],
    },
    {
      question: "How many guests?",
      options: ["1", "2", "3-4", "5+"],
    },
    {
      question: "What's your price range per night?",
      options: ["₹1000-₹3000", "₹3000-₹5000", "₹5000-₹10000", "₹10000+"],
    },
    {
      question: "Great! Ready to see available stays?",
      options: ["Show me!", "Start over"],
    },
  ];

  useEffect(() => {
    if (open && messages.length === 0) {
      handleBotResponse(responses[0].question, responses[0].options);
    }
  }, [open]);

  const handleBotResponse = (text: string, options?: string[]) => {
    setTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { text, isBot: true, options }]);
      setTyping(false);
    }, 1000);
  };

  const handleSelect = (option: string) => {
    // Add user's selection to messages
    setMessages(prev => [...prev, { text: option, isBot: false }]);

    // Find current step based on messages length
    const currentStep = Math.floor(messages.length / 2);

    if (currentStep < responses.length - 1) {
      // Send next bot response
      handleBotResponse(responses[currentStep + 1].question, responses[currentStep + 1].options);
    } else if (option === "Start over") {
      // Reset chat
      setMessages([]);
      handleBotResponse(responses[0].question, responses[0].options);
    } else {
      // Final step - show completion message
      handleBotResponse("Great! I'll redirect you to the search results...");
      setTimeout(() => {
        setOpen(false);
        setMessages([]);
      }, 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: userInput, isBot: false }]);
    setUserInput("");

    // Simulate bot thinking and respond
    handleBotResponse("I understand you're interested in " + userInput + ". Let me help you with that.", responses[0].options);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {!open && (
        <div className="mb-2 bg-white px-4 py-2 rounded-lg shadow-md text-rose-500 font-medium animate-bounce">
          Book your room with ease
        </div>
      )}
      {!open ? (
        <button
          className="bg-rose-500 p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 relative"
          onClick={() => setOpen(true)}
        >
          <Image 
            src= "/public/images/chatbot.png"
            alt="Chat Bot" 
            width={60} 
            height={60}
            className="object-contain"
          />
        </button>
      ) : (
        <div className="w-[400px] rounded-xl shadow-xl bg-rose-500 border-0 p-4 flex flex-col space-y-4 animate-slideUp">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-lg text-white">Booking Assistant</h2>
            <button 
              onClick={() => {
                setOpen(false);
                setMessages([]);
              }}
              className="hover:bg-rose-400 p-1 rounded-full transition-colors duration-200"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto max-h-[400px] space-y-4 bg-white p-4 rounded-lg">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-rose-500 text-white'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  {message.options && (
                    <div className="mt-3 flex flex-col space-y-2">
                      {message.options.map((opt, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSelect(opt)}
                          className="px-3 py-2 bg-white hover:bg-rose-50 text-sm rounded-lg text-left text-gray-800 transition-colors duration-200"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-3">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex items-center space-x-2 bg-white p-2 rounded-lg">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
            />
            <button
              type="submit"
              className="p-2 bg-white text-rose-500 rounded-lg hover:bg-rose-50 transition-colors duration-200"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
