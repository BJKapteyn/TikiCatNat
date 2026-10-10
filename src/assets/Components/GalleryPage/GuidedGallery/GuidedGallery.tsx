import { galleryViewData } from "./GalleryView/GalleryViewData";
import { GalleryView } from "./GalleryView/GalleryView";

// Main guided gallery component that renders the individual gallery view components
export const GuidedGallery: React.FC = () => {
    return (
        <section>

        {galleryViewData.map((galleryItem) => (
            <GalleryView key={galleryItem.id} galleryData={galleryItem} />
        ))}

        </section>
    );
};
