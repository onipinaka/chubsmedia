import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getServiceBySlug } from '../data/servicesData';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#F5F5F0] text-[#161616] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-satoshi-bold mb-4">Service Not Found</h1>
          <Link to="/" className="text-[#3B82F6] hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const features = service.features || [];
  const process = service.process || [];

  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-16 xl:px-20">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Service Icon */}
            <div className="text-[#3B82F6] mb-8">
              {service.icon}
            </div>

            {/* Service Title */}
            <h1 className="text-[40px] leading-[48px] sm:text-[60px] sm:leading-[72px] lg:text-[80px] lg:leading-[96px] font-satoshi-medium text-[#161616] mb-6 tracking-[-0.02em]">
              {service.title}
            </h1>

            {/* Service Description */}
            <p className="text-[16px] leading-[25.6px] sm:text-[18px] sm:leading-[28.8px] font-satoshi-regular text-[#333333] max-w-3xl mb-6">
              {service.description}
            </p>

            {/* Pricing */}
            <p className="text-[16px] leading-[25.6px] font-satoshi-medium text-[#161616]">
              Starting from <span className="text-[#3B82F6]">₹{service.pricing}</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-16 xl:px-20">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-[20px] leading-[32px] sm:text-[20px] sm:leading-[32px] font-satoshi-medium text-[#161616]">
              What We Offer
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#F5F5F0] border border-[#E5E5E0] rounded-lg p-6 hover:border-[#3B82F6] transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#3B82F6] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[16px] leading-[25.6px] font-satoshi-regular text-[#161616]">
                    {feature}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#F5F5F0] px-4 sm:px-6 lg:px-16 xl:px-20">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-[20px] leading-[32px] sm:text-[20px] sm:leading-[32px] font-satoshi-medium text-[#161616]">
              Our Process
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="text-[#3B82F6] text-[32px] leading-[44.8px] font-satoshi-bold flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-[20px] leading-[32px] font-satoshi-medium text-[#161616] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[16px] leading-[25.6px] font-satoshi-regular text-[#333333]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-16 xl:px-20">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[32px] leading-[44.8px] sm:text-[40px] sm:leading-[56px] font-satoshi-medium text-[#161616] mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-[16px] leading-[25.6px] font-satoshi-regular text-[#333333] mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your goals with our {service.title.toLowerCase()} services.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 bg-[#3B82F6] text-white px-8 py-4 rounded-full font-satoshi-medium text-[16px] leading-[25.6px] hover:bg-[#2563EB] transition-all duration-300"
            >
              Get In Touch
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 10h10M10 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
