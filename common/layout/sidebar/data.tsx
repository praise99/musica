import { HomeIcon } from "./assets/home";
import { LogoutIcon } from "./assets/logout";
import { PlaylistIcon } from "./assets/playlist";
import { ProfileIcon } from "./assets/profile";
import { RadioIcon } from "./assets/radio";
import { VideoIcon } from "./assets/vidoes";
interface ILinks {
  id: number;
  title: string;
  image: any;
  route: string;
}
const FirstSection: ILinks[] = [
  {
    id: 1,
    title: "Home",
    image: <HomeIcon fill="currentColor" fillOpacity="opacity" />,
    route: "/",
  },
  {
    id: 2,
    title: "Playlist",
    image: <PlaylistIcon fill="currentColor" fillOpacity="opacity" />,
    route: "/playlist",
  },
  {
    id: 3,
    title: "Radio",
    image: <RadioIcon fill="currentColor" fillOpacity="opacity" />,
    route: "#",
  },
  {
    id: 4,
    title: "Videos",
    image: <VideoIcon fill="currentColor" fillOpacity="opacity" />,
    route: "#",
  },
];
const SecondSection: ILinks[] = [
  {
    id: 1,
    title: "Profile",
    image: <ProfileIcon fill="currentColor" fillOpacity="opacity" />,
    route: "#",
  },
  {
    id: 2,
    title: "Logout",
    image: <LogoutIcon fill="currentColor" fillOpacity="opacity" />,
    route: "#",
  },
];
export { FirstSection, SecondSection };
