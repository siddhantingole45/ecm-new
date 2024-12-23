// ProductDetail.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './ProductDetail.css';
// import SimilarItems from '../../components/SimilarItems/Similaritems';

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
  {
    id: 2,
    name: "Peachy Bloom Cotton Suit Set",
    image: "https://ambraee.com/cdn/shop/files/Project_20240922_0227.jpg?v=1728126506&width=540",
    price: "$30",
    size: "S, M, L, XL",
    specification: "Soft cotton fabric with floral prints",
    styleSpell: "Peachy elegance with a traditional touch",
    pattern: "Floral",
    sleeve: "3/4th Sleeves",
    colour: "Peach",
    material: "Cotton",
    careInstruction: "Hand wash recommended",
    disclaimer: "Actual product may vary slightly in color",
    shippingInfo: "Delivered in 3-5 business days"
  },
  {
    id: 3,
    name: "Purple Ombre Kurta Set",
    image: "https://ambraee.com/cdn/shop/files/Project_20240922_0095.jpg?v=1728126360&width=540",
    price: "$80",
    size: "S, M, L, XL",
    specification: "Elegant ombre design with intricate detailing",
    styleSpell: "Sophisticated ethnic wear",
    pattern: "Ombre",
    sleeve: "Full Sleeves",
    colour: "Purple",
    material: "Silk Blend",
    careInstruction: "Dry clean only",
    disclaimer: "Slight color variation may occur due to lighting",
    shippingInfo: "Delivered in 3-5 business days"
  },
  {
    id: 4,
    name: "Turquoise Kalidar Suit Set",
    image: "https://cdn.shopify.com/s/files/1/0797/2284/0358/files/Project_20240921_0224_540x.jpg?v=1728128174",
    price: "$50",
    size: "S, M, L, XL",
    specification: "Flowy silhouette with a vibrant hue",
    styleSpell: "Festive charm with traditional vibes",
    pattern: "Solid",
    sleeve: "3/4th Sleeves",
    colour: "Turquoise",
    material: "Georgette",
    careInstruction: "Machine wash on gentle cycle",
    disclaimer: "Actual color may vary due to monitor settings",
    shippingInfo: "Delivered in 3-5 business days"
  },
  {
    id: 5,
    name: "Basic Green Linen Dress",
    image: "https://ambraee.com/cdn/shop/files/Project_20240413_0027.jpg?v=1714376559&width=720",
    price: "$30",
    size: "S, M, L, XL",
    specification: "Lightweight and breathable fabric",
    styleSpell: "Minimalist and chic",
    pattern: "Solid",
    sleeve: "Short Sleeves",
    colour: "Green",
    material: "Linen",
    careInstruction: "Machine wash with mild detergent",
    disclaimer: "Slight shrinkage may occur after washing",
    shippingInfo: "Delivered in 3-5 business days"
  },
  {
    id: 6,
    name: "Brown Kalamkari Chhap Suit Set",
    image: "https://ambraee.com/cdn/shop/products/Project_20230221_0285.jpg?v=1691225006&width=720",
    price: "$80",
    size: "S, M, L, XL",
    specification: "Handcrafted Kalamkari print design",
    styleSpell: "Ethnic sophistication",
    pattern: "Printed",
    sleeve: "Full Sleeves",
    colour: "Brown",
    material: "Cotton",
    careInstruction: "Hand wash separately",
    disclaimer: "Handcrafted products may have slight variations",
    shippingInfo: "Delivered in 3-5 business days"
  },
  {
    id: 7,
    name: "Casual Top",
    image: "https://ambraee.com/cdn/shop/products/Project_20230411_0518.jpg?v=1691230287&width=720",
    price: "$30",
    size: "S, M, L, XL",
    specification: "Casual and versatile for everyday wear",
    styleSpell: "Simple yet stylish",
    pattern: "Solid",
    sleeve: "Half Sleeves",
    colour: "White",
    material: "Cotton Blend",
    careInstruction: "Machine wash cold",
    disclaimer: "Color may vary slightly due to screen settings",
    shippingInfo: "Delivered in 3-5 business days"
  },
  {
    id: 8,
    name: "Rama Sequin Suit Set",
    image: "https://ambraee.com/cdn/shop/files/035A6935.webp?v=1694066776&width=900",
    price: "$80",
    size: "S, M, L, XL",
    specification: "Elegant sequins with intricate design",
    styleSpell: "Glamorous ethnic wear",
    pattern: "Solid",
    sleeve: "Full Sleeves",
    colour: "Rama Green",
    material: "Silk Blend",
    careInstruction: "Dry clean only",
    disclaimer: "Slight variations may occur due to lighting",
    shippingInfo: "Delivered in 3-5 business days"
  },
  {
    id: 9,
    name: "Isha Top",
    image: "https://cdn.shopify.com/s/files/1/0797/2284/0358/files/Untitled-2_be39293f-1ec1-45f2-9b9b-1f9b73f8ffb9_360x.webp?v=1726132819",
    price: "$80",
    size: "S, M, L, XL",
    specification: "Trendy and comfortable",
    styleSpell: "Perfect for casual outings",
    pattern: "Striped",
    sleeve: "Short Sleeves",
    colour: "Blue",
    material: "Polyester",
    careInstruction: "Machine wash cold",
    disclaimer: "Product may appear different due to lighting",
    shippingInfo: "Delivered in 3-5 business days"
  },
  {
    id: 10,
    name: "Saniya Co-Ord Set",
    image: "https://cdn.shopify.com/s/files/1/0797/2284/0358/products/OM_6636_cc58d149-0075-4dcb-9f19-3d44213581e4_360x.jpg?v=1691223663",
    price: "$80",
    size: "S, M, L, XL",
    specification: "Stylish co-ord set for parties",
    styleSpell: "Modern and elegant",
    pattern: "Solid",
    sleeve: "Sleeveless",
    colour: "Beige",
    material: "Satin",
    careInstruction: "Dry clean only",
    disclaimer: "Color may slightly vary from image",
    shippingInfo: "Delivered in 3-5 business days"
  }
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
    <>
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

      <div>
        {/* <SimilarItems /> */}
      </div>
    </>

  );
}

export default ProductDetail;