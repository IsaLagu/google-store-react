import { NavLink } from "react-router-dom";
import "./header.scss";
import { BurgerMenu } from "./BurgerMenu";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="./src/assets/google-logo.png" alt="logo Google" />
            </div>
            <nav className="navbar">
                <NavLink to="#">Phones</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active-link" : null }
                    to="/earbuds">Earbuds</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active-link" : null}
                    to="/watches">Watches</NavLink>
                <NavLink to="#">Smart Home</NavLink>
                <NavLink to="#">Accessories</NavLink>
                <NavLink to="#">Subscriptions</NavLink>
            </nav>
            <section className="icons">
                <NavLink to="#">
                    <img src="./src/assets/icons/Search.svg" alt="Search" />
                </NavLink>
                <NavLink to="#">
                    <img src="./src/assets/icons/Help.svg" alt="Help" />
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? "active-link" : null}
                    to="/cart">
                    <img src="./src/assets/icons/Cart.svg" alt="Cart" />
                </NavLink>
                <NavLink to="#">
                    <img src="./src/assets/icons/Avatar.svg" alt="My profile" />
                </NavLink>
                <section className="nav-mobile">
                    <BurgerMenu />
                </section>
            </section>
        </header>
    );
};

export default Header;
