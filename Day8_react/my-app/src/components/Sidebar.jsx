function Sidebar({ selectedCategory, setSelectedCategory, activePage, setPage, courses = [] }) {
  const categories = [
    { name: "All", label: "All Topics" },
    { name: "Frontend", label: "Frontend" },
    { name: "Backend", label: "Backend" },
    { name: "Database", label: "Database" },
    { name: "Cloud", label: "Cloud" }
  ];

  const getCount = (catName) => {
    if (catName === "All") return courses.length;
    return courses.filter(c => c.category === catName).length;
  };

  const handleCategoryClick = (catName) => {
    setSelectedCategory(catName);
    // If user is on Contact page, switch them to Courses or Home to see results
    if (activePage !== "courses" && activePage !== "home") {
      setPage("courses");
    }
  };

  return (
    <aside>
      <h3>Categories</h3>
      <ul className="category-list">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.name;
          return (
            <li 
              key={cat.name} 
              className={`category-item ${isActive ? 'active' : ''}`}
              onClick={() => handleCategoryClick(cat.name)}
            >
              <span>{cat.label}</span>
              <span className="category-badge">{getCount(cat.name)}</span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
