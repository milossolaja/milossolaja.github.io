import React, { useRef, useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter, FaGoogle, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { content, experienceData1, experienceData2, projectData1, projectData2 } from './content';
import Experience from "./Experience";
import Project from "./Project";
import CV from "./pdf/CV.pdf";
import "./index.css"

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
      threshold: 0.7, // Trigger when 70% of the section is visible
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

  const ContactButton = ({ href, icon: Icon }) => (
    <button className="contact-button" onClick={() => window.open(href, "_blank")}>
      <Icon />
    </button>
  );

  const MenuButton = ({ section, activeSection, scrollToSection, label }) => (
    <button onClick={() => scrollToSection(section)} className={`menu-button ${activeSection === section ? "active" : ""}`}>
      {label}
    </button>
  );

  return (
    <div className="layout">
      <div ref={cursor} className="cursor-grad" />
      <aside className="sidebar">
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
      <div className="contact-grid">
        {[
          { href: "https://github.com/milos-sol", icon: FaGithub },
          { href: "https://www.linkedin.com/in/milossolaja/", icon: FaLinkedin },
          { href: "https://x.com/MilosSolaja", icon: FaXTwitter },
          { href: "https://instagram.com/milossolaja/", icon: FaInstagram },
          { href: `mailto:milossolaja96@gmail.com?subject=${encodeURIComponent("Contact me")}&body=${encodeURIComponent("Hello, I would like to get in touch.")}`, icon: FaGoogle }
        ].map((contact, index) => (
          <ContactButton key={index} {...contact} />
        ))}
      </div>
      </aside>
      <main className="main-content">
        <section ref={sectionRefs[1]} data-section="1">
          <div className="text-main-content">
            {content.bio.map((paragraph, paragraphIndex) => (
              <div key={paragraphIndex} className="paragraph">
                {paragraph.map((item, itemIndex) =>
                  typeof item === "string" ? (
                    <span key={itemIndex}>{item}</span>
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
          <Experience {...experienceData1}/>
          <Experience {...experienceData2}/>
        </section>
        <section ref={sectionRefs[3]} data-section="3">
          <h1 style={{ marginTop: '54px' }}>Projects</h1>
          <Project {...projectData1}/>
          <Project {...projectData2}/>
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