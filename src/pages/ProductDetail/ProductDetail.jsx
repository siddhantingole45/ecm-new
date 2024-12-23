// ProductDetail.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './ProductDetail.css';

const productData = [
  { 
    id: 1, 
    name: "Floral Dress", 
    image: "https://ambraee.com/cdn/shop/files/035A6935.webp?v=1694066776&width=900", 
    price: "$50",
    size: "S, M, L, XL",
    specification: "Comfortable and breathable fabric",
    styleSpell: "Floral charm for casual outings",
    pattern: "Floral",
    sleeve: "Sleeveless",
    colour: "Multicolor",
    material: "Cotton Blend",
    careInstruction: "Machine wash cold with like colors",
    disclaimer: "Product color may slightly vary due to photographic lighting",
    shippingInfo: "Delivered in 3-5 business days"
  },
  // Additional product data...
];

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedProduct = productData.find((item) => item.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id]);

  if (!product) {
    return <div>Loading product details...</div>;
  }

  return (
    <div className="product-detail">
      <div className="details-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="price">{product.price}</p>
          <ul className="details-list">
            <li><strong>Size:</strong> {product.size}</li>
            <li><strong>Specification:</strong> {product.specification}</li>
            <li><strong>Style Spell:</strong> {product.styleSpell}</li>
            <li><strong>Pattern:</strong> {product.pattern}</li>
            <li><strong>Sleeve:</strong> {product.sleeve}</li>
            <li><strong>Colour:</strong> {product.colour}</li>
            <li><strong>Material:</strong> {product.material}</li>
            <li><strong>Care Instruction:</strong> {product.careInstruction}</li>
            <li><strong>Disclaimer:</strong> {product.disclaimer}</li>
            <li><strong>Shipping Info:</strong> {product.shippingInfo}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
