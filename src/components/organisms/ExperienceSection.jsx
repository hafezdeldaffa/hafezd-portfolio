import React, { Component } from "react";
import { Briefcase, MapPin } from "lucide-react";
import SectionTitle from "../atoms/SectionTitle";
import { Card } from "../molecules/Card";

export const ExperienceSection = ({ experience }) => (
  <section id="experience" className="py-12 md:py-16">
    <div className="container mx-auto px-4">
      <SectionTitle
        icon={Briefcase}
        title="Professional Journey"
        className="justify-center text-center md:justify-start md:text-left"
      />
      <div className="space-y-10">
        {experience.map((job, index) => (
          <Card key={index}>
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-3">
              <h3 className="text-2xl font-semibold text-indigo-400">
                {job.role}
              </h3>
              <span className="text-sm text-slate-400 mt-1 md:mt-0">
                {job.duration}
              </span>
            </div>
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-5">
              <p className="text-lg font-medium text-slate-200">
                {job.company}
              </p>
              <span className="text-sm text-slate-500 mt-1 md:mt-0 flex items-center">
                <MapPin className="inline h-4 w-4 mr-1.5 text-slate-500" />
                {job.location}
              </span>
            </div>
            <ul className="list-disc list-inside space-y-2 text-slate-300 pl-1">
              {job.description.map((point, i) => (
                <li key={i} className="leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
