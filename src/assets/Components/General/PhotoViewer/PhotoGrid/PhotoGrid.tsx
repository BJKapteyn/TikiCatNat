import { animated, useTransition, SpringRef } from 'react-spring';
// import { ImageLoading } from '../Utility/ImageLoading.tsx';
import type { ImageData } from '../../../../TypeScriptInterfaces/DataInterfaces';
import './PhotoGrid.css';

interface PhotoGridProps {
    imageData: ImageData[];
    transitionRef: SpringRef;
    dataLength: number;
}

export const PhotoGrid: React.FC<PhotoGridProps> = ({ imageData, transitionRef, dataLength }) => {
    const photoViewTransitions = useTransition(imageData, {
        ref: transitionRef,
        from: { opacity: 0, scale: 0 },
        enter: { opacity: 1, scale: 1 },
        leave: { opacity: 0, scale: 0 },
        trail: dataLength
    });

    return (
        <div className="photo-grid">
            {photoViewTransitions((style, item) => (
                <animated.div key={item.id} style={{...style}} className="photo-grid-item">
                    {/* <ImageLoading /> */}
                    <img className="photo-grid-image" src={item.imageSrc} alt={item.altText ?? "Tiki Cat Nat Image"} />
                </animated.div>
            ))}
        </div>
    );
};