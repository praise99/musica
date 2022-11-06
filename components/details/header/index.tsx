import React, { useEffect, useState } from "react";
import { Tomorrow } from "assets";
import { Wrapper, Tag } from "./style";
import Image from "next/image";
import { PlayDetail, LoveDetail, SquareDetail } from "assets";
import {
  TextRegular12,
  TextBold35,
  TextRegular14,
} from "common/typography/style";
import { FirstSection } from "./data";
import { useRouter } from "next/router";
interface ILinks {
  id: number;
  title: string;
  image: any;
  time: string;
  desc: string;
  filterBy: string;
}
const Header = () => {
  const [albumData, setAlbumData] = useState<ILinks>();
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
      let list = FirstSection.filter((item: any) => {
        return item.filterBy === id;
      });
      setAlbumData(list[0]);
      console.log(id, "here");
    }
  }, [router.isReady]);
  return (
    <Wrapper>
      <div className="image-info">
        <div
          style={{
            width: "284px",
            height: "289px",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <Image
            width="284px"
            height="289px"
            src={albumData?.image}
            alt="image"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="information">
        <div>
          <TextBold35 style={{ color: "#A4C7C6" }}>
            {albumData?.title}
          </TextBold35>
          <TextRegular14 className="title-desc">
            {albumData?.desc}
          </TextRegular14>
          <TextRegular14 style={{ color: "#EFEEE0" }} className="title-time">
            {albumData?.time}
          </TextRegular14>
        </div>
        <div className="bottom">
          <Tag>
            <Image src={PlayDetail} alt="data" />
            <TextRegular12 className="text">Play all</TextRegular12>
          </Tag>
          <Tag className="middle">
            <Image src={SquareDetail} alt="data" />
            <TextRegular12 className="text">Add to collection</TextRegular12>
          </Tag>
          <Image src={LoveDetail} alt="data" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
