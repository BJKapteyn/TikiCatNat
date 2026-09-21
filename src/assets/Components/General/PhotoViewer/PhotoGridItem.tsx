import { useRef, useEffect, useState } from 'react';
import { animated } from 'react-spring';
import { ImageLoading } from './Utility/ImageLoading.tsx';
import type { ImageData } from '../../../TypeScriptInterfaces/DataInterfaces';

interface PhotoGridItemProps {
    item: ImageData;
    style: Record<string, any>;
    callBackSelectImage: (index: number | null) => void;
}

export const PhotoGridItem: React.FC<PhotoGridItemProps> = ({ item, style, callBackSelectImage }) => {
    const photoGridItemRef = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(isLoading) {
            photoGridItemRef.current?.style.setProperty('display', 'none');
        } else {
            photoGridItemRef.current?.style.setProperty('display', 'block');
            console.log("image loaded");
        }
    }, [isLoading]);

    return (
        <animated.div ref={photoGridItemRef} onClick={() => callBackSelectImage(item.id)} style={{ ...style }} className="photo-grid-item">
            <img onLoad={() => setIsLoading(false)} className="photo-grid-image" src={item.imageSrc} alt={item.altText ?? 'Tiki Cat Nat Image'} />
            {isLoading && <ImageLoading />}
        </animated.div>
    );
}
