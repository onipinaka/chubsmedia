import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What is included in the subscription?',
      answer: 'The subscription covers unlimited design requests and revisions, allowing you to request as many designs as you need. You\'ll also get fast delivery on all projects and ongoing support from our dedicated design team.',
    },
    {
      question: 'How long does it take to complete a design?',
      answer: 'Most design requests are completed within 24-48 hours. However, more complex projects may take longer. We prioritize quality and will keep you updated throughout the process.',
    },
    {
      question: 'Is there a limit to revisions?',
      answer: 'No, there is no limit to revisions. We want you to be completely satisfied with the final design, so we offer unlimited revisions until you\'re happy with the result.',
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can pause or cancel your subscription at any time. There are no long-term contracts or cancellation fees. You have complete flexibility.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <div className="mb-12 lg:mb-16">
          <h2 className="text-sm lg:text-base font-satoshi-medium text-black flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-sm"></span>
            COMMON QUESTIONS
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-6 lg:py-8 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg lg:text-2xl font-satoshi-regular text-black group-hover:opacity-70 transition-opacity">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 w-6 h-6 lg:w-7 lg:h-7 flex items-center justify-center transition-transform">
                  {openIndex === index ? (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-5 h-5 lg:w-6 lg:h-6"
                    >
                      <path
                        d="M6 12L18 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-5 h-5 lg:w-6 lg:h-6"
                    >
                      <path
                        d="M12 6V18M6 12H18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100 mb-6 lg:mb-8' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-base lg:text-lg font-satoshi-regular text-gray-600 pr-12 lg:pr-16 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
