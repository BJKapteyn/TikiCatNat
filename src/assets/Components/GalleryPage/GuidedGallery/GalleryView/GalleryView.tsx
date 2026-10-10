import { useEffect } from "react";
import { animated, useSpring } from "react-spring";
import { useInView } from "react-intersection-observer";
import type { GalleryProps } from "../../../../TypeScriptInterfaces/PageInterfaces";
import './GalleryView.css';

interface GalleryViewProps {
    galleryData: GalleryProps;
}

// Individual gallery view components for the gallery pages visual tour
export const GalleryView: React.FC<GalleryViewProps> = ({ galleryData }) => {
    const [fadeIn, fadeInApi] = useSpring(() => ({
        from: { opacity: 0, transform: 'translateY(10%)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 500 },
        pause: true
    }));

    const { ref, inView: isInView } = useInView({
        threshold: .9
    })

    useEffect(() => {
        if (isInView) {
            fadeInApi.start();
        }
    }, [isInView, fadeInApi]);

    return (
        <animated.div key={galleryData.id} ref={ref} style={fadeIn} className="galleryview-container">
            <div className="galleryview-content">
                <img className="galleryview-image" src={galleryData.imageSrc} alt={galleryData.title} />
                <div className="galleryview-details">
                    <h3 className="galleryview-title">{galleryData.title}</h3>
                    <p className="galleryview-description">{galleryData.description}</p>
                </div>
            </div>
        </animated.div>
    );
};
