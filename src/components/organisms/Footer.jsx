import React, { Component } from "react";

export const Footer = ({ name }) => (
  <footer className="py-10 bg-black text-center text-slate-500 mt-20">
    <div className="container mx-auto px-4">
      <p>
        &copy; {new Date().getFullYear()} {name}. All rights reserved.
      </p>
      <p className="text-xs mt-2">
        Crafted with React & Tailwind CSS. AI Assistant by Datasaur.
      </p>
    </div>
  </footer>
);
