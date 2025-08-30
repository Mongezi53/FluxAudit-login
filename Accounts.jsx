import React from 'react';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <div className="min-h-screen w-full font-inter bg-gradient-to-br from-[#0a0a0a] via-[#1c1c1c] to-[#2a2a2a] text-white overflow-hidden">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-8 py-4 bg-black bg-opacity-30 backdrop-blur-md shadow-md fixed top-0 z-50">
        <div className="text-2xl font-bold text-white">FluxAudit</div>
        <div className="flex space-x-10 text-lg">
          <a href="#help" className="hover:text-[#7dcfff]">Help</a>
          <a href="#accounts" className="hover:text-[#7dcfff]">Accounts</a>
          <a href="#pricing" className="hover:text-[#7dcfff]">Pricing</a>
          <a href="#explore" className="hover:text-[#7dcfff]">Explore</a>
        </div>
        <div className="flex space-x-6 text-lg">
          <button className="hover:text-[#7dcfff]">Login</button>
          <button className="bg-[#7dcfff] text-black px-4 py-1 rounded-md hover:bg-[#5bb9dd]">Sign Up</button>
        </div>
      </nav>

      {/* Page Heading */}
      <div className="text-center pt-64 pb-6 w-full">
        <h1 className="text-5xl font-bold text-[#7dcfff]">Accounts FluxAudit Offers</h1>
      </div>

      <div className="flex flex-col items-center w-full px-6 space-y-32 snap-y snap-mandatory overflow-y-scroll h-screen pt-0">
        <FadeSection>
          <ImageTextSection
            image="https://placehold.co/600x400/2c2c2e/ffffff?text=Dashboard+Admin"
            title="Admin Account"
            text="Admin has full access to create, manage, and revoke staff accounts. They also handle permission hierarchies and monitor system usage logs for administrative oversight."
          />
        </FadeSection>
        <FadeSection>
          <ImageTextSection
            image="https://placehold.co/600x400/2c2c2e/ffffff?text=Dashboard+Staff"
            title="Staff Account"
            text="Provides streamlined access to tools and dashboards necessary for daily tasks. Staff users benefit from performance tracking, communication modules, and process automation."
          />
        </FadeSection>
        <FadeSection>
          <ImageTextSection
            image="https://placehold.co/600x400/2c2c2e/ffffff?text=Dashboard+CFO"
            title="CFO Account"
            text="Delivers a comprehensive financial overview including spending insights, trend analysis, and fiscal planning tools, optimized for real-time strategic decision-making."
          />
        </FadeSection>
      </div>
    </div>
  );
};

const FadeSection = ({ children }) => (
  <motion.div
    className="w-full flex justify-center snap-center min-h-screen"
    initial={{ opacity: 0, y: 60, filter: 'blur(14px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    exit={{ opacity: 0, y: -60, filter: 'blur(14px)' }}
    transition={{ duration: 1.8 }}
    viewport={{ once: false, amount: 0.2 }}
  >
    {children}
  </motion.div>
);

const ImageTextSection = ({ image, title, text }) => (
  <div className="flex flex-col md:flex-row-reverse items-center md:items-start w-full max-w-6xl gap-12">
    <motion.img
      src={image}
      alt={title}
      className="w-full md:w-1/2 rounded-lg shadow-xl object-cover"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = 'https://placehold.co/600x400/2c2c2e/ffffff?text=Image+Not+Found';
      }}
      initial={{ opacity: 0, x: 80, filter: 'blur(12px)' }}
      whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
      transition={{ duration: 1.8 }}
      viewport={{ once: false, amount: 0.3 }}
    />
    <div className="md:w-1/2">
      <h2 className="text-[2.75rem] font-bold mb-4 text-white">{title}</h2>
      <p className="text-2xl text-gray-300 leading-relaxed">{text}</p>
    </div>
  </div>
);

export default App;
