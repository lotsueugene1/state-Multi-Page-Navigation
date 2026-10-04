import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import ProductsPage from './pages/ProductsPage';
import CartItem from './components/CartItem';
import { useState } from "react";

function App() {
  const products = [
  { 
    id: 1, 
    name: "Wireless Headphones", 
    price: 99.99, 
    image: "https://placehold.co/600x400",
    description: "Premium noise-cancelling headphones with 30-hour battery life"
  },
  { 
    id: 2, 
    name: "Smart Watch", 
    price: 249.99, 
    image: "https://placehold.co/600x400",
    description: "Fitness tracker with heart rate monitor and GPS"
  },
  { 
    id: 3, 
    name: "Bluetooth Speaker", 
    price: 79.99, 
    image: "https://placehold.co/600x400",
    description: "Portable waterproof speaker with 360-degree sound"
  },
  { 
    id: 4, 
    name: "Laptop Stand", 
    price: 49.99, 
    image: "https://placehold.co/600x400",
    description: "Ergonomic aluminum stand for laptops and tablets"
  },
  { 
    id: 5, 
    name: "Webcam", 
    price: 129.99, 
    image: "https://placehold.co/600x400",
    description: "4K webcam with auto-focus and noise reduction"
  },
  { 
    id: 6, 
    name: "Mechanical Keyboard", 
    price: 159.99, 
    image: "https://placehold.co/600x400",
    description: "RGB backlit keyboard with custom switches"
  }
];

const [cart, setCart] = useState([])

const addToCart = (product) => {
  setCart([...cart, product])
};

const removeFromCart = (indexToRemove) => {
  setCart(currentCart =>
    currentCart.filter((__, index) => index !== indexToRemove)
  );
};

const totalCart = cart.reduce(
  (total, product) => total + product.price,
  0
);

  return (
    <div className="app">
     
      <Header cartCount={cart.length} />
    <HomePage />

    <main className="shop-layout">
    
    <ProductsPage
    products={products}
    addToCart={addToCart}
    />

 <aside className="cart-panel">
  <h2>Your Cart</h2>

  {cart.length === 0 ? (
    <p className="empty-cart">Your cart is empty.</p>
  ) : (
    <>
      {cart.map((product, index) => (
  <CartItem
    key={`${product.id}-${index}`}
    name={product.name}
    price={product.price}
    removeFromCart={() => removeFromCart(index)}
  />
))}

      <p>Total: ${totalCart.toFixed(2)}</p>
    </>
  )}
</aside>
</main>

<Footer />
    </div>
  );
}

export default App;
