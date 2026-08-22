import { animated, useSpring } from "react-spring";
import { Link } from "react-router";
import { NavBarLinks } from "../NavBarLinks";
import logo from "../../../../Images/Logos/LOGOTYPE-transparent.png";
import "./NavBarMini.css";

interface NavBarMiniProps {
    isInView: boolean;
}

export const NavBarMini: React.FC<NavBarMiniProps> = ({ isInView }) => {
    const springProps = useSpring({
        from: { opacity: isInView ? 1 : 0, transform: isInView ? "translateY(0)" : "translateY(-20px)" },
        to: { opacity: isInView ? 0 : 1, transform: isInView ? "translateY(-20px)" : "translateY(0)" },
        config: { duration: 600, tension: 200, friction: 20 }
    });

    return (
    <animated.div style={springProps} className="navbar-mini-container">
        <img className="navbar-mini-logo" src={logo} alt="Tiki Cat Nat Logo" />
        <ul className="navbar-mini-links">
        {NavBarLinks.map((link) => (
            <li className="navbar-mini-link" key={link.href}>
                <Link to={link.href}>
                    <div>{link.label}</div>
                </Link>
            </li>
        ))}
        </ul>
    </animated.div>
  );
};