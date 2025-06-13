import { Code, User, Briefcase } from "lucide-react";
export const AboutSection = () => {
    return ( <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-autoo max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3>Passionate about Technology and Problem Solving</h3>
                    <p className="text-muted-foreground">
                        I have had 2 years of Software Developer experience at
                        General Dynamics Information Technology and I specialize in Automation, Data Management, and DevOps.
                    </p>
                    <p className="text-muted-foreground">
                        I'm passionate about using technology to solve real-world problems and
                        improve people's lives. I love working on projects that challenge me 
                        and allow me to learn new skills.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get in Touch 
                        </a>
                        {/* href should have link to CV */}
                        <a href="" className="px-6 py-2 rounded-full border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download CV 
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="text-semi-bold text-lg"> Web Development</h4>
                                <p className="tezt-muted-foreground">
                                    Creating, Handling, and Testing reponsive
                                    websites and web applications with modern frameworks.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    );
};