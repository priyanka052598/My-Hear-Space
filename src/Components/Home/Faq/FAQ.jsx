import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import "../Faq/FAQ.css"

function FAQ() {
  // State to track the currently open FAQ
  const [openFAQ, setOpenFAQ] = useState(null);

  // Function to toggle a specific FAQ
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // FAQ data
  const faqs = [
    {
      question: "What is My Hear Space?",
      answer:
        "My Hear Space is a platform designed to provide personalized audio experiences, offering various features for music and podcast lovers.",
    },
    {
      question: " Is my identity kept private?",
      answer:
        "My Hear Space uses advanced algorithms to curate playlists and recommendations tailored to your preferences,My Hear Space is a platform where you can talk to empathetic listeners about your feelings and challenges, such as anxiety, loneliness, or breakups, in a safe and anonymous environment..",
    },
    {
      question: " What are the charges for using the service?",
      answer:
        "Yes, My Hear Space offers a free tier with basic features and a premium tier for advanced functionalities.",
    },
    {
        question: " Are the listeners professionals?",
        answer:
          "My Hear Space uses advanced algorithms to curate playlists and recommendations tailored to your preferences.",
      },
      {
        question: "How do I become a listener?",
        answer:
          "My Hear Space uses advanced algorithms to curate playlists and recommendations tailored to your preferences.",
      },
      {
        question: "Can I request a specific listener for my session?",
        answer:
          "My Hear Space uses advanced algorithms to curate playlists and recommendations tailored to your preferences.",
      },
  ];

  return (
    <div className="lg:px-[100px] md:px-8 lg:py-40 md:py-10 bg-[#111111]">
      <div className="heading text-left lg:text-[40px] md:text-[20px]">
        <span className="text-[#d9d9d9]">FAQs</span>
        <span className="text-[#808080]"> - All You Need to Know</span>
      </div>
      <div className="questions py-10">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#1f1f1f] px-12 lg:py-8 md:py-5 rounded-[24px] mb-4"
          >
            <div
              className="que flex justify-between items-center text-[#d9d9d9] cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <span className="lg:text-[28px] md:text-[24px]">{faq.question}</span>
              {openFAQ === index ? (
                <FaMinus className="w-8 h-8" />
              ) : (
                <FaPlus className="w-8 h-8" />
              )}
            </div>

          {/* Answer Section */}
          <div
              className={`ans ${
                openFAQ === index ? "ans-open" : ""
              } mt-8 lg:text-[24px] md:text-[20px] text-[#d9d9d9]`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
