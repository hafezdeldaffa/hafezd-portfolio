import { portfolioData } from "./data/portofolioData";
import { MinimalHeroSection } from "./components/organisms/MinimalHeroSection";
import { ChatbotSection } from "./components/organisms/ChatbotSection";
import { AboutSection } from "./components/organisms/AboutSection";
import { CertificationsSection } from "./components/organisms/CertificationsSection";
import { ExperienceSection } from "./components/organisms/ExperienceSection";
import { EducationSection } from "./components/organisms/EducationSection";
import { SkillsSection } from "./components/organisms/SkillsSection";
import { Footer } from "./components/organisms/Footer";
import "./index.css";

// --- Main App Component ---
export default function App() {
  // Enforce dark theme by default
  // const [isDarkMode, setIsDarkMode] = useState(true); // No toggle needed for enforced dark theme

  // Function to create a concise profile summary for the AI context
  const getProfileContext = (data) => {
    return `Name: ${data.name}. Title: ${data.title}. Key Skills: ${[
      ...data.skills.technical.slice(0, 3),
      ...data.skills.soft.slice(0, 3),
    ].join(", ")}. Recent Experience: ${data.experience[0].role} at ${
      data.experience[0].company
    }. About: ${data.about.substring(0, 100)}...`
      .replace(/\s+/g, " ")
      .trim();
  };
  const profileContext = getProfileContext(portfolioData);

  return (
    // Apply 'dark' class directly to the root div to enforce dark theme
    <div className="dark">
      <main className="font-sans bg-slate-950 min-h-screen text-slate-300">
        {" "}
        {/* Base dark background and text color */}
        <MinimalHeroSection
          name={portfolioData.name}
          title={portfolioData.title}
          email={portfolioData.email}
          linkedin={portfolioData.linkedin}
        />
        <ChatbotSection profileContext={profileContext} />
        {/* Wrapper for Secondary Content */}
        <div className="container mx-auto px-4 py-16 md:py-20 mt-10">
          {/* Secondary content sections are now styled with Card component directly or within their own structure */}
          <AboutSection about={portfolioData.about} />
          <ExperienceSection experience={portfolioData.experience} />
          <EducationSection education={portfolioData.education} />
          <SkillsSection skills={portfolioData.skills} />
          <CertificationsSection
            certifications={portfolioData.certifications}
          />
        </div>
        <Footer name={portfolioData.name} />
      </main>
    </div>
  );
}
