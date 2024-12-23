import Categories from "../../components/Categories/Categories";
import "./NewArrivals.css";
// import SimilarItems from "../../components/SimilarItems/Similaritems";

const NewArrivals = () => {
  const products = [
    { name: "Floral Summer Dress", image: "https://cdn.shopify.com/s/files/1/0797/2284/0358/files/Project_20240922_0108_360x.jpg?v=1728128313", price: "$50" },
    { name: "Boho Maxi Dress", image: "https://cdn.shopify.com/s/files/1/0797/2284/0358/files/JBL07321_360x.jpg?v=1720688657", price: "$70" },
    { name: "Chic Evening Gown", image: "https://cdn.shopify.com/s/files/1/0797/2284/0358/files/JBL07470_360x.jpg?v=1720686644", price: "$90" },
    { name: "Blue Ikat Top", image: "https://cdn.shopify.com/s/files/1/0797/2284/0358/files/3_ac6d8ed6-e9dc-434b-99c1-a54b7abd80de_360x.webp?v=1709016300", price: "$35" },
  ];


  return (
    <div className="new-arrivals-page">
      <Categories />
      <h1 className="heading">New Arrivals</h1>
      <div className="product-cards">
        {products.map((product, index) => (
          <div key={index} className="card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
      {/* <SimilarItems/> */}
    </div>
  );
};

export default NewArrivals;
