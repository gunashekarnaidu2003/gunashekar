import React from 'react';
import { motion } from 'framer-motion';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Code, FileText, Home } from 'lucide-react';

const Layout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Neural Network Background Animation */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center"
            >
              <motion.span 
                className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                GUNASHEKAR A
              </motion.span>
            </motion.div>
            <div className="flex space-x-8">
              {[
                { path: '/', icon: Home, label: 'Home' },
                { path: '/projects', icon: Code, label: 'Projects' },
                { path: '/resume', icon: FileText, label: 'Resume' },
              ].map(({ path, icon: Icon, label }) => (
                <Link
                  key={path}
                  to={path}
                >
                  <motion.div
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium
                      ${location.pathname === path 
                        ? 'text-blue-400 bg-white/5' 
                        : 'text-gray-300 hover:text-white hover:bg-white/10'}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{label}</span>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ 
            duration: 0.5,
            ease: "easeOut"
          }}
        >
          <Outlet />
        </motion.div>
      </main>
    </div>
  );
};

export default Layout;