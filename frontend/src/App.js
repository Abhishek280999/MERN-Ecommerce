
import './App.css';
import Homepage from './customer/Pages/HomePages/Homepage';
import Cart from './customer/components/Carts/Cart';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/Navigation/Navigation';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';


function App() {
  return (
    <div >
    <Navigation/>
    <div>
    {/* <Homepage/>
    <Product/> */}
    {/* <ProductDetails/> */}
    <Cart/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
