"use client";
import React, { useRef } from 'react'
import ProjectCard from './ProjectCard';
import { motion, useInView } from "framer-motion";


const projectsData = [
    {
        id: 1,
        title: "Music Player Application",
        description: "A song website which is more of like a clone of spotify",
        image: "/images/music-app.png",
    },
    {
        id: 2,
        title: "Attendance Automation System",
        description: "An app for schools and colleges that uses face recognition to mark attendance of the students",
        image: "/images/attendance-automation.png"
    },
    {
        id: 3,
        title: "Movie Reccomendation System",
        description: "A Python project that recommends you movies based on any selected movie",
        image: "/images/movie-recommendation.png",
    }
];

function ProjectsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
      };
    return (
        <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
    )
}

export default ProjectsSection
