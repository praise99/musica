import react from "react";
import { First, Second, Third } from "assets";
interface ILinks {
  id: number;
  title: string;
  image: any;
  time: string;
  artist: string;
}
export const FirstSection: ILinks[] = [
  {
    id: 1,
    title: "Made in Lagos",
    image: First,
    time: "0:31:25",
    artist: "Big Wiz",
  },
  {
    id: 2,
    title: "Reggae “n” blues",
    image: Second,
    time: "1:02:42",
    artist: "Dj YK mule",
  },
  {
    id: 3,
    title: "Tomorrow’s tunes",
    image: Third,
    time: "2:01:25",
    artist: "Obi Datti",
  },
];
