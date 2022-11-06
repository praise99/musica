import react from "react";
import {
  Release1,
  Release2,
  Release3,
  Release4,
  Release5,
  Release6,
  Release7,
} from "assets";
interface ILinks {
  id: number;
  image: any;
  title: string;
  sub: string;
}
export const PopularRelease: ILinks[] = [
  {
    id: 1,
    image: Release1,
    title: "Life in a bubble",
    sub: "BNXN",
  },
  {
    id: 2,
    image: Release2,
    title: "Mountain",
    sub: "Skepta",
  },
  {
    id: 3,
    image: Release3,
    title: "Limits",
    sub: "Big Wiz",
  },
  {
    id: 4,
    image: Release4,
    title: "Everything’s black",
    sub: "Wizkid",
  },
  {
    id: 5,
    image: Release5,
    title: "Cancelled",
    sub: "Rihanna",
  },
  {
    id: 6,
    image: Release6,
    title: "Nomad",
    sub: "Jon bellion",
  },
  {
    id: 7,
    image: Release7,
    title: "Blind",
    sub: "Eminem",
  },
];
