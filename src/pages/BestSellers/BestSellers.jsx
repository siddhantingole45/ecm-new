import Categories from "../../components/Categories/Categories";
import SimilarItems from "../../components/SimilarItems/Similaritems";
import "./BestSellers.css";

const BestSellers = () => {
  const products = [
    { name: "Elegant Party Dress", image: "https://cdn.shopify.com/s/files/1/0797/2284/0358/products/Project_20230208_0096_360x.jpg?v=1691226374", price: "$85" },
    { name: "Orange Bandhani Jacket", image: "https://cdn.shopify.com/s/files/1/0797/2284/0358/files/Untitled-3_2a876551-ed74-40d7-91c1-05a0788654a4_360x.webp?v=1726134533", price: "$60" },
    { name: "Debbaco Print Maxi Dress", image: "https://cdn.shopify.com/s/files/1/0797/2284/0358/products/136_360x.jpg?v=1691224165", price: "$40" },
    { name: "Classic Black Dress", image: "https://cdn.shopify.com/s/files/1/0797/2284/0358/files/Project_20240413_0106_360x.jpg?v=1714043452", price: "$95" },
  ];

  return (
    <div className="best-sellers-page">
      <Categories />
      <h1 className="heading">Best Sellers</h1>
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

export default BestSellers;
