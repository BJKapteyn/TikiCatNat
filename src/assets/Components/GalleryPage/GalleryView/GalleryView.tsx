import { useEffect } from "react";
import { animated, useSpring } from "react-spring";
import { useInView } from "react-intersection-observer";
import type { GalleryProps } from "../../../TypeScriptInterfaces/PageInterfaces";

interface GalleryViewProps {
    galleryData: GalleryProps;
}

// Individual gallery view component for the gallery page
export const GalleryView: React.FC<GalleryViewProps> = ({ galleryData }) => {
    const { ref, inView: isInView } = useInView({
        threshold: .9
    })

    useEffect(() => {
        if (isInView) {
            console.log("in view");
        }
    })
    
    return (
        <animated.div ref={ref}>

        </animated.div>
    );
};
