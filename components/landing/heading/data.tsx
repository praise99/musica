import react from "react";
interface ILinks {
  id: number;
  title: string;
  image: any;
  time: string;
  artist: string;
  route: string;
}
export const FirstSection: ILinks[] = [
  {
    id: 1,
    title: "Made in Lagos",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/52/bf/2a/52bf2ad2-877b-de71-9078-a103230956c4/886449403936.jpg/400x400cc.jpg",
    time: "01:06:25",
    artist: "Big Wiz",
    route: "/album/Wizkid",
  },
  {
    id: 2,
    title: "Mr. Money With The Vibe",
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/5e/4f/66/5e4f6644-a234-d037-609d-7ed53fd6c7f9/194690909856_cover.jpg/400x400cc.jpg",
    time: "0:30:00",
    artist: "Asake",
    route: "/album/Asake",
  },
  {
    id: 3,
    title: "Laughter, Tears & Goosebumps",
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/7f/2f/70/7f2f70a8-7d4d-c236-20ab-6badf838db46/194690050770_cover.jpg/400x400cc.jpg",
    time: "0:40:45",
    artist: "Fireboy DML",
    route: "/album/Fireboy",
  },
];
