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
import Link from "next/link";
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
              <Image priority={true} src={People} alt="" />
            </div>
            <div className="love">
              <Image priority={true} src={Love} alt="" />
            </div>
            <div>
              <TextRegular14>33k Likes</TextRegular14>
            </div>
          </div>
        </div>
        <div className="absolute">
          <Image priority={true} src={Vector} alt="vector" />
        </div>
        <div className="image">
          <Image priority={true} src={Guy} alt="guy" />
        </div>
      </LeftSide>
      <RightSide>
        <TextBold24>Top Albums</TextBold24>
        <Cards>
          {FirstSection.map((item) => {
            return (
              <Link href={`${item.route}`} key={item.id}>
                <Card>
                  <div className="each-card">
                    <div
                      style={{
                        width: "63px",
                        height: "63px",
                        borderRadius: "10px",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        width="63px"
                        height="63px"
                        src={item.image}
                        alt="image"
                        objectFit="cover"
                      />
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
                    <Image
                      priority={true}
                      className="pointer"
                      src={Like}
                      alt="pic"
                    />
                  </div>
                </Card>
              </Link>
            );
          })}
        </Cards>
      </RightSide>
    </Wrapper>
  );
};

export default Header;
