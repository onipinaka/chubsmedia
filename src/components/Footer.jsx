import React from 'react'

const Footer = () => {
  const socialLinks = [
    { name: 'Twitter', url: '#' },
    { name: 'LinkedIn', url: '#' },
    { name: 'Instagram', url: '#' },
    { name: 'Facebook', url: '#' },
  ];

  return (
    <footer className="bg-[#161616] text-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-base font-satoshi-regular lg:text-base text-white mb-4">Let's Talk</h3>
              <a 
                href="mailto:connect@chubsmedia.tech" 
                className="text-[26px] lg:text-[40px] font-normal text-white hover:opacity-80 transition-opacity inline-block font-satoshi-medium"
              >
                connect@chubsmedia.tech
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <h4 className="text-base lg:text-base font-satoshi-medium text-white mb-3">Job Application</h4>
                <a 
                  href="mailto:connect@chubsmedia.tech" 
                  className="text-base lg:text-base text-white hover:opacity-80 transition-opacity font-satoshi-regular"
                >
                  connect@chubsmedia.tech
                </a>
              </div>

              <div>
                <h4 className="text-base font-satoshi-medium lg:text-base text-white mb-3">Office Address</h4>
                <p className="text-base font-satoshi-regular lg:text-base text-white">
                  105A OBH,<br />Army Insitute of Technology, Pune 411015
                </p>
              </div>

              <div>
                <h4 className="text-base font-satoshi-medium lg:text-base text-white mb-3">Phone Number</h4>
                <a 
                  href="tel:342-000-0000" 
                  className="text-base lg:text-base text-white hover:opacity-80 font-satoshi-regular transition-opacity"
                >
                  +91 94513 02544<br/>+91 93998 92395
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Social Links */}
          <div className="flex flex-col justify-start lg:justify-start lg:items-end">
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="flex items-center gap-2 group text-base lg:text-base"
                >
                  <span className="text-white group-hover:opacity-80 transition-opacity font-satoshi-medium">
                    {social.name}
                  </span>
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 20 20" 
                    fill="none" 
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  >
                    <path 
                      d="M5 15L15 5M15 5H8M15 5V12" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="text-2xl lg:text-3xl font-bold text-white"><img src="/chubslogo.svg" className='w-[200px]' alt="" /></div>
          <p className="text-sm lg:text-base text-white">
            © 2025 Chubs Media All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer