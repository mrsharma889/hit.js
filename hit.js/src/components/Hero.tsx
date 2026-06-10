import { motion } from 'motion/react';
import { ArrowUpRight, ChevronRight, Cpu, Globe, Briefcase, Network } from 'lucide-react';
import React from 'react';
import logoImg from '../assets/images/hit_js_logo_1781029210703.png';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-white"
    >
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-400/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-400/5 blur-[120px]" />
      </div>

      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#8b5cf610_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf610_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_30%,transparent_100%)] pointer-events-none"></div>

      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        
        {/* Left Column - Content */}
        <div className="space-y-7 [transform-style:preserve-3d]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-purple-50/80 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-100"
          >
            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
            <span className="text-[11px] sm:text-xs font-bold text-purple-600 uppercase tracking-widest">
              AI Workflow Engineer & Full-Stack Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-[4.5rem] font-display font-extrabold tracking-tight leading-[1.08] text-[#0F172A]"
          >
            Building Intelligent <br />
            Web Apps & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
              Automation <br />
              Systems
            </span>{' '}
            for Modern <br />
            Businesses
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#4B5563] text-lg sm:text-xl max-w-xl leading-relaxed"
          >
            We design and develop scalable web platforms, AI workflows, and business automation systems that help companies grow faster and operate smarter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-5 pt-4"
          >
            <a
              href="#contact"
              className="group flex items-center justify-center px-8 py-4 text-[15px] font-bold text-white transition-all bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:shadow-[0_8px_25px_-5px_rgba(168,85,247,0.5)] w-full sm:w-auto"
            >
              Let's Build Your System
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a
              href="#work"
              className="group flex items-center justify-center px-8 py-4 text-[15px] font-bold text-[#374151] transition-all bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 w-full sm:w-auto shadow-sm"
            >
              View My Work
              <ChevronRight className="w-4 h-4 ml-1 text-gray-400 group-hover:text-gray-900 transition-colors" />
            </a>
          </motion.div>
        </div>

        {/* Right Column - 3D Floating Elements */}
        <motion.div
           className="relative hidden lg:flex items-center justify-center h-[650px] w-full"
        >
           {/* Central rings and Logo */}
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="absolute w-[500px] h-[500px] border border-purple-200/40 rounded-full" />
              <div className="absolute w-[350px] h-[350px] border border-blue-200/40 rounded-full" />
              <div className="absolute w-[200px] h-[200px] border border-purple-100 rounded-full" />

              {/* Abstract graphic */}
              <svg className="absolute w-[350px] h-[350px] text-purple-300/30 [transform:translateZ(-20px)]" viewBox="0 0 100 100">
                 <path d="M 50 2 L 98 50 L 50 98 L 2 50 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                 <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.3" />
              </svg>

              <div className="relative w-44 h-44 flex items-center justify-center [transform:translateZ(40px)] overflow-hidden rounded-[2rem] shadow-[0_15px_40px_-5px_rgba(168,85,247,0.25)] bg-white">
                 <img src={logoImg} alt="hit.js logo" className="w-full h-full object-cover scale-[1.7]" referrerPolicy="no-referrer" />
              </div>
           </div>

           {/* Floating Pills */}
           <FloatingPill 
             icon={Cpu} text="AI Automation" delay={0} translateZ="80px"
             className="top-[25%] -right-[5%]" 
           />
           <FloatingPill 
             icon={Briefcase} text="Business Solutions" delay={1.5} translateZ="50px"
             className="top-[45%] -left-[10%]" 
           />
           <FloatingPill 
             icon={Globe} text="Web Applications" delay={0.7} translateZ="90px"
             className="bottom-[20%] right-[2%]" 
           />
           <FloatingPill 
             icon={Network} text="API Integrations" delay={2.2} translateZ="60px"
             className="bottom-[12%] left-[10%]" 
           />
        </motion.div>
      </div>
    </section>
  );
}

function FloatingPill({ icon: Icon, text, delay, translateZ, className }: any) {
  return (
    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
      className={`absolute bg-white px-5 py-3.5 rounded-full flex items-center gap-3 shadow-[0_15px_35px_-5px_rgba(168,85,247,0.15)] border border-purple-100 ${className}`}
      style={{ transform: `translateZ(${translateZ})` }}
    >
      <Icon className="w-5 h-5 text-purple-500" />
      <span className="text-[14px] font-bold text-gray-800 whitespace-nowrap">{text}</span>
    </motion.div>
  );
}
