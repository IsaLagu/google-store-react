import { NavLink } from "react-router-dom";
import "./burgerMenu.scss";
import { useState } from "react";

export function BurgerMenu() {
    const [burgerOpen, setBurgerOpen] = useState(false);
    

    const toggleBurger = () => {
        setBurgerOpen(!burgerOpen);
    };

    return (
        <>
            <nav className="navbar-mobile">
                <div
                    className= {burgerOpen ? "navbar-icon active" : "navbar-icon"}
                    aria-label="Menú principal"
                    onClick={toggleBurger}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={burgerOpen ? "links active" : "links hidden"}>
                    <li>
                        <img src={"src/assets/BurgerMenu/phones.png"} alt="Phones"/>
                        <NavLink to="#" onClick={toggleBurger}>Phones</NavLink>
                    </li>
                    <li>
                        <img src={"src/assets/BurgerMenu/earbuds.png"} alt="Earbuds" />
                        <NavLink className={({ isActive }) => isActive ? "active-link" : null }
                    to="/earbuds" onClick={toggleBurger}>Earbuds</NavLink>
                
                    </li>
                    <li>
                        <img src={"src/assets/BurgerMenu/watches.png"} alt="Watches" />
                        <NavLink className={({ isActive }) => isActive ? "active-link" : null}
                    to="/watches" onClick={toggleBurger}>Watches</NavLink>
                    </li>
                    <li>
                        <img src={"src/assets/BurgerMenu/smart-home.png"} alt="Smart Home" />
                        <NavLink to="#" onClick={toggleBurger}>Smart Home</NavLink>
                    </li>
                    <li>
                        <img src={"src/assets/BurgerMenu/accesories.png"} alt="Accessories" />
                        <NavLink to="#" onClick={toggleBurger}>Accessories</NavLink>
                    </li>
                    <li>
                        <img src={"src/assets/BurgerMenu/subscriptions.png"} alt="Subscriptions" />
                        <NavLink to="#" onClick={toggleBurger}>Subscriptions</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}
