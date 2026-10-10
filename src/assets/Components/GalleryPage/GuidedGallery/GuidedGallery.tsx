import { galleryViewData } from "./GalleryView/GalleryViewData";
import { GalleryView } from "./GalleryView/GalleryView";

export const GuidedGallery: React.FC = () => {
    return (
        <section>

        {galleryViewData.map((galleryItem) => (
            <GalleryView key={galleryItem.id} galleryData={galleryItem} />
        ))}
        
        </section>
    );
};
