import { useState } from 'react';
import { useChain, useSpring, animated, useSpringRef } from 'react-spring';
import { PhotoGrid } from './PhotoGrid/PhotoGrid';
import { photoViewerImages } from './Utility/ImageImports.tsx';
import type { ImageData } from '../../../TypeScriptInterfaces/DataInterfaces';
import styles from './PhotoViewer.module.css';

interface PhotoViewerProps {
}

export const PhotoViewer: React.FC<PhotoViewerProps> = () => {
    const [photoViewerIsOpen, setPhotoViewerIsOpen] = useState(false); 
    const [gridImageData, setGridImageData] = useState<ImageData[]>([]);
    const [imageDataLength, setImageDataLength] = useState(photoViewerImages.length);
    const animationTrailTime = 300;
    const transitionRef = useSpringRef();
    const photoWindowSpringRef = useSpringRef();
    
    const openPhotoViewer = () => {
        setGridImageData(photoViewerImages);
        setPhotoViewerIsOpen(true);
    }
    
    const closePhotoViewer = () => {
        setPhotoViewerIsOpen(false);
        setGridImageData([]);
    }

    const windowOpenAnimation = useSpring({
        ref: photoWindowSpringRef,
        from: { width: '300px', height: '200px' },
        to: { 
            width: photoViewerIsOpen ? '800px' : '300px', 
            height: photoViewerIsOpen ? '800px' : '200px' 
            },
        trail:  animationTrailTime / gridImageData.length
    })
    

    if(gridImageData.length > imageDataLength)
        setImageDataLength(gridImageData.length)
    
    useChain(photoViewerIsOpen ? [photoWindowSpringRef, transitionRef] : [transitionRef, photoWindowSpringRef], [0, 0.2], animationTrailTime + 500);

    return (
        <section className={styles.photoViewerWindow}>
            <animated.div className={styles.photoViewerPlaceholder} style={windowOpenAnimation}>
                <PhotoGrid dataLength={imageDataLength} imageData={gridImageData} transitionRef={transitionRef} />
            </animated.div>
            <button onClick={() => openPhotoViewer()}>Open Photo Viewer</button>
            <button onClick={() => closePhotoViewer()}>Close Photo Viewer</button>
        </section>
    );
};
