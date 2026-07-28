import { Link } from "react-router";
import logo from "../../../Images/Logos/LOGO-V1-transparent.png";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <img className="navbar-logo" src={logo} alt="Tiki Cat Nat Logo" />
            <Link to="/"><div>Home</div></Link>
        </nav>
    );
};

export default Navbar;

