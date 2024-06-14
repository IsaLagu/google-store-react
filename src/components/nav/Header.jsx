import './header.scss'
import { BurgerMenu } from "./BurgerMenu";

const Header = () => {
  return (
    <header className="header">
        <div className="logo">
            <img src="./src/assets/google-logo.png" alt="logo Google" />  
        </div>
        <nav className="navbar">
            <div><p>Phones</p></div>
            <div><a href=""><p>Earbuds</p></a></div>
            <div><p className="btn-active">Watches</p></div>
            <div><p>Smart Home</p></div>
            <div><p>Accesories</p></div>
            <div><p>Suscriptions</p></div>
        </nav>
        <div className="icons">
            <img src="./src/assets/icons/Search.svg" alt="Search" />
            <img src="./src/assets/icons/Help.svg" alt="Help" />
            <img src="./src/assets/icons/Cart.svg" alt="Cart" />
            <img src="./src/assets/icons/Avatar.svg" alt="My profile" />
            <div className="nav-mobile"><BurgerMenu/></div>
        </div>
    </header>
  );
};

export default Header;