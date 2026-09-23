import { PhotoViewer } from "../Components/General/PhotoViewer/PhotoViewer";
import { HomePageAbout } from "../Components/HomePage/HomePageAbout/HomePageAbout";
import { HomePageInfo } from "../Components/HomePage/HomePageInfo/HomePageInfo";
import { HomePageTitleCard } from "../Components/HomePage/HomePageTitleCard/HomePageTitleCard";

export default function HomePage(): React.ReactNode {
    return (
        <div className="home-page">
            <HomePageTitleCard />
            <HomePageAbout />
            <HomePageInfo />
            <PhotoViewer />
        </div>
    );
}