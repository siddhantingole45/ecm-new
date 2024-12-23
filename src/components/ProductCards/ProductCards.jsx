/* ProductCards.jsx */
import { useNavigate } from 'react-router-dom';
import './ProductCards.css';

function ProductCards() {
  const navigate = useNavigate();
  const products = [
    { id: 1, name: "Floral Dress", image: "https://ambraee.com/cdn/shop/files/035A6935.webp?v=1694066776&width=900", price: "$50" },
    { id: 2, name: "Peachy Bloom Cotton Suit Set", image: "https://ambraee.com/cdn/shop/files/Project_20240922_0227.jpg?v=1728126506&width=540", price: "$30" },
    { id: 3, name: "Purple Ombre Kurta Set", image: "https://ambraee.com/cdn/shop/files/Project_20240922_0095.jpg?v=1728126360&width=540", price: "$80" },
    { id: 4, name: "Turquoise Kalidar Suit Set", image: "https://cdn.shopify.com/s/files/1/0797/2284/0358/files/Project_20240921_0224_540x.jpg?v=1728128174", price: "$50" },
    { id: 5, name: "Basic Green Linen Dress", image: "https://ambraee.com/cdn/shop/files/Project_20240413_0027.jpg?v=1714376559&width=720", price: "$30" },
    { id: 6, name: "Brown Kalamkari Chhap Suit Set", image: "https://ambraee.com/cdn/shop/products/Project_20230221_0285.jpg?v=1691225006&width=720", price: "$80" },
    { id: 7, name: "Casual Top", image: "https://ambraee.com/cdn/shop/products/Project_20230411_0518.jpg?v=1691230287&width=720", price: "$30" },
    { id: 8, name: "Rama Sequin Suit Set", image: "https://ambraee.com/cdn/shop/files/035A6935.webp?v=1694066776&width=900", price: "$80" },
    { id: 9, name: "Isha Top", image: "https://cdn.shopify.com/s/files/1/0797/2284/0358/files/Untitled-2_be39293f-1ec1-45f2-9b9b-1f9b73f8ffb9_360x.webp?v=1726132819", price: "$80" }
  ];


  return (
    <div className="product-cards">
      {products.map((product) => (
        <div 
          key={product.id} 
          className="card" 
          onClick={() => navigate(`/product/${product.id}`)}
        >
          <img src={product.image} alt={product.name} className="product-image" />
          <h3 className='ProdName'>{product.name}</h3>
          <p className='ProdPrice'> {product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductCards;