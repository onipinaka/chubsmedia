import React,{ useState } from 'react'

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  
    const faqs = [
      {
        question: 'How does your process work after I contact you?',
        answer: 'Once you reach out, we begin with a discovery call to understand your goals, requirements, and project scope. After that, we prepare a clear plan with timelines and pricing. Once approved, our team starts designing, building, optimizing, and delivering your project with regular updates.',
      },
      {
        question: 'Do you offer ongoing support after delivery?',
        answer: 'MYes, we provide maintenance, updates, and monthly management services if needed.',
      },
      {
        question: 'Is there a limit to revisions?',
        answer: 'No, there is no limit to revisions. We want you to be completely satisfied with the final design, so we offer unlimited revisions until you\'re happy with the result.',
      },
      {
        question: 'How long does it take to complete a project?',
        answer: 'Timelines depend on the type of service: Websites: 7–21 days (depending on complexity) Apps: 3–8 weeks Branding/UI/UX: 3–14 days Social Media & Marketing: Ongoing monthly service We always provide a clear timeline before starting the project.',
      },
      {
        question: 'Do I need to pay anything upfront?',
        answer: 'No. We don’t take any upfront payment. A simple MoU (Memorandum of Understanding) is signed before starting, and you only pay after the work is completed and approved.',
      },
    ];
  
    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Section Title - Left Side on Desktop */}
            <div className="lg:col-span-4">
              <h2 className="text-[16px] lg:text-[20px] leading-[25.6px] lg:leading-[32px] font-satoshi-medium text-[#161616] flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-sm"></span>
                COMMON QUESTIONS
              </h2>
            </div>

            {/* FAQ Items - Right Side on Desktop */}
            <div className="lg:col-span-8 space-y-0">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-6 lg:py-8 flex items-start justify-between gap-6 text-left group"
                  >
                    <span className="text-[16px] lg:text-[20px] leading-[25.6px] lg:leading-[32px] font-satoshi-medium text-[#333333] group-hover:opacity-70 transition-opacity">
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
                    <p className="text-[16px] leading-[25.6px] font-satoshi-regular text-[#333333] pr-12 lg:pr-16">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
}

export default Faq