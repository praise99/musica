import react from "react";
import { Third } from "assets";
interface ILinks {
  id: number;
  title: string;
  image: any;
  time: string;
  desc: string;
  filterBy: string;
}
export const FirstSection: ILinks[] = [
  {
    id: 1,
    title: "Made in Lagos",
    filterBy: "Wizkid",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/52/bf/2a/52bf2ad2-877b-de71-9078-a103230956c4/886449403936.jpg/400x400cc.jpg",
    time: "18 songs ~ 1 hour, 6 minutes",
    desc: "Made in Lagos is the fourth studio album by Nigerian singer Wizkid.It was released on 30 October 2020 by Starboy Entertainment and RCA  Records. The album features guest appearances from Burna Boy, Skepta, H.E.R., Ella Mai, Tay Iwar, Projexx, Tems, Damian Marley, Terri and was executive produced by P2J. The deluxe edition was released on 27 August 2021. It features additional guest appearances  from Buju and Justin Bieber. In support of the album, Wizkid  embarked on the Made in Lagos Tour. The album received a nomination at the 64th Annual Grammy Awards for Best Global Music Album.",
  },
  {
    id: 2,
    title: "Mr. Money With The Vibe",
    filterBy: "Asake",
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/5e/4f/66/5e4f6644-a234-d037-609d-7ed53fd6c7f9/194690909856_cover.jpg/400x400cc.jpg",
    time: "12 songs ~  30 minutes",
    desc: 'Mr. Money with the Vibe is the debut studio album by Nigerian singer Asake, following his signing with YBNL Nation in February 2022. It was released on 7 September 2022 through Empire Distribution. The album comprises 12 tracks, which were all produced by Magicsticks. The album features two guest appearances from Russ and Burna Boy. Two other tracks which have been previously released as singles from the album are "Peace Be Unto You" and "Terminator" which were released in June 2022 and August 2022 respectively. This album release is a follow up to his extended play Ololade Asake which was released in February 2022 immediately after being signed by Olamide to YBNL. Following the album release, it has become the highest charting debut Nigerian album of all time on the Billboard 200, peaking at number 66 in September 2022.',
  },
  {
    id: 3,
    title: "Laughter, Tears & Goosebumps",
    filterBy: "Fireboy",
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/7f/2f/70/7f2f70a8-7d4d-c236-20ab-6badf838db46/194690050770_cover.jpg/400x400cc.jpg",
    time: "13 songs  ~ 40 minutes",
    desc: 'Laughter, Tears and Goosebumps is the debut studio album by Nigerian singer Fireboy DML. It was released by YBNL Nation on November 29, 2019. The album comprises 13 tracks and doesn"t feature any guest artist. It was primarily produced by Pheelz, along with production from Cracker Mallo, Echo the Guru, IamBeatz and P.Prime. It also features Nigerian rapper Olamide Adedeji as executive producer. LTG was supported by the previously released singles "Jealous", "What If I Say" and "King". It received generally positive reviews from music critics, but was criticized for being labeled an "Afro-Life" record instead of an R&B album.',
  },
];
