import Hero from "../components/Hero";
import CourseCard from "../components/CourseCard";

function Home({ courses, onViewDetails, setPage }) {
  const popularCourses = courses.slice(0, 3);

  return (
    <div className="page-container">
      <Hero setPage={setPage} />



      <section>
        <div className="section-header">
          <h2>Popular Courses</h2>
          <button
            className="btn-secondary"
            style={{ padding: '8px 16px', fontSize: '13px' }}
            onClick={() => setPage("courses")}
          >
            View All
          </button>
        </div>
        <div className="courses-grid">
          {popularCourses.map((course, index) => (
            <CourseCard
              key={index}
              course={course}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
