import React from "react";
import { Wrapper, Top, Bottom } from "./style";
import { Picture, Shuffle, Play, Previous, Volume, Repeat, Next } from "assets";
import Image from "next/image";
import { TextBold14, TextBold10 } from "../../typography/style";
const Footer = () => {
  return (
    <Wrapper>
      <Top>
        <div className="music_name">
          <div>
            <Image src={Picture} alt="pics" />
          </div>
          <div className="description">
            <TextBold14 className="textColor">Seasons in</TextBold14>
            <TextBold10 className="descColor">James</TextBold10>
          </div>
        </div>
        <div className="music_control">
          <div className="pointer">
            <Image src={Shuffle} alt="icons" />
          </div>
          <div className="pointer">
            <Image src={Previous} alt="icons" />
          </div>
          <div className="pointer">
            <Image src={Play} alt="icons" />
          </div>
          <div className="pointer">
            <Image src={Next} alt="icons" />
          </div>
          <div className="pointer">
            <Image src={Repeat} alt="icons" />
          </div>
        </div>
        <div className="music_volume">
          <div>
            <Image src={Volume} alt="icons" />
          </div>
          <div className="range">
            <input type="range" name="" id="" />
          </div>
        </div>
      </Top>
      <Bottom>
        <input type="range" id="myRange"></input>
      </Bottom>
    </Wrapper>
  );
};

export default Footer;
