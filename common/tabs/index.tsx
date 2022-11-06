import React, { memo, useState } from "react";
import { Wrapper } from "./style";

interface TabProps {
  activeTab?: string;
  tabs?: Array<{ key: string; name: string; component?: React.ReactNode }>;
  setActiveTab?: (key: any) => void;
}

const Tab: React.FC<TabProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <Wrapper className="wrap">
      <div className="wrap">
        {tabs?.map((tab) => {
          return (
            <p
              key={tab.key}
              className={activeTab === tab.key ? "btn active-btn" : "btn"}
              onClick={() => setActiveTab?.(tab.key)}
            >
              {tab.name}
            </p>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default memo(Tab);
