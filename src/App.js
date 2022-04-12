import './App.css';
import ProductContextProvider from './context/ProductContextProvider';
import Store from './components/Store';
import {Route,Routes,Navigate} from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import CartContexProvider from './context/CartContexProvider';
import NavBar from './components/shared/NavBar';
import ShopCart from './components/ShopCart';

function App() {
  return (
    <ProductContextProvider>
      <CartContexProvider>
        <NavBar />
        <Routes>
          <Route path="/products/:id" element={<ProductDetails/>} />
          <Route path="/products" element={<Store/>} />
          <Route path="/cart" element={<ShopCart/>} />
          <Route path='/*' element={<Navigate to="/products" />} />
        </Routes>
      </CartContexProvider>
    </ProductContextProvider>
  );
}

export default App;
