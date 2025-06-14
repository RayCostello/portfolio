import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";



export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Theme Toggle (finished) */}   
        <ThemeToggle /> 
        {/* Background Effects */}
        <StarBackground />
        {/* NavBar */}
        <Navbar />
        {/* Main Content */}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
        </main>
        {/* Footer */}
        
        </div>
    );
};