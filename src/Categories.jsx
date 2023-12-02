function Categories({ allCategories, filterCategories }) {
  return (
    <div className="btn-container">
      {allCategories.map((category) => {
        return (
          <button
            className="btn"
            key={category}
            onClick={() => filterCategories(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
export default Categories;
