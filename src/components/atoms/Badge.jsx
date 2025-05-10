import React from "react";

// Badge component with updated dark theme styling for better contrast
export const Badge = ({ children, className = "" }) => (
  <span
    className={`inline-block bg-indigo-500 text-indigo-50 text-xs font-medium px-3 py-1 rounded-full ${className}`}
  >
    {children}
  </span>
);
