  import Categories from "../../components/Categories/Categories";
import SimilarItems from "../../components/SimilarItems/Similaritems";
  import "./TopsAndShirts.css";
  
  const TopsAndShirts = () => {
    const products = [
      { name: "Striped Cotton Shirt", image: "https://cdn.shopify.com/s/files/1/0797/2284/0358/files/Project_20240413_0181_360x.jpg?v=1714044216", price: "$40" },
      { name: "Reese Top", image: "https://cdn.shopify.com/s/files/1/0797/2284/0358/files/Untitled-5_68dbb399-637b-47cc-9e76-3b108bc9a523_360x.webp?v=1726133419", price: "$25" },
      { name: "Polka Dot Maxi", image: "https://cdn.shopify.com/s/files/1/0797/2284/0358/products/Project_20220112_0120_360x.jpg?v=1691228777", price: "$35" },
      { name: "Elegant Silk Top", image: "https://cdn.shopify.com/s/files/1/0797/2284/0358/products/OM_3099_35cd952e-051f-40c8-989e-d39fe5668496_360x.jpg?v=1691224016", price: "$55" },
    ];
  
    return (
      <div className="tops-and-shirts-page">
        <Categories />
        <h1 className="heading">Tops & Shirts</h1>
        <div className="product-cards">
          {products.map((product, index) => (
            <div key={index} className="card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
        <SimilarItems/>

      </div>
    );
  };
  
  export default TopsAndShirts;
  