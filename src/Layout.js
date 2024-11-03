import React, {useRef, useState} from "react";
import "./index.css"


const Layout = () => {

    const [activeSection, setActiveSection] = useState(null);

    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
  
    const scrollToSection = (sectionRef, sectionNum) => {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });

      setActiveSection(sectionNum);
    };

    return (
      <div className="layout">
        <aside className="sidebar">
          <div className="title">Milos Solaja</div>
          <div className="subtitle">AI and ML Researcher and Developer</div>
          <div class="menu">
          <button onClick={() => scrollToSection(section1Ref, 1)} className={`menu-button ${activeSection === 1 ? "active" : ""}`}>Section 1</button>
          <button onClick={() => scrollToSection(section2Ref, 2)} className={`menu-button ${activeSection === 2 ? "active" : ""}`}>Section 2</button>
          <button onClick={() => scrollToSection(section3Ref, 3)} className={`menu-button ${activeSection === 3 ? "active" : ""}`}>Section 3</button>
          </div>
        </aside>
        <main className="main-content">
            <section ref={section1Ref}>
            <h1>Section 1</h1>
            {/* Add more content to demonstrate scrolling */}
            {[...Array(20)].map((_, i) => (
            <p key={i}>This is line {i + 1} of scrollable content.</p>
            ))}
            </section>
            <section ref={section2Ref}>
            <h1>Section 2</h1>
            {/* Add more content to demonstrate scrolling */}
            {[...Array(20)].map((_, i) => (
            <p key={i}>This is line {i + 1} of scrollable content.</p>
            ))}
            </section>
            <section ref={section3Ref}>
            <h1>Section 3</h1>
            {/* Add more content to demonstrate scrolling */}
            {[...Array(20)].map((_, i) => (
            <p key={i}>This is line {i + 1} of scrollable content.</p>
            ))}
            </section>
        </main>
      </div>
    );
  };
  
  export default Layout;