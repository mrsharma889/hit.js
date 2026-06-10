import { motion } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/images/hit_js_logo_1781029210703.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Work', href: '/#work' },
    { name: 'Services', href: '/#services' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md py-3 border-b border-gray-100/50 shadow-sm' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/#home" className="flex shrink-0 items-center justify-center w-14 h-14 hover:scale-105 transition-transform overflow-hidden rounded-2xl shadow-md bg-white">
          <img src={logoImg} alt="hit.js logo" className="w-full h-full object-cover scale-[1.7]" referrerPolicy="no-referrer" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-10 text-[15px] font-bold text-gray-600">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                className="hover:text-purple-600 transition-colors duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            to="/#contact"
            className="flex items-center px-6 py-2.5 rounded-full text-[14px] font-bold text-purple-600 bg-white border border-purple-100 shadow-[0_2px_15px_-3px_rgba(168,85,247,0.15)] hover:border-purple-300 hover:shadow-[0_8px_20px_-5px_rgba(168,85,247,0.25)] transition-all group"
          >
            Let's Build <ArrowUpRight className="w-4 h-4 ml-1 text-purple-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-900 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md flex flex-col py-6 px-6 space-y-4 md:hidden border-t border-gray-100 shadow-xl"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-gray-800 font-bold text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/#contact"
            className="flex items-center justify-center mt-4 px-6 py-3 rounded-full text-[15px] font-bold text-white bg-gradient-to-r from-purple-600 to-blue-600 shadow-[0_4px_15px_rgba(168,85,247,0.3)] transition-all"
            onClick={() => setMobileMenuOpen(false)}
          >
            Let's Build <ArrowUpRight className="w-4 h-4 ml-1" />
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
