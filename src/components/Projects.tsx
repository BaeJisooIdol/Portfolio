import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import type { Project } from "../types/theme";

// Updated project data as requested
const projectsData: Project[] = [
  {
    id: "1",
    title: "Online Course Website",
    description:
      "A comprehensive platform for online learning with user authentication, course catalog, enrollment management, and admin dashboard.",
    tags: [
      "JSP",
      "Servlet",
      "HTML/CSS",
      "Bootstrap",
      "JavaScript",
      "SQL Server",
    ],
    image: "imgs/online_course_website.png",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/LightHousek3/LightHouseCourse",
  },
  {
    id: "2",
    title: "Bakery and Coffee Website",
    description:
      "An e-commerce website for a bakery and coffee shop featuring online ordering, product catalog, shopping cart, and customer management.",
    tags: [
      "JSP",
      "Servlet",
      "HTML/CSS",
      "Bootstrap",
      "JavaScript",
      "SQL Server",
    ],
    image: "imgs/bakery_and_coffee.png",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/BaeJisooIdol/LightHouseShop",
  },
];

// Filter categories
const categories = [
  "All",
  "JSP",
  "Servlet",
  "HTML/CSS",
  "JavaScript",
  "SQL Server",
  "Bootstrap",
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter projects based on selected category
  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((project) => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block text-accent text-sm font-medium mb-2">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-base">
            Here are my featured projects that showcase my web development
            skills. Each project demonstrates my expertise with JSP, Servlet,
            and related technologies.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-1 rounded-full text-sm transition-all ${activeFilter === category
                ? "bg-primary text-white"
                : "bg-card hover:bg-card/80"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Show More Projects Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/BaeJisooIdol"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
}
