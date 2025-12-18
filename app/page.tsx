"use client";

import { useState, useEffect } from 'react';
import { Nav } from '@/components/layout/Nav';
import { Hero } from '@/components/sections/Hero';
import { ImpactStats } from '@/components/sections/ImpactStats';
import { ExperienceDetailed } from '@/components/sections/ExperienceDetailed';
import { SkillsEducation } from '@/components/sections/SkillsEducation';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';
import { BentoArchitecture } from '@/components/sections/BentoArchitecture';
import { BigAIConsultant } from '@/components/features/BigAIConsultant';
// import { AIConsultant } from '@/components/features/AIConsultant';
// import { Architecture } from '@/components/sections/Architecture';
// import { Experience } from '@/components/sections/Experience';
// import { LogoBar } from '@/components/sections/LogoBar';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-indigo-500/30">
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <Hero />
        {/* <LogoBar /> */}
        <ImpactStats />
        <ExperienceDetailed />
        <BentoArchitecture />
        <BigAIConsultant />
        {/* <AIConsultant /> */}
        {/* <Architecture /> */}
        {/* <Experience /> */}
        <SkillsEducation />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
