import React, {useRef, useState, useEffect} from "react";
import "./index.css"
import {FaGithub, FaLinkedin, FaInstagram, FaXTwitter, FaGoogle, FaArrowUpRightFromSquare} from "react-icons/fa6"
import CV from "./pdf/CV.pdf"
import {content, experienceData1, experienceData2, projectData1, projectData2} from './content';
import Experience from "./Experience";
import Project from "./Project";

const Layout = () => {

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
          <div className="title">MILOŠ ŠOLAJA</div>
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
            <div className="text-main-content">
              {content.bio.map((item, index) =>
                  typeof item === "string" ? (
                    item
                  ) : (
                    <a
                      key={index}
                      href={item.href}
                      className="content-link hover:font-semibold"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.text}
                    </a>
                  )
                )}
            </div>
            </section>
            <section ref={sectionRefs[2]} data-section="2">
            <h1>Experience</h1>
            <Experience
                date={experienceData1.date}
                title={experienceData1.title}
                company={experienceData1.company}
                description={experienceData1.description}
                technologies={experienceData1.technologies}
                githubLink={experienceData1.githubLink}
            />
            <Experience
                date={experienceData2.date}
                title={experienceData2.title}
                company={experienceData2.company}
                description={experienceData2.description}
                technologies={experienceData2.technologies}
                githubLink={experienceData2.githubLink}
            />
            </section>
            <section ref={sectionRefs[3]} data-section="3">
            <h1>Projects</h1>
            <Project 
                title={projectData1.title}
                position={projectData1.position}
                timeline={projectData1.timeline}
                institution={projectData1.institution}
                description={projectData1.description}
                technologies={projectData1.technologies}
                projectLink={projectData1.projectLink}
            />
            <Project 
                title={projectData2.title}
                position={projectData2.position}
                timeline={projectData2.timeline}
                institution={projectData2.institution}
                description={projectData2.description}
                technologies={projectData2.technologies}
                projectLink={projectData2.projectLink}
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