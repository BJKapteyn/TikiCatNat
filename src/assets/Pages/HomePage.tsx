import { PhotoViewer } from "../Components/General/PhotoViewer/PhotoViewer";
import { HomePageInfo } from "../Components/HomePage/HomePageInfo/HomePageInfo";
import { HomePageTitleCard } from "../Components/HomePage/HomePageTitleCard/HomePageTitleCard";

export default function HomePage(): React.ReactNode {
    return (
        <div className="home-page">
            <HomePageTitleCard></HomePageTitleCard>
            <PhotoViewer></PhotoViewer>
            <HomePageInfo></HomePageInfo>
        </div>
    );
}