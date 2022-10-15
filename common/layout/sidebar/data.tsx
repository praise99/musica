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
    image: <HomeIcon fill="currentColor" fill-opacity="opacity" />,
    route: "/home",
  },
  {
    id: 2,
    title: "Playlist",
    image: <PlaylistIcon fill="currentColor" fill-opacity="opacity" />,
    route: "/playlist",
  },
  {
    id: 3,
    title: "Radio",
    image: <RadioIcon fill="currentColor" fill-opacity="opacity" />,
    route: "/radio",
  },
  {
    id: 4,
    title: "Videos",
    image: <VideoIcon fill="currentColor" fill-opacity="opacity" />,
    route: "/videos",
  },
];
const SecondSection: ILinks[] = [
  {
    id: 1,
    title: "Profile",
    image: <ProfileIcon fill="currentColor" fill-opacity="opacity" />,
    route: "/profile",
  },
  {
    id: 2,
    title: "Logout",
    image: <LogoutIcon fill="currentColor" fill-opacity="opacity" />,
    route: "/logout",
  },
];
export { FirstSection, SecondSection };
