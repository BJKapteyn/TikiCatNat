import { Link } from "react-router";
import { NavBarLinks } from "./NavBarLinks";
import logo from "../../../Images/Logos/LOGO-V1-transparent.png";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar-container">
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

