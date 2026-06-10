import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      id: 'web-app',
      title: 'Web Application Development',
      description: 'Ultra-fast, responsive scalable applications built with modern frameworks like React, Next.js, and Node.',
    },
    {
      id: 'automation',
      title: 'Business Automation Systems',
      description: 'Streamline your operations with custom software removing manual bottlenecks and increasing team output.',
    },
    {
      id: 'ai-workflow',
      title: 'AI Workflow Integration',
      description: 'Integrating LLMs and machine learning into daily workflows, from intelligent chatbots to document parsing.',
    },
    {
      id: 'dashboards',
      title: 'Custom Dashboards & Admin Panels',
      description: 'Beautiful, specialized data visualizations and control panels tailored to your organizational needs.',
    },
    {
      id: 'saas',
      title: 'SaaS Platform Development',
      description: 'End-to-end architecture and development for SaaS startups, from landing pages to complex backend logic.',
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-gray-50 to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-sm font-semibold tracking-wider text-cyan-600 uppercase mb-4">Core Services</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
            Systems designed to<br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">accelerate growth</span>.
          </h3>
        </motion.div>

        <div className="flex flex-col space-y-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={`/services/${service.id}`}
                className="block group glass p-8 md:p-10 rounded-3xl flex flex-col md:flex-row justify-between md:items-center gap-6 card-glow transition-all duration-300 border border-gray-100 hover:border-cyan-200"
              >
                <div className="max-w-2xl">
                  <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-cyan-500 group-hover:border-cyan-500 group-hover:text-white transition-all duration-300">
                    <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
