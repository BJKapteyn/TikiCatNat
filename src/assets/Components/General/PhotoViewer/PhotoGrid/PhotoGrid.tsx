import { useTransition, SpringRef } from 'react-spring';
import type { ImageData } from '../../../../TypeScriptInterfaces/DataInterfaces';
import { PhotoGridItem } from '../PhotoGridItem';
import './PhotoGrid.css';

interface PhotoGridProps {
    imageData: ImageData[];
    transitionRef: SpringRef;
    dataLength: number;
    callBackSelectImage: (index: number | null) => void;
}

export const PhotoGrid: React.FC<PhotoGridProps> = ({ imageData, transitionRef, dataLength, callBackSelectImage }) => {
    const photoViewTransitions = useTransition(imageData, {
        ref: transitionRef,
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        trail: dataLength
    });

    return (
        <div className="photo-grid">
            {photoViewTransitions((style, item) => (
                <PhotoGridItem
                    key={item.id}
                    item={item}
                    style={style}
                    callBackSelectImage={callBackSelectImage}
                />
            ))}
        </div>
    );
};