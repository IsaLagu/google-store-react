import "./burgerMenu.scss";
import "../../styles/index.scss"
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
                        <img
                            src={"src/assets/BurgerMenu/phones.png"}
                            alt="Phones"
                        />
                        <a href="/">Phones</a>
                    </li>
                    <li>
                        <img src={"src/assets/BurgerMenu/earbuds.png"} alt="Earbuds" />
                        <a href="/">Earbuds</a>
                    </li>
                    <li>
                        <img src={"src/assets/BurgerMenu/watches.png"} alt="Watches" />
                        <a href="/">Watches</a>
                    </li>
                    <li>
                        <img src={"src/assets/BurgerMenu/smart-home.png"} alt="Smart Home" />
                        <a href="/">Smart Home</a>
                    </li>
                    <li>
                        <img src={"src/assets/BurgerMenu/accesories.png"} alt="Accesories" />
                        <a href="/">Accesories</a>
                    </li>
                    <li>
                        <img src={"src/assets/BurgerMenu/subscriptions.png"} alt="Subscriptions" />
                        <a href="/">Subscriptions</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}
