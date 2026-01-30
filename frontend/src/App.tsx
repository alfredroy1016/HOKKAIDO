import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';
import CustomBuilder from './pages/CustomBuilder';
import Collections from './pages/Collections';
import CustomBouquet from './pages/CustomBouquet';
import About from './pages/About';
import Valentines from './pages/Valentines';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-hokkaido-cream">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              {/* Valentine's Special as Home Page */}
              <Route path="/" element={<Valentines />} />
              <Route path="/home" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/collections/:category" element={<Collections />} />
              <Route path="/custom-bouquet" element={<CustomBouquet />} />
              <Route path="/about" element={<About />} />
              <Route path="/valentines" element={<Valentines />} />
              <Route path="/product/:slug" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/custom-builder" element={<CustomBuilder />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
