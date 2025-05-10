import React, { Component } from "react";
import { GraduationCap } from "lucide-react";
import SectionTitle from "../atoms/SectionTitle";
import { Card } from "../molecules/Card";

export const EducationSection = ({ education }) => (
  <section id="education" className="py-12 md:py-16">
    <div className="container mx-auto px-4">
      <SectionTitle
        icon={GraduationCap}
        title="Academic Background"
        className="justify-center text-center md:justify-start md:text-left"
      />
      {education.map((edu, index) => (
        <Card key={index}>
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
            <h3 className="text-2xl font-semibold text-indigo-400">
              {edu.institution}
            </h3>
            <span className="text-sm text-slate-400 mt-1 md:mt-0">
              {edu.year}
            </span>
          </div>
          <p className="text-lg font-medium text-slate-200 mb-2">
            {edu.degree}
          </p>
          {edu.gpa && (
            <p className="text-md text-slate-300 mb-3">
              GPA:{" "}
              <span className="font-semibold text-slate-100">{edu.gpa}</span>
            </p>
          )}
          {edu.details && (
            <p className="text-md text-slate-400 italic">{edu.details}</p>
          )}
        </Card>
      ))}
    </div>
  </section>
);
