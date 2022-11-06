import React, { useState } from "react";
import { PopularRelease } from "./data";
import Image from "next/image";
import { Wrapper, Card, Content } from "./style";
import {
  TextRegular24,
  TextRegular10,
  TextRegular14,
} from "common/typography/style";
import { PlayCard } from "assets";
const Collection = () => {
  const [hover, setHover] = useState(false);
  const [id, setId] = useState(0);
  const onMouseEnter = (id: number) => {
    setHover(true);
    setId(id);
  };

  const onMouseLeave = (id: number) => {
    setHover(false);
    setId(id);
  };

  return (
    <Wrapper>
      {PopularRelease.map((item) => {
        return (
          <Card
            key={item.id}
            onMouseEnter={() => onMouseEnter(item.id)}
            onMouseLeave={() => onMouseLeave(item.id)}
          >
            <div
              className="image-card"
              style={{
                width: "200px",
                height: "234px",
                borderRadius: "25px",
                overflow: "hidden",
                marginRight: "24px",
                marginBottom: "24px",
                border: "1px solid rgba(255, 255, 255, 0.03)",
                opacity: "0.5",
                transform: id === item.id && hover ? "scale(1.3)" : "scale(1)",
                transition: "width 6s ease-in 1s",
              }}
            >
              <Image
                src={item.image}
                height="234px"
                width="200px"
                alt="pic"
                objectFit="cover"
              />
            </div>
            <Content>
              <div>
                <div>
                  <TextRegular24 className="limit">Limits</TextRegular24>
                  <TextRegular10 className="name">John watts</TextRegular10>
                </div>
                {id === item.id && hover && (
                  <div
                    style={{
                      transitionDuration: "1000ms",
                      transitionProperty: " all",
                      transitionTimingFunction: " cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                    className="title-below"
                  >
                    <TextRegular14 color="white">2.3m likes</TextRegular14>
                  </div>
                )}
              </div>
              {id === item.id && hover && (
                <div
                  style={{
                    transitionDuration: "700ms",
                    transitionProperty: " all",
                    transitionTimingFunction: " cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <Image src={PlayCard} alt="play" />
                </div>
              )}
            </Content>
          </Card>
        );
      })}
    </Wrapper>
  );
};

export default Collection;
