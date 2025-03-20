// App.js
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const App = () => {
  const [skills] = useState(['C', 'C++', 'Java', 'Python', 'HTML', 'CSS', 'JavaScript', 'SQL', 'Git']);
  const [projects] = useState([
    {
      title: 'Movie Ticket System',
      description: 'Java-based booking platform with real-time seat management',
      link: 'https://github.com/riturajkumar01/MOVIE-TICKET/'
    },
    // Add other projects
  ]);

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <div className="min-h-screen bg-space-black text-neon-gold">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 80 },
            color: { value: "#ffdd57" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            links: {
              enable: true,
              color: "#ffdd57",
              opacity: 0.4
            },
            move: { enable: true, speed: 6 }
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" }
            }
          }
        }}
      />

      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="text-center py-20 relative z-10"
      >
        <motion.h1 
          className="text-6xl font-bold mb-4 text-glow"
          whileHover={{ scale: 1.05 }}
        >
          Rituraj Kumar
        </motion.h1>
        <motion.p 
          className="text-xl mb-8 neon-text"
          whileHover={{ scale: 1.1 }}
        >
          Web Developer | Programmer | Designer
        </motion.p>
        <motion.a 
          href="#projects"
          className="btn-holographic"
          whileHover={{ scale: 1.1 }}
        >
          Explore Projects
        </motion.a>
      </motion.header>

      <main className="container mx-auto px-4 relative z-10">
        {/* About Section */}
        <motion.section 
          id="about"
          className="section-3d"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="description">
            Passionate developer creating immersive web experiences. Currently pursuing B.Tech in Computer Science at SRM University.
          </p>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          id="skills"
          className="section-3d"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="section-title">Technical Arsenal</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                className="skill-card"
                whileHover={{ scale: 1.1 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          id="projects"
          className="section-3d"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                className="project-card"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="btn-holographic">
                  View Project
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          id="contact"
          className="section-3d"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="section-title">Connect With Me</h2>
          <div className="contact-grid">
            <motion.a 
              href="mailto:riturajkumar15384@gmail.com"
              className="contact-card"
              whileHover={{ scale: 1.05 }}
            >
              <FiMail className="text-4xl" />
              <span>Email</span>
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/er-rituraj-kumar-788867288/"
              className="contact-card"
              whileHover={{ scale: 1.05 }}
            >
              <FiLinkedin className="text-4xl" />
              <span>LinkedIn</span>
            </motion.a>
            <motion.a 
              href="https://github.com/riturajkumar01"
              className="contact-card"
              whileHover={{ scale: 1.05 }}
            >
              <FiGithub className="text-4xl" />
              <span>GitHub</span>
            </motion.a>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default App;