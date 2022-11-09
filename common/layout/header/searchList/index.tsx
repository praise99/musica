import React, { useContext, useEffect, useState } from "react";
import { Wrapper, Cards, Card } from "./style";
import { Heart, Option, Music } from "assets";
import Image from "next/image";
import { TextRegular12 } from "common/typography/style";
import { madeInLagosList } from "common/music-data/made-in-lagos";
import playerContext from "context/playerContext";
import { useRouter } from "next/router";
const SearchList = ({ SetCurrent, currentSong, songsList }: any) => {
  const { songslist } = useContext(playerContext);

  const findIndex = (id: string) => {
    const index = songslist.findIndex((item: any) => item.track.key === id);
    return index;
  };
  return (
    <Wrapper>
      <Cards>
        {songsList.map((item: any, i: any) => {
          return (
            <Card
              key={item.track.key}
              className={
                "" +
                (currentSong === findIndex(item.track.key) ? "selected" : "")
              }
              onClick={() => {
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
                    priority={true}
                  />
                </div>
              </div>
              <div className="title">
                <div>
                  <TextRegular12>{item.track.title}</TextRegular12>
                </div>
              </div>
            </Card>
          );
        })}
      </Cards>
    </Wrapper>
  );
};

export default SearchList;
