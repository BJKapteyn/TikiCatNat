import { Link } from "react-router";
import { useMediaQuery } from "react-responsive";
import { NavBarLinks } from "./NavBarLinks";
import { useInView } from "react-intersection-observer";
import { NavBarMini } from "./NavBarMini/NavBarMini";
import { Socials } from "../../General/Socials/Socials";
import logo from "../../../Images/Logos/LOGO-V1-transparent.png";
import "./Navbar.css";

const Navbar = () => {
    const { ref, inView } = useInView({
        threshold: 0.01,
        initialInView: true,
    })

    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    return (
        <nav ref={ref} className="navbar-container">
            {!isMobile && (<div className="navbar-top">
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
                <Socials />
            </div>)}
            <NavBarMini isInView={isMobile ? false : inView} />
        </nav>
    );
};

export default Navbar;

