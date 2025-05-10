import React, { Component } from "react";
import { Brain, Languages, Settings, Users, Wrench } from "lucide-react";
import SectionTitle from "../atoms/SectionTitle";
import { Card } from "../molecules/Card";
import { Badge } from "../atoms/Badge";

export const SkillsSection = ({ skills }) => (
  <section id="skills" className="py-12 md:py-16">
    <div className="container mx-auto px-4">
      <SectionTitle
        icon={Wrench}
        title="Expertise & Toolkit"
        className="justify-center text-center md:justify-start md:text-left"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <h3 className="text-xl font-semibold mb-5 text-slate-100 flex items-center">
            <Brain className="mr-2.5 h-6 w-6 text-indigo-400" />
            Technical Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.technical.map((skill, index) => (
              <Badge key={index}>{skill}</Badge>
            ))}
          </div>
        </Card>
        <Card>
          <h3 className="text-xl font-semibold mb-5 text-slate-100 flex items-center">
            <Users className="mr-2.5 h-6 w-6 text-teal-400" />
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.soft.map((skill, index) => (
              <Badge key={index} className="bg-teal-500 text-teal-50">
                {skill}
              </Badge>
            ))}
          </div>
        </Card>
        <Card>
          <h3 className="text-xl font-semibold mb-5 text-slate-100 flex items-center">
            <Settings className="mr-2.5 h-6 w-6 text-purple-400" />
            Tools & Platforms
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.tools.map((tool, index) => (
              <Badge key={index} className="bg-purple-500 text-purple-50">
                {tool}
              </Badge>
            ))}
          </div>
        </Card>
        <Card>
          <h3 className="text-xl font-semibold mb-5 text-slate-100 flex items-center">
            <Languages className="mr-2.5 h-6 w-6 text-pink-400" />
            Languages
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.languages.map((lang, index) => (
              <Badge key={index} className="bg-pink-500 text-pink-50">
                {lang}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </div>
  </section>
);
