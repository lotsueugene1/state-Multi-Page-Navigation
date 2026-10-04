import './Header.css';

function Header({ cartCount }) {
  return (
    <header className="app-header">
        <h1 className="logo">PhoneCorner</h1>
        <nav className="nav-menu">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Products</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Contact</a>
        </nav>

        <div className="cart-container"> 
          <span className="cart-icon">🛒</span>
          <span>{cartCount}</span>
      </div>
    </header>
  );
}

export default Header;
