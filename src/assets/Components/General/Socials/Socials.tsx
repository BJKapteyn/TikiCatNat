import { Link } from 'react-router';
import FaceBook from '../../../Images/Socials/social-facebook.svg?react';
import Instagram from '../../../Images/Socials/social-instagram.svg?react';
import Twitter from '../../../Images/Socials/social-twitter.svg?react';
import { socialLinks } from './socialLinks';
import './Socials.css';

interface SocialsProps {
    styleId?: string | null;
}
// Links to social media pages

export const Socials: React.FC<SocialsProps> = ({ styleId = null }) => {
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
                    <Twitter id={styleid} className="socials-image"></Twitter>
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
