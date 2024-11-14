import { useState, useRef } from "react";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [height, setHeight] = useState(0);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
      setHeight(0);  // Collapse the active panel
    } else {
      setActiveIndex(index);
      setHeight(contentRefs.current[index].scrollHeight); // Set height to the content's scroll height for a smooth transition
    }
  };

  const faqItems = [
    {
      question: "How do I upload my notes?",
      answer: "You can upload your notes by logging in, navigating to the 'Upload' section, then click on the 'create note' for uploading notes."
    },
    {
      question: "Are there any file size or format limitations for uploads?",
      answer: "Yes, files should be under 20 MB and in PDF format only."
    },
    {
      question: "Can I download notes without creating an account?",
      answer: "No, you need to create an account to access, download, and interact with the notes on ScholarGuide."
    },
    {
      question: "How is the ranking of notes determined?",
      answer: "The ranking is based on user likes. Popular notes appear at the top of search results."
    },
    {
      question: "Can I save notes to view later?",
      answer: "Yes, you can save notes to access them easily in your saved items"
    },
    {
      question: "Is there a limit to how many notes I can upload?",
      answer: "There’s no limit, but please ensure the notes you upload are of high quality and relevant to the community"
    },
    {
      question: "Why can't I see my uploaded notes immediately?",
      answer: "After uploading, your notes are sent to the admin for review to ensure they meet our content guidelines. Once approved, they will be made publicly available for other users to view and download. This process helps maintain the quality and relevance of the shared notes."
    },
  ];

  return (
    <div className="w-full md:px-8 my-8">
      {faqItems.map((item, index) => (
        <div key={index} className="mb-4 border-b">
          <button
            className="w-full text-left py-3 px-4 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold">{item.question}</span>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
          </button>
          <div
            ref={(el) => (contentRefs.current[index] = el)}
            style={{
              height: activeIndex === index ? `${height}px` : "0px",
              overflow: "hidden",
              transition: "height 0.3s ease",
            }}
            className="bg-white text-gray-700"
          >
            <div className="px-4 py-2">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
