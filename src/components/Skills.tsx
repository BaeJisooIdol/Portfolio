import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Skill } from "../types/theme";

// Skills data as requested
const skillsData: Skill[] = [
  { name: "HTML/CSS", icon: "🌐", level: 4 },
  { name: "JSP", icon: "📄", level: 4 },
  { name: "Servlet", icon: "🔌", level: 4 },
  { name: "React", icon: "⚛️", level: 4 },
  { name: "JavaScript", icon: "📜", level: 4 },
  { name: "SQL Server", icon: "🗄️", level: 4 },
  { name: "Bootstrap", icon: "🅱️", level: 3 },
  { name: "TailwindCSS", icon: "🎨", level: 3 },
  { name: "TypeScript", icon: "📘", level: 3 },
  { name: "Git", icon: "📂", level: 3 },
];

// Skill progress bar component
function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  const progressRef = useRef<HTMLDivElement>(null);
  const inView = useInView(progressRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="text-xl">{skill.icon}</span>
          <h3 className="font-medium">{skill.name}</h3>
        </div>
        <span className="text-sm">{skill.level}/5</span>
      </div>

      <div
        className="h-2 bg-card rounded-full overflow-hidden"
        ref={progressRef}
      >
        <motion.div
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${(skill.level / 5) * 100}%` : 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <span className="inline-block text-accent text-sm font-medium mb-2">
              My Skills
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-base mb-6">
              I specialize in web development technologies, focusing on creating
              responsive, user-friendly, and functional applications. My
              technical expertise includes:
            </p>

            {/* Summary Points */}
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>
                  Frontend development with HTML/CSS, JavaScript, and
                  Bootstrap/TailwindCSS
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>
                  Backend development with JSP, Servlet, and SQL Server
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Modern web applications with React and TypeScript</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>
                  Version control with Git and collaborative development
                  practices
                </span>
              </li>
            </ul>

            <a href="#contact" className="btn btn-primary">
              Let's Work Together
            </a>
          </motion.div>

          {/* Right Content - Skills Progress Bars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
            {skillsData.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
