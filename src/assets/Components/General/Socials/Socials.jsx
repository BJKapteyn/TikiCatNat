import { Link } from 'react-router-dom';
import { ReactComponent as FaceBook } from '../../../Images/Socials/social-facebook.svg';
import { ReactComponent as Instagram } from '../../../Images/Socials/social-instagram.svg';
import { ReactComponent as Tiktok } from '../../../Images/Socials/social-tiktok.svg';
import { socialLinks } from './Data/Socials/socialLinks';
import '../../../App.scss';
import './Socials.css';

// Links to social media pages
export const Socials = ({ styleId = null }) => {
    const styleid = styleId ?? '';

    return(
        <div className="socials-flex">
            <div className="socials-flexitem">
                <Link to={socialLinks.instagram}>
                    <Instagram id={styleid} className="socials-image"></Instagram>
                </Link>
            </div>
            <div className="socials-flexitem">
                <Link to={socialLinks.tiktok}>
                    <Tiktok id={styleid} className="socials-image"></Tiktok>
                </Link>
            </div>
            <div className="socials-flexitem">
                <Link to={socialLinks.facebook}>
                    <FaceBook id={styleid} className="socials-image"></FaceBook>
                </Link>
            </div>
        </div>
    );
}
