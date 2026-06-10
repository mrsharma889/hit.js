import { motion } from 'motion/react';
import { Cpu, Terminal, Layout, Layers } from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'Web Applications', icon: Layout, color: 'text-cyan-500', bg: 'bg-cyan-50' },
    { name: 'AI Automation', icon: Cpu, color: 'text-purple-500', bg: 'bg-purple-50' },
    { name: 'Backend Systems', icon: Terminal, color: 'text-blue-500', bg: 'bg-blue-50' },
    { name: 'APIs & Integration', icon: Layers, color: 'text-indigo-500', bg: 'bg-indigo-50' },
  ];

  return (
    <section id="about" className="py-24 relative z-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-sm font-semibold tracking-wider text-cyan-600 uppercase">About The Studio</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 leading-tight">
              Engineering the future of digital operations.
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed pt-4">
              I specialize in building modern web applications, automation systems, and AI-powered tools that help businesses streamline operations and scale efficiently. 
              Bridging the gap between beautiful design and complex engineering.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every system is engineered from the ground up for speed, security, and exceptional user experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-2xl flex flex-col items-start gap-4 card-glow transition-all duration-300"
              >
                <div className={`p-4 rounded-xl ${skill.bg}`}>
                  <skill.icon className={`w-8 h-8 ${skill.color}`} />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">{skill.name}</h4>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
