import React, { useContext, useEffect, useState } from "react";
import { Wrapper } from "./style";
import { Search } from "assets";
import Image from "next/image";
import SearchList from "./searchList";
import playerContext from "context/playerContext";
const Header = () => {
  const { SetCurrent, currentSong, songslist } = useContext(playerContext);
  const [search, setSearch] = useState(false);
  const [filter, setFilter] = useState("");
  const [albumList, setAlbumList] = useState([]);
  useEffect(() => {
    setAlbumList(songslist);
  }, []);
  const SearchResult = () => {
    if (filter) {
      setSearch(true);
    } else {
      setSearch(false);
    }
  };
  return (
    <Wrapper>
      <div className="input-box">
        <Image src={Search} alt="search" />
        <input
          id="Search"
          onChange={(item) => {
            setFilter(item.target.value);
            if (item.target.value) {
              setSearch(true);
            } else {
              setSearch(false);
            }
            let list = songslist.filter((el: any) => {
              return (
                el.track.subtitle.toLowerCase().includes(item.target.value) ||
                el.track.title.toLowerCase().includes(item.target.value)
              );
            });
            setAlbumList(list);
          }}
          name="Search"
          type="search"
          placeholder="Search"
        />
      </div>
      <div>
        {search && (
          <SearchList
            SetCurrent={SetCurrent}
            currentSong={currentSong}
            songsList={albumList}
          />
        )}
      </div>
    </Wrapper>
  );
};

export default Header;
