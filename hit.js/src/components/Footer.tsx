import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
           <Link to="/#home" className="text-xl font-display font-bold tracking-tight">
            hit.js
          </Link>
          <p className="text-gray-500 text-sm mt-2">© {new Date().getFullYear()} hit.js. All rights reserved.</p>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
             <span className="sr-only">GitHub</span>
             GitHub 
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
            <span className="sr-only">LinkedIn</span>
             LinkedIn
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
            <span className="sr-only">Twitter</span>
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
