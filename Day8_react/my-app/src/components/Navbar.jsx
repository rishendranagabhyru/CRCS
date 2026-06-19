import { useState, useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Navbar({ activePage, setPage, setSelectedCategory, setCourseSearch }) {
  const { dark, setDark } = useContext(ThemeContext);

  const handleNavClick = (page) => {
    setPage(page);
    if (setSelectedCategory) {
      setSelectedCategory("All");
    }
    if (setCourseSearch) {
      setCourseSearch("");
    }
  };

  const handleCourseSelect = (courseName) => {
    setPage("courses");
    if (setCourseSearch) {
      setCourseSearch(courseName);
    }
    if (setSelectedCategory) {
      setSelectedCategory("All");
    }
  };

  return (
    <nav>
      <div className="brand" onClick={() => handleNavClick("home")}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
        </svg>
        SkillHub
      </div>

      <ul>
        <li 
          className={activePage === "home" ? "active" : ""} 
          onClick={() => handleNavClick("home")}
        >
          Home
        </li>

        <li className={`dropdown-container ${activePage === "courses" ? "active" : ""}`}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            Courses 
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </span>
          <div className="dropdown">
            <div className="dropdown-item" onClick={() => handleNavClick("courses")}>All Courses</div>
            <div className="dropdown-item" onClick={() => handleCourseSelect("React")}>React JS</div>
            <div className="dropdown-item" onClick={() => handleCourseSelect("Java")}>Java Programming</div>
            <div className="dropdown-item" onClick={() => handleCourseSelect("Node")}>Node JS</div>
            <div className="dropdown-item" onClick={() => handleCourseSelect("MERN")}>MERN Stack</div>
          </div>
        </li>

        <li 
          className={activePage === "contact" ? "active" : ""} 
          onClick={() => handleNavClick("contact")}
        >
          Contact
        </li>
      </ul>

      <div className="nav-actions">
        <button 
          className="theme-toggle-btn" 
          onClick={() => setDark(!dark)}
          aria-label="Toggle theme"
        >
          {dark ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4"/>
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
