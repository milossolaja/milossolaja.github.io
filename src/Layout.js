import React, {useRef, useState, useEffect} from "react";
import "./index.css"
import {FaGithub, FaLinkedin, FaInstagram, FaXTwitter, FaGoogle, FaArrowUpRightFromSquare} from "react-icons/fa6"
import CV from "./pdf/CV.pdf"
import content from './content';
import Experience from "./Experience";
import Project from "./Project";

const Layout = () => {

    const experienceData = {
        date: "March 2023 - August 2023",
        title: "Position X",
        company: "Company ABC",
        description: "Developed a hyperautomation agent for social media content creation.",
        technologies: ["React", "Next.js", "Node.js", "NLP"],
        githubLink: "https://github.com/your-username/your-repo"
      };

    const projectData = {
        timeline: "March 2023 - August 2023",
        title: "Project X",
        institution: "Company ABC",
        description: "Developed a hyperautomation agent for social media content creation.",
        technologies: ["React", "Next.js", "Node.js", "NLP"],
        projectLink: "https://github.com/your-username/your-repo"
      };

    const [activeSection, setActiveSection] = useState(null);
    
    const cursor = useRef(null);

    const sectionRefs = {
        1: useRef(null),
        2: useRef(null),
        3: useRef(null),
      };
  
    const scrollToSection = (sectionNum) => {
      sectionRefs[sectionNum].current.scrollIntoView({ behavior: "smooth" });

      setActiveSection(sectionNum);
    };

    const observeSections = () => {
        const observerOptions = {
            root: null, 
            rootMargin: "0px",
            threshold: 0.5, // Trigger when 50% of the section is visible
          };
  
          const observerCallback = (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  const sectionNumber = entry.target.getAttribute("data-section");
                  setActiveSection(parseInt(sectionNumber, 10));
                }
              });
            };
  
            const observer = new IntersectionObserver(observerCallback, observerOptions);
  
            // Observe each section
            Object.values(sectionRefs).forEach((ref) => {
              if (ref.current) observer.observe(ref.current);
            });
        
            // Cleanup observer on component unmount
            return () => {
              Object.values(sectionRefs).forEach((ref) => {
                if (ref.current) observer.unobserve(ref.current);
              });
            };
    }

    useEffect(() => {
        observeSections();
    });

    
    useEffect(() => {
        const handleMouseMove = (e) => {
          if (cursor.current) {
            const x = e.clientX;
            const y = e.clientY;
            cursor.current.style.setProperty('--x', `${x}px`);
            cursor.current.style.setProperty('--y', `${y}px`);
          }
        };
    
        document.addEventListener('mousemove', handleMouseMove);
    
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);
    
    return (
    <div className="layout">
        <div ref={cursor} className="cursor-grad" />
        <aside className="sidebar">
          <div className="title">Miloš Šolaja</div>
          <div className="subtitle">AI and ML Researcher and Developer</div>
          <div className="second-subtitle">I build innovative AI and ML solutions to solve real-world challenges and drive technological advancements.</div>
          <div className="menu">
            <button onClick={() => scrollToSection(1)} className={`menu-button ${activeSection === 1 ? "active" : ""}`}>About</button>
            <button onClick={() => scrollToSection(2)} className={`menu-button ${activeSection === 2 ? "active" : ""}`}>Experience</button>
            <button onClick={() => scrollToSection(3)} className={`menu-button ${activeSection === 3 ? "active" : ""}`}>Projects</button>
          </div>
          <div className="contact-grid">
            <button className="contact-button" onClick={() => window.open("https://github.com/milos-sol", "_blank")}>
                <FaGithub />
            </button>
            <button className="contact-button" onClick={() => window.open("https://www.linkedin.com/in/milossolaja/", "_blank")}>
                <FaLinkedin />
            </button>
            <button className="contact-button" onClick={() => window.open("https://x.com/MilosSolaja", "_blank")}>
                <FaXTwitter />
            </button>
            <button className="contact-button" onClick={() => window.open("https://instagram.com/milossolaja/", "_blank")}>
                <FaInstagram />
            </button>
            <button className="contact-button" onClick={() => window.location.href = `mailto:${"milossolaja96@gmail.com"}?subject=${encodeURIComponent("Contact me")}&body=${encodeURIComponent("Hello, I would like to get in touch.")}`}>
                <FaGoogle />
            </button>
          </div>
        </aside>
        <main className="main-content">
            <section ref={sectionRefs[1]} data-section="1">
            <div className="text-main-content">{content.bio}</div>
            </section>
            <section ref={sectionRefs[2]} data-section="2">
            <h1>Experience</h1>
            <Experience
                date={experienceData.date}
                title={experienceData.title}
                company={experienceData.company}
                description={experienceData.description}
                technologies={experienceData.technologies}
                githubLink={experienceData.githubLink}
            />
            </section>
            <section ref={sectionRefs[3]} data-section="3">
            <h1>Projects</h1>
            <Project 
                title={projectData.title}
                timeline={projectData.timeline}
                institution={projectData.institution}
                description={projectData.description}
                technologies={projectData.technologies}
                projectLink={projectData.projectLink}
            />
            </section>
            <a href={CV} target="_blank" rel="noreferrer" className="resume-link">
            <span className="resume-text">Get Full Resume</span>
            <FaArrowUpRightFromSquare className="resume-icon" />
            </a>
        </main>
      </div>
    );
  };
  
  export default Layout;