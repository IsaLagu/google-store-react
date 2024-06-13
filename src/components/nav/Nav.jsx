import { BurgerMenu } from "./BurgerMenu";
import "./nav.scss"

export default function Nav() {
    return(
        <section className="navigation">
            <section className="nav-mobile">
                <BurgerMenu />
            </section>
        </section>
    )
}