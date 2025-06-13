import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return ( 
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-2"> Raymond</span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> 
                        {" "}
                        Costello
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                Loyal and hard worker with hands-on experience in
                software development, cybersecurity, and systems engineering. 
                Strong background in Agile methodologies, DevOps (Docker, Git) and full-stack development.
                I’m passionate about mission critical systems, defense technology, and collaborative problem solving.
                </p>
                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transofrm -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">
                Scroll
            </span>
            <ArrowDown className="h-t w-5 text-primary" />
        </div>
    </section>
    );
};