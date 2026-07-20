import { PhotoViewer } from "../Components/General/PhotoViewer/PhotoViewer";

export default function HomePage(): React.ReactNode {
    return (
        <div className="home-page">
            <PhotoViewer></PhotoViewer>
        </div>
    );
}