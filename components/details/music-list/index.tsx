import React, { useContext, useEffect, useState } from "react";
import { Wrapper, Cards, Card } from "./style";
import { Heart, Option, Music } from "assets";
import Image from "next/image";
import { TextRegular12 } from "common/typography/style";
import { madeInLagosList } from "common/music-data/made-in-lagos";
import playerContext from "context/playerContext";
import { useRouter } from "next/router";
const MusicList = () => {
  const { SetCurrent, currentSong, songslist } = useContext(playerContext);
  const [albumList, setAlbumList] = useState([]);
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
      let list = songslist.filter((item: any) => {
        return item.track.subtitle === id;
      });
      setAlbumList(list);
    }
  }, [router.isReady]);

  const findIndex = (id: string) => {
    const index = songslist.findIndex((item: any) => item.track.key === id);
    return index;
  };
  return (
    <Wrapper>
      <Cards>
        {albumList.map((item: any, i: any) => {
          return (
            <Card
              key={item.track.key}
              className={
                "" +
                (currentSong === findIndex(item.track.key) ? "selected" : "")
              }
              onClick={() => {
                console.log("here");
                SetCurrent(findIndex(item.track.key));
              }}
            >
              <div className="image">
                <div
                  style={{
                    width: "39px",
                    height: "39px",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    width="39px"
                    height="39px"
                    src={item.track.share.image}
                    alt="music"
                    objectFit="cover"
                  />
                </div>
                <div className="none">
                  <Image src={Heart} alt="music" />
                </div>
              </div>
              <div className="title">
                <div>
                  <TextRegular12>{item.track.title}</TextRegular12>
                </div>
                <div className="single">
                  <TextRegular12>Single</TextRegular12>
                </div>
              </div>
              <div className="like">
                <div className="first">
                  <TextRegular12>4:17</TextRegular12>
                </div>
                <div className="second">
                  <Image src={Option} alt="music" />
                </div>
              </div>
            </Card>
          );
        })}
      </Cards>
    </Wrapper>
  );
};

export default MusicList;
