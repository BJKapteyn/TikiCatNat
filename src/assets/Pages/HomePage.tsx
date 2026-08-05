import { PhotoViewer } from "../Components/General/PhotoViewer/PhotoViewer";
import { HomePageInfo } from "../Components/HomePage/HomePageInfo/HomePageInfo";

export default function HomePage(): React.ReactNode {
    return (
        <div className="home-page">
            <PhotoViewer></PhotoViewer>
            <HomePageInfo></HomePageInfo>
        </div>
    );
}