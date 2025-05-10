import React, { Component } from "react";
import { Award } from "lucide-react";
import SectionTitle from "../atoms/SectionTitle";
import { Card } from "../molecules/Card";

export const CertificationsSection = ({ certifications }) => (
  <section id="certifications" className="py-12 md:py-16">
    <div className="container mx-auto px-4">
      <SectionTitle
        icon={Award}
        title="Certifications & Courses"
        className="justify-center text-center md:justify-start md:text-left"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certifications.map((cert, index) => (
          <Card key={index} className="flex items-center space-x-5 p-6">
            <cert.icon className="h-10 w-10 text-amber-400 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-slate-100">
                {cert.name}
              </h3>
              <p className="text-sm text-slate-400">{cert.issuer}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
