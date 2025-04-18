import React, { useRef, useState, useEffect } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { content, experienceData1, experienceData2, experienceData3, projectData1, projectData2, projectData3} from './content';
import Loadingpage from "./Loadingpage";
import Experience from "./Experience";
import Project from "./Project";
import ContactGrid from "./ContactGrid";
import "./layout.css"

const Layout = () => {

  const [activeSection, setActiveSection] = useState(null);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const MenuButton = ({ section, activeSection, scrollToSection, label }) => (
    <button onClick={() => scrollToSection(section)} className={`menu-button ${activeSection === section ? "active" : ""}`}>
      {label}
    </button>
  );

  return (
    loading ? <Loadingpage /> :
      <div className="layout">
        <div ref={cursor} className="cursor-grad" />
        <aside className="sidebar">
          <div className="logo-container"></div>
          <div className="title">MILOŠ ŠOLAJA</div>
          <div className="subtitle">AI & ML Researcher and Developer</div>
          <div className="second-subtitle">I build innovative AI and ML solutions to solve real-world <br /> challenges and drive technological advancements.</div>
          <div className="menu">
            {['About', 'Experience', 'Projects'].map((label, index) => (
              <MenuButton
                key={index}
                section={index + 1}
                activeSection={activeSection}
                scrollToSection={scrollToSection}
                label={label}
              />
            ))}
          </div>
          <ContactGrid />
        </aside>
        <main className="main-content">
          <section ref={sectionRefs[1]} data-section="1">
            <div className="text-main-content">
              {content.bio.map((paragraph, paragraphIndex) => (
                <div key={paragraphIndex} className="paragraph">
                  {paragraph.map((item, itemIndex) =>
                    typeof item === "string" ? (
                      item.includes("<br />") ? (
                        item.split("<br />").map((part, index) => (
                          <span key={index}>{part}<br /></span>
                        ))
                      ) : (
                        <span key={itemIndex}>{item}</span>
                      )
                    ) : (
                      <a
                        key={itemIndex}
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
              ))}
            </div>
          </section>
          <section ref={sectionRefs[2]} data-section="2">
            <h1>Experience</h1>
            <Experience {...experienceData1} />
            <Experience {...experienceData2} />
            <Experience {...experienceData3} />
          </section>
          <section ref={sectionRefs[3]} data-section="3">
            <h1 style={{ marginTop: '54px' }}>Projects</h1>
            <Project {...projectData1} />
            <Project {...projectData2} />
            <Project {...projectData3} />
          </section>
          <a href={'/pdf/CV.pdf'} target="_blank" rel="noreferrer" className="resume-link">
            <span className="resume-text">Get Full Resume</span>
            <FaArrowUpRightFromSquare className="resume-icon" />
          </a>
        </main>
      </div>
  );
};

export default Layout;