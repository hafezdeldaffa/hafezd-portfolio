import React, { Component } from "react";
import { Info } from "lucide-react";
import SectionTitle from "../atoms/SectionTitle";

export const AboutSection = ({ about }) => (
  <section id="about" className="py-12 md:py-12">
    <div className="container mx-auto px-2 max-w-6xl">
      {" "}
      {/* Slightly wider for readability */}
      <SectionTitle
        icon={Info}
        title="About Me"
        className="justify-center text-center md:justify-start md:text-left"
      />
      <div className="bg-slate-800 shadow-xl rounded-xl p-8 md:p-10 border border-slate-700">
        <p className="text-slate-300 leading-relaxed text-lg md:text-xl text-center md:text-left">
          {about}
        </p>
      </div>
    </div>
  </section>
);
