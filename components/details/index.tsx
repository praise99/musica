import React, { useContext, useEffect, useState } from "react";
import Header from "./header";
import { Wrapper } from "./style";
import MusicList from "./music-list";
import { useRouter } from "next/router";
import playerContext from "context/playerContext";
import PageSpinner from "common/loader";
const AlbumDetail = () => {
  const { songslist } = useContext(playerContext);
  const [loading, setLoading] = useState(true);
  const [style, setStyle] = useState({});
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
      let list = songslist.filter((item: any) => {
        return item.track.subtitle === id;
      });
      setStyle({
        backgroundImage: `linear-gradient(180deg, rgba(29, 33, 35, 0.8) 0%, #1D2123 61.48%), url(${
          list[0]!["track"]["share"]["image"]
        })`,
        backgroundSize: " cover",
        backgroundRepeat: "no-repeat",
      });
    }
    const timeOut = setTimeout(function () {
      setLoading(false);
    }, 1000); //wait 5 seconds

    return () => window.clearTimeout(timeOut);
  }, [router.isReady]);

  return loading ? (
    <PageSpinner />
  ) : (
    <Wrapper style={style}>
      <Header />
      <MusicList />
    </Wrapper>
  );
};

export default AlbumDetail;
