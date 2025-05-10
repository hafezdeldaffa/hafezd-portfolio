// src/components/atoms/SectionTitle.jsx
import React from "react";
// Icons are expected to be passed as components from lucide-react

const SectionTitle = ({ icon: Icon, title, className = "" }) => (
  <h2
    className={`text-3xl md:text-4xl font-bold text-slate-100 mb-8 flex items-center ${className}`}
  >
    {/* This is where the Icon component is used */}
    {Icon && <Icon className="mr-3 h-7 w-7 text-indigo-400" />}
    {title}
  </h2>
);

export default SectionTitle;
