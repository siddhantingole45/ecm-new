import { useNavigate } from 'react-router-dom';
import './SimilarItems.css';

function SimilarItems() {
  const navigate = useNavigate();

  const similarItems = [
    { id: 1, name: "Red Floral Dress", image: "https://cdn.shopify.com/s/files/1/0797/2284/0358/files/JBL07704_360x.jpg?v=1720687648", price: "$55" },
    { id: 2, name: "Blue Floral Top", image: "https://cdn.shopify.com/s/files/1/0797/2284/0358/files/JBL07704_360x.jpg?v=1720687648", price: "$35" },
    { id: 3, name: "Green Floral Skirt", image: "https://cdn.shopify.com/s/files/1/0797/2284/0358/files/JBL07704_360x.jpg?v=1720687648", price: "$45" },
    { id: 4, name: "Yellow Summer Dress", image: "https://cdn.shopify.com/s/files/1/0797/2284/0358/files/JBL07704_360x.jpg?v=1720687648", price: "$50" },
    { id: 4, name: "Yellow Summer Dress", image: "https://cdn.shopify.com/s/files/1/0797/2284/0358/files/JBL07704_360x.jpg?v=1720687648", price: "$50" }
  ];

  return (
    <div className="similar-items">
      <h2>Similar Items</h2>
      <div className="similar-items-grid">
        {similarItems.map((item) => (
          <div 
            key={item.id} 
            className="similar-item-card" 
            onClick={() => navigate(`/product/${item.id}`)}
          >
            <img src={item.image} alt={item.name} className="similar-item-image" />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SimilarItems;
