import { useState } from "react";
import { cn } from "@/lib/utils";


const skills = [

    {name: "Java", level: 90, category: "backend"},
    {name: "Python", level: 90, category: "backend"},
    {name: "APIs", level: 88, category: "backend"},
    {name: "Bash Scripting", level: 85, category: "backend"},
    {name: "Embedded Software", level: 65, category: "backend"},

    {name: "JavaScript", level: 78, category: "frontend"},
    {name: "HTML/CSS", level: 80, category: "frontend"},
    {name: "React", level: 75, category: "frontend"},
    {name: "Tailwind CSS", level: 72, category: "frontend"},
    {name: "Java Swing", level: 70, category: "frontend"},
    
    {name: "Git/GitHub", level: 90, category: "devops"},
    {name: "Docker", level: 83, category: "devops"},
    {name: "Testing/QA", level: 79, category: "devops"},
    {name: "CI/CD", level: 78, category: "devops"},
    {name: "Google Cloud", level: 70, category: "devops"},

    {name: "Selenium", level: 78, category: "libraries"},
    {name: "TensorFlow", level: 75, category: "libraries"},
    {name: "JUnit", level: 82, category: "libraries"},
    {name: "SQLite", level: 80, category: "libraries"},
    {name: "OpenCV", level: 75, category: "libraries"},

]

const categories = ["all", "backend", "frontend", "devops", "libraries"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => activeCategory ==="all" || skill.category === activeCategory);

    return (
        <section id="skills" className="py-24 px-4 bg-secondry/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                        key={key} 
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                            "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-second"
                        )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">    
                                <h3 className="font-semibold text-lg"> 
                                    {skill.name}
                                </h3> 
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div 
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                    style={{width: skill.level + "%" }}
                                />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-smm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}