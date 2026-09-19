import { useState } from 'react';
import { useChain, useSpring, animated, useSpringRef } from 'react-spring';
import { PhotoGrid } from './PhotoGrid/PhotoGrid';
import { photoViewerImages } from './Utility/ImageImports.tsx';
import { CardModal } from '../CardModal/CardModal.tsx';
import { Slider } from '../Slider/Slider';
import type { ImageData } from '../../../TypeScriptInterfaces/DataInterfaces';
import styles from './PhotoViewer.module.css';

interface PhotoViewerProps {
}

export const PhotoViewer: React.FC<PhotoViewerProps> = () => {
    const [photoViewerIsOpen, setPhotoViewerIsOpen] = useState(false); 
    const [gridImageData, setGridImageData] = useState<ImageData[]>([]);
    const [imageDataLength, setImageDataLength] = useState(photoViewerImages.length);
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
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
    
    // Sequences animations for opening and closing the photo viewer window and grid
    useChain(photoViewerIsOpen ? [photoWindowSpringRef, transitionRef] : [transitionRef, photoWindowSpringRef], [0, 0.2], animationTrailTime + 500);

    return (
        <section className={styles.photoViewerWindow}>
            <div className={styles.photoGridContainer}>
                <animated.div className={styles.photoViewerPlaceholder} style={windowOpenAnimation}>
                    <PhotoGrid 
                        dataLength={imageDataLength} 
                        imageData={gridImageData} 
                        transitionRef={transitionRef} 
                        callBackSelectImage={setSelectedImageIndex} />
                </animated.div>
                <button onClick={() => openPhotoViewer()}>Open Photo Viewer</button>
                <button onClick={() => closePhotoViewer()}>Close Photo Viewer</button>
            </div>
            {selectedImageIndex !== null && (
                <CardModal callBackDeselect={() => setSelectedImageIndex(null)}>
                    <Slider slides={gridImageData.map((imageData, index) => (
                        <img key={index} src={imageData.imageSrc} alt={imageData.altText ?? 'Image'}></img>
                    ))} />
                </CardModal>
            )}
        </section>
    );
};
