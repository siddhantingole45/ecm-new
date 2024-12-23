/* ProductDetail.jsx */
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const product = [
    {name: "Floral Dress", image: "/images/floral-dress.jpg", price: "$50", sizes: ["S", "M", "L", "XL"], specifications: "100% Cotton, Handwash Only"}, 
];
  const similarItems = [
    { id: 4, name: "SAVANNAH MAXI DRESS", image: "https://ambraee.com/cdn/shop/products/Project_20230208_0092.jpg?v=1691226374&width=900", price: "$60" },
    { id: 5, name: "Mud Brown Embroidered Shirt", image: "https://cdn.shopify.com/s/files/1/0797/2284/0358/files/JBL00723_360x.jpg?v=1721388626", price: "$90" },
    { id: 6, name: "Black Floral Vine Shirt", image: "https://cdn.shopify.com/s/files/1/0797/2284/0358/files/4_0e013992-5950-42eb-8695-b433dcc710d6_360x.webp?v=1705667696", price: "$20" }
  ];

  return (
    <div className="product-detail">
      <div className="main-card" >
        <img src={product.image} alt={product.name} className="product-image" />
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <p>Sizes: {product.sizes.join(", ")}</p>
        <p>Specifications: {product.specifications}</p>
      </div>
      <div className="similar-items">
        <h3>Similar Items</h3>
        <div className="similar-cards">
          {similarItems.map((item) => (
            <div key={item.id} className="card">
              <img src={item.image} alt={item.name} className="product-image" />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;