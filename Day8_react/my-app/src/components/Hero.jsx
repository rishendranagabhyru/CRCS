import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';
import heroImg from '../assets/hero.png';

function Hero({ setPage }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Learn <span>Modern Technology</span> & Code Premium Apps
        </h1>
        <p>
          Master frontend development, scalable backend architectures, cloud computing, and databases. Build real-world projects with hands-on practice.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => setPage("courses")}>
            Start Learning
          </button>
          <button className="btn-secondary" onClick={() => setPage("courses")}>
            Explore Courses
          </button>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-image-wrapper">
          <img src={heroImg} className="base" alt="Terminal Base" />
          <img src={reactLogo} className="framework" alt="React Logo" />
          <img src={viteLogo} className="vite-logo" alt="Vite Logo" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
