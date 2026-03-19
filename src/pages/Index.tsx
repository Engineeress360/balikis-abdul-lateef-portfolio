import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Leadership from "@/components/Leadership";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Leadership />
      <Skills />
      <Contact />
      <footer className="py-8 px-6 border-t border-border text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Balikis Abdul-Lateef. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
