import { Linkedin, Mail } from "lucide-react";
import React from "react";

export const MinimalHeroSection = ({ name, title, email, linkedin }) => (
  <section
    id="hero-minimal"
    className="py-16 md:py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white"
  >
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">
        {name}
      </h1>
      <p className="text-xl md:text-2xl text-slate-300 font-medium mb-8">
        {title}
      </p>
      <div className="flex justify-center items-center space-x-6">
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center text-slate-300 hover:text-indigo-400 transition-colors duration-300 group"
          aria-label="Email Hafezd"
        >
          <Mail className="h-6 w-6 mr-2 transition-transform duration-300 group-hover:scale-110" />
          <span className="hidden sm:inline">Email</span>
        </a>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-slate-300 hover:text-indigo-400 transition-colors duration-300 group"
          aria-label="Hafezd's LinkedIn Profile"
        >
          <Linkedin className="h-6 w-6 mr-2 transition-transform duration-300 group-hover:scale-110" />
          <span className="hidden sm:inline">LinkedIn</span>
        </a>
      </div>
    </div>
  </section>
);
