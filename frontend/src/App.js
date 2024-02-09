
import './App.css';
import Homepage from './customer/Pages/HomePages/Homepage';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/Navigation/Navigation';


function App() {
  return (
    <div >
    <Navigation/>
    <div>
    <Homepage/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
