import { useState } from "react";

export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState(null); // Tracks the open FAQ item

  const faqs = [
    {
      question: "What is Cosmos?",
      answer:
        "Cosmos is a decentralized platform for [your project description], enabling users to [your goal].",
    },
    {
      question: "How does Cosmos work?",
      answer:
        "Cosmos works by leveraging [mention key technology or system], providing users with [explain the functionality].",
    },
    {
      question: "Who can use Cosmos?",
      answer:
        "Cosmos is ideal for [your target audience: developers, space enthusiasts, etc.]. It helps them [value proposition].",
    },
    {
      question: "Is Cosmos free to use?",
      answer:
        "Yes! Cosmos offers a free version, with premium features available for [describe the premium model].",
    },
    {
      question: "What are the key features of Cosmos?",
      answer:
        "Some features include:\n- 🌟 Feature 1: [Brief description]\n- 🚀 Feature 2: [Brief description]\n- 🔗 Feature 3: [Brief description]\n- 🎮 Feature 4: [Brief description]",
    },
    {
      question: "How can I get started with Cosmos?",
      answer: "To get started, simply [sign up, explore documentation, etc.].",
    },
    {
      question: "Is Cosmos open-source?",
      answer:
        "Yes, Cosmos is open-source! You can check the code on GitHub at [GitHub link].",
    },
    {
      question: "Where can I get support?",
      answer:
        "For support, visit our [support page/Discord/FAQs]. Feel free to reach out to our community for help.",
    },
    {
      question: "How can I contribute to Cosmos?",
      answer:
        "You can contribute by [explaining the contribution process, e.g., coding, reporting bugs, participating in discussions].",
    },
    {
      question: "Where can I follow updates on Cosmos?",
      answer:
        "Stay updated via:\n📢 Website: [Website link]\n📲 Twitter: [Twitter link]\n💬 Discord: [Discord link]",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle visibility of the clicked FAQ
  };

  return (
    <div className="container mx-auto p-6 ">
      <h2 className="text-3xl font-bold text-center mb-8 mt-4">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <button
                onClick={() => handleToggle(index)}
                className="text-blue-500 text-xl"
              >
                {openIndex === index ? "-" : "+"} {/* Display + or - */}
              </button>
            </div>
            {openIndex === index && (
              <p className="text-gray-600">{faq.answer}</p> // Only show the answer if the item is open
            )}
          </div>
        ))}
      </div>
    </div>
  );
}