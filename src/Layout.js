import React, {useRef} from "react";
import "./index.css"

const Layout = () => {
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
  
    const scrollToSection = (sectionRef) => {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    };


    return (
      <div className="layout">
        <aside className="sidebar">
          <div className="title">Milos Solaja</div>
          <div className="subtitle">AI and ML Researcher and Developer</div>
          <button onClick={() => scrollToSection(section1Ref)}>Section 1</button>
          <button onClick={() => scrollToSection(section2Ref)}>Section 2</button>
          <button onClick={() => scrollToSection(section3Ref)}>Section 3</button>
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