import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import ProductCards from './components/ProductCards/ProductCards';
import Footer from './components/Footer/Footer';
import NewArrivals from './pages/NewArrivals/NewArrivals';
import BestSellers from './pages/BestSellers/BestSellers';
import TopsAndShirts from './pages/TopsAndShirts/TopsAndShirts';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from './components/Carousel/Carousel';


function App() {
  return (
    <Router>
      <div className="App full-screen">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Categories />
              <Carousel />
              <ProductCards />
            </>
          } />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/best-sellers" element={<BestSellers />} />
          <Route path="/tops-and-shirts" element={<TopsAndShirts />} />
          <Route path="/product/:id" element={<ProductDetail/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
