import React from "react";

// Card component with updated dark theme styling
export const Card = ({ children, className = "" }) => (
  <div
    className={`bg-slate-800 shadow-xl rounded-xl p-6 md:p-8 border border-slate-700 hover:shadow-indigo-500/20 transition-shadow duration-300 ${className}`}
  >
    {children}
  </div>
);
