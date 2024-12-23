/* Categories.jsx */
import { useNavigate } from 'react-router-dom';
import './Categories.css';

function Categories() {
  const navigate = useNavigate();
  const categories = [
    { name: "New Arrivals", path: "/new-arrivals" },
    { name: "Best Sellers", path: "/best-sellers" },
    { name: "Tops & Shirts", path: "/tops-and-shirts" }
  ];

  return (
    <div className="categories">
      {categories.map((category, index) => (
        <button 
          key={index} 
          className="category-button" 
          onClick={() => navigate(category.path)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default Categories;