import { Link } from "react-router";
import { NavBarLinks } from "./NavBarLinks";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import logo from "../../../Images/Logos/LOGO-V1-transparent.png";
import "./Navbar.css";

const Navbar = () => {
    const [isInView, setIsInView] = useState(true);
    const { ref, inView } = useInView({
        threshold: 0.1,
        initialInView: true,
    })

    if(!inView && isInView) {
        setIsInView(false);
        console.log("state changed to false");
    } else if(inView && !isInView) {
        setIsInView(true);
        console.log("state changed to true");
    }

    return (
        <nav ref={ref} className="navbar-container">
            <img className="navbar-logo" src={logo} alt="Tiki Cat Nat Logo" />
            <ul className="navbar-links">
                {NavBarLinks.map((link) => (
                    <li className="navbar-link" key={link.href}>
                        <Link to={link.href}>
                            <div>{link.label}</div>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;

