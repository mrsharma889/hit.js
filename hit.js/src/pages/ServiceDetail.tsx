import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import webAppImg from '../assets/images/service_web_app_1781031712601.png';
import automationImg from '../assets/images/service_automation_1781031727473.png';
import aiWorkflowImg from '../assets/images/service_ai_workflow_1781031741704.png';
import dashboardsImg from '../assets/images/service_dashboards_1781031754864.png';
import saasImg from '../assets/images/service_saas_1781031767999.png';

const servicesData: Record<string, any> = {
  'web-app': {
    title: 'Web Application Development',
    subtitle: 'Lightning-fast, highly scalable web solutions.',
    image: webAppImg,
    description: 'We build ultra-fast, responsive scalable applications with modern frameworks like React, Next.js, and Node. Our architecture ensures that your application performs flawlessly under heavy loads while delivering a modern, fluid user experience.',
    features: ['React & Next.js Ecosystems', 'Serverless & Node.js Backends', 'Performance Optimization', 'Responsive & Accessible UI/UX']
  },
  'automation': {
    title: 'Business Automation Systems',
    subtitle: 'Remove manual bottlenecks and multiply output.',
    image: automationImg,
    description: 'Streamline your operations with custom software removing manual bottlenecks and increasing team output. We design internal tools that bridge the gap between your existing software stack, eliminating repetitive tasks.',
    features: ['Custom API Integrations', 'Workflow Engine Architecture', 'Data Synchronization', 'Legacy System Modernization']
  },
  'ai-workflow': {
    title: 'AI Workflow Integration',
    subtitle: 'Empower your systems with Artificial Intelligence.',
    image: aiWorkflowImg,
    description: 'Integrating LLMs and machine learning into daily workflows, from intelligent chatbots to document parsing. We help you transform rigid software into intelligent systems that learn and adapt.',
    features: ['LLM & GPT API Integrations', 'Vector Databases & RAG', 'Automated Content Generation', 'Smart Document Parsing']
  },
  'dashboards': {
    title: 'Custom Dashboards & Admin Panels',
    subtitle: 'Your data, beautifully visualized and actionable.',
    image: dashboardsImg,
    description: 'Beautiful, specialized data visualizations and control panels tailored to your organizational needs. Gain deep insights into your operations with custom analytics engines that highlight what matters most.',
    features: ['Real-time Data Visualization', 'Complex Data Filtering', 'Role-Based Access Control', 'Interactive Charts & Metrics']
  },
  'saas': {
    title: 'SaaS Platform Development',
    subtitle: 'End-to-end architecture for digital products.',
    image: saasImg,
    description: 'End-to-end architecture and development for SaaS startups, from landing pages to complex backend logic. We build multi-tenant architectures ready to scale from your first user to your ten-thousandth.',
    features: ['Multi-tenant Architecture', 'Subscription & Billing APIs', 'User Authentication Arrays', 'Scalable Cloud Infrastructure']
  }
};

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = serviceId ? servicesData[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800">Service not found</h1>
        <Link to="/" className="ml-4 text-purple-600 hover:text-purple-700 underline">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Link to="/#services" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-purple-600 transition-colors mb-10 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
                {service.title}
              </h1>
              <p className="text-xl text-purple-600 font-medium mb-8">
                {service.subtitle}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                {service.description}
              </p>

              <div className="space-y-4">
                {service.features.map((feature: string, idx: number) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle2 className="w-6 h-6 text-cyan-500 mr-4 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white flex items-center justify-center p-4 md:p-6 lg:p-8">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-100/30 to-cyan-100/30"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-auto object-cover relative z-10 drop-shadow-lg rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-10 md:p-16 text-center shadow-xl border border-white/60 bg-gradient-to-br from-purple-500/5 to-cyan-500/5"
          >
            <h3 className="text-3xl font-display font-bold text-gray-900 mb-6">Ready to scale your business?</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our {service.title.toLowerCase()} expertise can help you reach your goals faster.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-800 shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]"
            >
              Start a Project
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
