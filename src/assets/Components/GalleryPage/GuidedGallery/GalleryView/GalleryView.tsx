import { useEffect } from "react";
import { animated, useSpring } from "react-spring";
import { useInView } from "react-intersection-observer";
import type { GalleryProps } from "../../../../TypeScriptInterfaces/PageInterfaces";

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
        <animated.div ref={ref} style={fadeIn}>
            <div key={galleryData.id}>
                <img src={galleryData.imageSrc} alt={galleryData.title} />
                <h3>{galleryData.title}</h3>
                <p>{galleryData.description}</p>
            </div>
        </animated.div>
    );
};
