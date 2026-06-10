import { motion } from 'motion/react';
import { Send, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_80%)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row gap-16">
        
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 flex flex-col justify-center"
        >
          <h2 className="text-sm font-semibold tracking-wider text-purple-600 uppercase mb-4">Start A Project</h2>
          <h3 className="text-4xl md:text-6xl font-display font-bold text-gray-900 leading-tight mb-6">
            Let's build your next system.
          </h3>
          <p className="text-xl text-gray-600 mb-10">
            Tell me about your business goals, and I'll architect the digital solution to get you there.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center">
                <Mail className="w-5 h-5 text-cyan-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Direct Email</p>
                {/* 1. This displays the email text on the page */}
                <a href="mailto:mohitiitbsharma26@gmail.com" className="text-lg font-bold text-gray-900 hover:text-cyan-600 transition-colors">
                  mohitiitbsharma26@gmail.com
                </a>
              </div>
            </div>
            
            <div className="inline-block px-4 py-2 bg-gray-100 rounded-full">
              <span className="text-sm text-gray-600 font-medium flex items-center">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                I usually respond within 24–48 hours.
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <div className="glass p-8 md:p-12 rounded-3xl shadow-xl border border-white/60">
            {/* 2. Update the 'action' attribute below to change where the form sends submissions */}
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get('name') as string;
              const email = formData.get('email') as string;
              const message = formData.get('message') as string;
              const subject = encodeURIComponent(`New inquiry from ${name || 'Website'}`);
              const body = encodeURIComponent(`Name: ${name || ''}\nEmail: ${email || ''}\n\nMessage:\n${message || ''}`);
              window.open(`mailto:mohitiitbsharma26@gmail.com?subject=${subject}&body=${body}`, '_blank');
            }} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none placeholder:text-gray-400"
                  placeholder="Tell me about your project needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full group mt-4 flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-800 shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Send Message
                <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
