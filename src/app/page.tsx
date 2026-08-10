import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TopProjects } from "@/components/sections/TopProjects";
import { Writing } from "@/components/sections/Writing";
import { MinionConsole } from "@/components/sections/MinionConsole";
import { DataViz } from "@/components/sections/DataViz";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Leadership } from "@/components/sections/Leadership";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <TopProjects />
        <Writing />
        <MinionConsole />
        <DataViz />
        <Skills />
        <Experience />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
