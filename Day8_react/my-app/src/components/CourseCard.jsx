function CourseCard({ course, onViewDetails }) {
  const { title, students, category, description, duration, rating, difficulty } = course;

  const getBadgeClass = () => {
    switch (category.toLowerCase()) {
      case "frontend": return "course-badge";
      case "backend": return "course-badge backend";
      case "database": return "course-badge database";
      case "cloud": return "course-badge cloud";
      default: return "course-badge";
    }
  };

  return (
    <div className="course-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <span className={getBadgeClass()}>{category}</span>
        <span style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-muted)' }}>{difficulty}</span>
      </div>
      
      <h3 className="course-card-title">{title}</h3>
      <p className="course-card-desc">{description}</p>
      
      <div className="course-card-stats">
        <span>⭐ {rating}</span>
        <span>⏱️ {duration}</span>
        <span>👥 {students.toLocaleString()} students</span>
      </div>
      
      <button className="course-card-btn" onClick={() => onViewDetails(course)}>
        View Course
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>
    </div>
  );
}

export default CourseCard;
