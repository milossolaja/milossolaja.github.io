import React, {useRef, useState, useEffect} from "react";
import "./index.css"
import Box from "./Box"


const Layout = () => {

    const [activeSection, setActiveSection] = useState(null);

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

    return (
      <div className="layout">
        <aside className="sidebar">
          <div className="title">Milos Solaja</div>
          <div className="subtitle">AI and ML Researcher and Developer</div>
          <div class="menu">
            <button onClick={() => scrollToSection(1)} className={`menu-button ${activeSection === 1 ? "active" : ""}`}>About</button>
            <button onClick={() => scrollToSection(2)} className={`menu-button ${activeSection === 2 ? "active" : ""}`}>Experience</button>
            <button onClick={() => scrollToSection(3)} className={`menu-button ${activeSection === 3 ? "active" : ""}`}>Projects</button>
          </div>
        </aside>
        <main className="main-content">
            <section ref={sectionRefs[1]} data-section="1">
            <h1>About</h1>
            {[...Array(20)].map((_, i) => (
            <p key={i}>This is line {i + 1} of scrollable content.</p>
            ))}
            </section>
            <section ref={sectionRefs[2]} data-section="2">
            <h1>Experience</h1>
            <Box>
            {[...Array(20)].map((_, i) => (
            <p key={i}>This is line {i + 1} of scrollable content.</p>
            ))}
            </Box>
            </section>
            <section ref={sectionRefs[3]} data-section="3">
            <h1>Projects</h1>
            <Box>
            {[...Array(20)].map((_, i) => (
            <p key={i}>This is line {i + 1} of scrollable content.</p>
            ))}
            </Box>
            </section>
        </main>
      </div>
    );
  };
  
  export default Layout;