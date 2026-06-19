import { useState } from "react";
import { ThemeProvider } from "./components/ThemeContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";

const COURSES_DATA = [
  {
    title: "React JS",
    category: "Frontend",
    students: 1200,
    duration: "24 hrs",
    rating: 4.8,
    difficulty: "Beginner",
    description: "Build modern, fast interfaces with React hooks, context, and state management.",
    curriculum: ["React basics & components", "Hooks & state handling", "Context API & routing", "Vite & production building"]
  },
  {
    title: "Java Programming",
    category: "Backend",
    students: 950,
    duration: "32 hrs",
    rating: 4.6,
    difficulty: "Intermediate",
    description: "Learn object-oriented programming, streams, multithreading, and collections.",
    curriculum: ["OOP Principles", "Java Collections & Streams", "Multithreading & Concurrency", "File handling & DB connection"]
  },
  {
    title: "Node JS",
    category: "Backend",
    students: 820,
    duration: "20 hrs",
    rating: 4.7,
    difficulty: "Intermediate",
    description: "Create fast APIs, build express servers, and manage filesystems efficiently.",
    curriculum: ["Express & Middlewares", "Asynchronous Programming", "REST API Development", "JWT Authentication"]
  },
  {
    title: "MongoDB",
    category: "Database",
    students: 740,
    duration: "16 hrs",
    rating: 4.5,
    difficulty: "Beginner",
    description: "Master NoSQL document structures, queries, aggregations, and performance.",
    curriculum: ["Document Model", "CRUD Operations", "Aggregation Framework", "Indexing & Performance Tuning"]
  },
  {
    title: "MERN Stack",
    category: "Frontend",
    students: 1100,
    duration: "40 hrs",
    rating: 4.9,
    difficulty: "Advanced",
    description: "Synthesize MongoDB, Express, React, and Node into a cohesive production web application.",
    curriculum: ["Fullstack Architecture", "User Authentication & Roles", "State Management with Context", "Deployment to Production"]
  },
  {
    title: "Spring Boot",
    category: "Backend",
    students: 870,
    duration: "28 hrs",
    rating: 4.8,
    difficulty: "Advanced",
    description: "Build scalable enterprise backend services with dependency injection and JPA.",
    curriculum: ["Dependency Injection", "Spring Data JPA & Hibernate", "Spring Security", "Microservices Architecture"]
  },
  {
    title: "Cloud Computing Basics",
    category: "Cloud",
    students: 600,
    duration: "15 hrs",
    rating: 4.7,
    difficulty: "Beginner",
    description: "Get started with AWS, deployment pipelines, virtual machines, and cloud storage.",
    curriculum: ["Introduction to Cloud computing", "AWS S3 & EC2 instances", "CI/CD Deployment Pipelines", "Cloud Security Basics"]
  }
];

function App() {
  const [activePage, setPage] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [courseSearch, setCourseSearch] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const renderActivePage = () => {
    switch (activePage) {
      case "home":
        return (
          <Home 
            courses={COURSES_DATA} 
            onViewDetails={setSelectedCourse} 
            setPage={setPage} 
          />
        );
      case "courses":
        return (
          <Courses 
            courses={COURSES_DATA} 
            selectedCategory={selectedCategory} 
            search={courseSearch} 
            setSearch={setCourseSearch} 
            onViewDetails={setSelectedCourse} 
          />
        );
      case "contact":
        return <Contact />;
      default:
        return (
          <Home 
            courses={COURSES_DATA} 
            onViewDetails={setSelectedCourse} 
            setPage={setPage} 
          />
        );
    }
  };

  return (
    <ThemeProvider>
      <Navbar 
        activePage={activePage} 
        setPage={setPage} 
        setSelectedCategory={setSelectedCategory} 
        setCourseSearch={setCourseSearch} 
      />

      <div className="layout">
        <Sidebar 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory} 
          activePage={activePage} 
          setPage={setPage} 
          courses={COURSES_DATA} 
        />

        <main>
          {renderActivePage()}
        </main>
      </div>

      <Footer setPage={setPage} />

      {/* Modal View for Course Details */}
      {selectedCourse && (
        <div className="modal-overlay" onClick={() => setSelectedCourse(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedCourse.title}</h3>
              <button 
                className="modal-close-btn" 
                onClick={() => setSelectedCourse(null)} 
                aria-label="Close"
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <p className="modal-desc">{selectedCourse.description}</p>
              
              <div className="modal-stats">
                <div className="modal-stat-box">
                  <h5>Category</h5>
                  <p>{selectedCourse.category}</p>
                </div>
                <div className="modal-stat-box">
                  <h5>Duration</h5>
                  <p>{selectedCourse.duration}</p>
                </div>
                <div className="modal-stat-box">
                  <h5>Difficulty</h5>
                  <p>{selectedCourse.difficulty}</p>
                </div>
              </div>

              <div className="modal-curriculum">
                <h4>Course Curriculum</h4>
                <ul>
                  {selectedCourse.curriculum.map((item, idx) => (
                    <li key={idx}>
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="var(--success-color)" 
                        strokeWidth="2.5" 
                        style={{ flexShrink: 0 }}
                      >
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-secondary" onClick={() => setSelectedCourse(null)}>
                Close
              </button>
              <button 
                className="btn-primary" 
                onClick={() => {
                  alert(`Successfully Enrolled in ${selectedCourse.title}!`);
                  setSelectedCourse(null);
                }}
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;
