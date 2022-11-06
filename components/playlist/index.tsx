import React, { useState } from "react";
import { Wrapper } from "./style";
import Tab from "common/tabs";
import Collection from "./collection";
import Likes from "./likes";
const PlaylistComponent = () => {
  const tabs = [
    {
      name: "My collection",
      key: "1",
      component: <Collection />,
    },
    {
      name: "Likes",
      key: "2",
      component: <Likes />,
    },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].key);
  return (
    <Wrapper>
      <Tab tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className={"tab-content active-content"}>
        {tabs.map((tab) => {
          return tab.key === activeTab ? tab.component : null;
        })}
      </div>
    </Wrapper>
  );
};

export default PlaylistComponent;
