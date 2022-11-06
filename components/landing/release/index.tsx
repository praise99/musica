import React, { useContext, useEffect, useState } from "react";
import { Releases } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Wrapper } from "./style";
import {
  TextBold24,
  TextRegular12,
  TextRegular10,
} from "common/typography/style";
import { useMediaQuery } from "react-responsive";
import playerContext from "context/playerContext";
import { useRouter } from "next/router";
const Release = () => {
  const { SetCurrent, currentSong, songslist } = useContext(playerContext);
  const [releaseList, setReleaseList] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
  useEffect(() => {
    let list = songslist.filter((item: any) => {
      return item.track.subtitle2 === "release";
    });
    setReleaseList(list);
  }, []);
  const findIndex = (id: string) => {
    const index = songslist.findIndex((item: any) => item.track.key === id);
    return index;
  };
  return (
    <Wrapper>
      <TextBold24 className="release">New releases.</TextBold24>
      <Swiper
        spaceBetween={30}
        slidesPerView={isMobile ? 1.8 : 6.4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {releaseList.map((item: any) => {
          return (
            <SwiperSlide
              key={item.track.key}
              onClick={() => {
                console.log("here");
                SetCurrent(findIndex(item.track.key));
              }}
            >
              <div
                style={{
                  width: "153px",
                  height: "153px",
                  borderRadius: "25px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={item.track.share.image}
                  height="153px"
                  width="153px"
                  alt="pic"
                  objectFit="cover"
                />
              </div>
              <TextRegular12 className="desc">{item.track.title}</TextRegular12>
              <TextRegular10>{item.track.subtitle}</TextRegular10>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
};

export default Release;
