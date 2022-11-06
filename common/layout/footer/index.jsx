import React, { useState, useEffect, useRef, useContext } from "react";
import { Wrapper, Top, Bottom, Cover } from "./style";
import { Picture, Shuffle, Play, Previous, Volume, Repeat, Next } from "assets";
import Image from "next/image";
import { TextBold14, TextBold10 } from "../../typography/style";
import playerContext from "context/playerContext";
const Footer = () => {
  // Global State
  const {
    currentSong,
    nextSong,
    prevSong,
    repeat,
    random,
    playing,
    toggleRandom,
    toggleRepeat,
    togglePlaying,
    handleEnd,
    songslist,
  } = useContext(playerContext);

  const audio = useRef("audio_tag");

  // self State
  const [statevolum, setStateVolum] = useState(0.3);
  const [dur, setDur] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const fmtMSS = (s) => {
    return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + ~~s;
  };

  const toggleAudio = () => {
    audio.current.paused ? audio.current.play() : audio.current.pause();
  };

  const handleVolume = (q) => {
    setStateVolum(q);
    audio.current.volume = q;
  };

  const handleProgress = (e) => {
    let compute = (e.target.value * dur) / 100;
    setCurrentTime(compute);
    audio.current.currentTime = compute;
  };

  useEffect(() => {
    audio.current.volume = statevolum;
    if (playing) {
      toggleAudio();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSong]);
  return (
    <Wrapper>
      <audio
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
        onCanPlay={(e) => setDur(e.target.duration)}
        onEnded={handleEnd}
        ref={audio}
        type="audio/mpeg"
        preload="true"
        src={songslist[currentSong].track.hub.actions[1].uri}
      />
      <Top>
        <div className="music_name">
          <div
            style={{
              width: "49px",
              height: "49px",
              borderRadius: "8px",
              overflow: "hidden",
              marginTop: "-20px",
            }}
          >
            <Image
              width="49px"
              height="49px"
              src={songslist[currentSong].track.share.image}
              alt="music"
              objectFit="cover"
            />
          </div>
          <div className="description">
            <TextBold14 className="textColor">
              {songslist[currentSong].track.title}
            </TextBold14>
            <TextBold10 className="descColor">
              {songslist[currentSong].track.subtitle}
            </TextBold10>
          </div>
        </div>
        <div className="music_control">
          <div className="pointer none" onClick={toggleRandom}>
            <Image src={Shuffle} alt="icons" />
          </div>
          <div className="pointer previous none" onClick={prevSong}>
            <Image src={Previous} alt="icons" />
          </div>
          <Cover
            className="pointer"
            onClick={() => {
              togglePlaying();
              toggleAudio();
            }}
          >
            {!playing ? (
              <svg
                width="9"
                height="10"
                viewBox="0 0 9 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.333344 4.77269V2.95366C0.333344 0.619264 1.98563 -0.33566 4.0017 0.831537L5.57814 1.741L7.15463 2.65047C9.17069 3.81767 9.17069 5.7277 7.15463 6.8949L5.57814 7.80437L4.0017 8.71383C1.98563 9.88103 0.333344 8.92611 0.333344 6.59171V4.77269Z"
                  fill="#EFEEE0"
                />
              </svg>
            ) : (
              <svg
                width="9"
                height="12"
                viewBox="0 0 53 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="5" y="6" width="18" height="53" rx="9" fill="white" />
                <rect x="30" y="6" width="18" height="53" rx="9" fill="white" />
              </svg>
            )}
          </Cover>
          <div className="pointer next" onClick={nextSong}>
            <Image src={Next} alt="icons" />
          </div>
          <div className="pointer none" onClick={toggleRepeat}>
            <Image src={Repeat} alt="icons" />
          </div>
        </div>
        <div className="music_volume none">
          <div>
            <Image src={Volume} alt="icons" />
          </div>
          <div className="range">
            <input
              value={Math.round(statevolum * 100)}
              onChange={(e) => handleVolume(e.target.value / 100)}
              type="range"
              name=""
              id=""
            />
          </div>
        </div>
      </Top>
      <Bottom>
        <input
          onChange={handleProgress}
          value={dur ? (currentTime * 100) / dur : 0}
          type="range"
          id="myRange"
        ></input>
      </Bottom>
    </Wrapper>
  );
};

export default Footer;
