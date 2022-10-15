import React from "react";
import { Wrapper, LeftSide, RightSide, Cards, Card } from "./style";
import {
  TextRegular12,
  TextBold35,
  TextRegular14,
  TextBold24,
  TextRegular17,
} from "common/typography/style";
import { Love, People, Guy, Vector, First, Like } from "assets";
import Image from "next/image";
import { FirstSection } from "./data";
const Header = () => {
  return (
    <Wrapper>
      <LeftSide>
        <div className="content">
          <div>
            <TextRegular12>Curated playlist</TextRegular12>
          </div>
          <div>
            <TextBold35>R & B Hits</TextBold35>
            <TextRegular14>
              All mine, Lie again, Petty call me everyday, Out of time, No love,
              Bad habit, and so much more
            </TextRegular14>
          </div>
          <div className="flex">
            <div>
              <Image src={People} alt="" />
            </div>
            <div className="love">
              <Image src={Love} alt="" />
            </div>
            <div>
              <TextRegular14>33k Likes</TextRegular14>
            </div>
          </div>
        </div>
        <div className="absolute">
          <Image src={Vector} alt="vector" />
        </div>
        <div className="image">
          <Image src={Guy} alt="guy" />
        </div>
      </LeftSide>
      <RightSide>
        <TextBold24>Top Albums</TextBold24>
        <Cards>
          {FirstSection.map((item) => {
            return (
              <Card key={item.id}>
                <div className="each-card">
                  <div>
                    <Image src={item.image} alt="pic" />
                  </div>
                  <div className="desc">
                    <TextRegular17>{item.title}</TextRegular17>
                    <TextRegular12 className="name">
                      {item.artist}
                    </TextRegular12>
                    <TextRegular12>{item.time}</TextRegular12>
                  </div>
                </div>
                <div>
                  <Image className="pointer" src={Like} alt="pic" />
                </div>
              </Card>
            );
          })}
        </Cards>
      </RightSide>
    </Wrapper>
  );
};

export default Header;
