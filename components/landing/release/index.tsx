import React from "react";
import {
  Release1,
  Release2,
  Release3,
  Release4,
  Release5,
  Release6,
  Release7,
} from "assets";
import Image from "next/image";
import { Wrapper } from "./style";
const Release = () => {
  return (
    <Wrapper>
      <div className="image">
        <Image
          src={Release1}
          alt="pic"
          height={200}
          width={200}
          priority={true}
        />
      </div>
      <div className="image">
        <Image src={Release2} alt="pic" />
      </div>
      <div className="image">
        <Image src={Release3} alt="pic" />
      </div>
      <div className="image">
        <Image src={Release4} alt="pic" />
      </div>
      <div className="image">
        <Image src={Release5} alt="pic" />
      </div>
      <div className="image">
        <Image src={Release6} alt="pic" />
      </div>
      <div className="image">
        <Image src={Release7} alt="pic" />
      </div>
      <div className="image">
        <Image src={Release1} alt="pic" />
      </div>
      <div className="image">
        <Image src={Release2} alt="pic" />
      </div>
      <div className="image">
        <Image src={Release3} alt="pic" />
      </div>
      <div className="image">
        <Image src={Release4} alt="pic" />
      </div>
      <div className="image">
        <Image src={Release5} alt="pic" />
      </div>
      <div className="image">
        <Image src={Release6} alt="pic" />
      </div>
      <div className="image">
        <Image src={Release7} alt="pic" />
      </div>

      <div className="image">
        <Image src={Release1} alt="pic" />
      </div>
      <div className="image">
        <Image src={Release2} alt="pic" />
      </div>
      <div className="image">
        <Image src={Release3} alt="pic" />
      </div>
      <div className="image">
        <Image src={Release4} alt="pic" />
      </div>
      <div className="image">
        <Image src={Release5} alt="pic" />
      </div>
      <div className="image">
        <Image src={Release6} alt="pic" />
      </div>
      <div className="image">
        <Image src={Release7} alt="pic" />
      </div>
    </Wrapper>
  );
};

export default Release;
