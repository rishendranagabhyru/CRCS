import CourseCard from "../components/CourseCard";

function Courses({ courses, selectedCategory, search, setSearch, onViewDetails }) {
  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase()) || 
                          course.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="page-container">
      <div className="section-header">
        <div className="page-header">
          <h1>Our Courses</h1>
          <p>
            {selectedCategory === "All" 
              ? "Explore all our technology courses below." 
              : `Showing courses in ${selectedCategory}`}
          </p>
        </div>
        
        <div className="search-wrapper">
          <svg 
            className="search-icon"
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.3-4.3"/>
          </svg>
          <input
            className="search-input"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {filteredCourses.length > 0 ? (
        <div className="courses-grid">
          {filteredCourses.map((course, index) => (
            <CourseCard 
              key={index} 
              course={course} 
              onViewDetails={onViewDetails} 
            />
          ))}
        </div>
      ) : (
        <div style={{
          textAlign: 'center',
          padding: '60px 20px',
          backgroundColor: 'var(--card-bg)',
          borderRadius: 'var(--border-radius-lg)',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <span style={{ fontSize: '48px', display: 'block', marginBottom: '16px' }}>🔍</span>
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>No Courses Found</h3>
          <p style={{ color: 'var(--text-secondary)' }}>We couldn't find any courses matching your search query. Try searching for something else.</p>
        </div>
      )}
    </div>
  );
}

export default Courses;
