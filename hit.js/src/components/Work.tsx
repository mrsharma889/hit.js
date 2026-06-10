import { motion } from 'motion/react';
import img1 from '../assets/images/business_automation_ui_1781026184804.png';
import img2 from '../assets/images/ai_lead_management_1781026201103.png';
import img3 from '../assets/images/ecommerce_admin_panel_1781026216000.png';
import img4 from '../assets/images/analytics_control_engine_1781026230797.png';

export default function Work() {
  const projects = [
    {
      title: 'Business Automation Dashboard',
      category: 'System Architecture',
      gradient: 'from-blue-200/50 to-cyan-100/50',
      accent: 'text-cyan-600',
      image: img1
    },
    {
      title: 'AI Lead Management System',
      category: 'AI / Automation',
      gradient: 'from-purple-200/50 to-fuchsia-100/50',
      accent: 'text-purple-600',
      image: img2
    },
    {
      title: 'E-commerce Platform Architecture',
      category: 'Web Application',
      gradient: 'from-indigo-200/50 to-blue-100/50',
      accent: 'text-indigo-600',
      image: img3
    },
    {
      title: 'Analytics Control Engine',
      category: 'Data Engineering',
      gradient: 'from-emerald-200/50 to-teal-100/50',
      accent: 'text-teal-600',
      image: img4
    }
  ];

  return (
    <section id="work" className="py-24 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-sm font-semibold tracking-wider text-purple-600 uppercase mb-4">Selected Work</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A]">
              Proven digital solutions.
            </h3>
          </div>
          <p className="text-lg text-[#4B5563] max-w-md">
            A look at some of the recent platforms, architectures, and intelligent workflows designed for modern enterprises.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group cursor-pointer flex flex-col"
            >
              <div 
                className={`w-full aspect-[4/3] rounded-3xl bg-gradient-to-br ${project.gradient} mb-6 relative overflow-hidden border border-white shadow-sm group-hover:shadow-2xl transition-all duration-500 flex flex-col items-center justify-end p-6 pb-0 group-hover:-translate-y-2`}
              >
                 {/* Glassmorphic Background Glow overlay */}
                 <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px] z-0"></div>
                 
                 {/* Project Image */}
                 <div className="relative z-10 w-[95%] h-[95%] rounded-t-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] overflow-hidden bg-white/50 border border-white/60 group-hover:border-white/80 transition-all duration-500 transform group-hover:scale-[1.02]">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover object-center"
                      referrerPolicy="no-referrer"
                    />
                 </div>
              </div>
              <div className="flex flex-col px-2">
                <span className={`text-sm font-bold uppercase tracking-wider mb-2 ${project.accent}`}>
                   {project.category}
                </span>
                <h4 className="text-2xl font-bold text-[#0F172A] group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
