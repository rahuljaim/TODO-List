import React, { useState } from "react";
import Tasks from "./Tasks";
import Sidebar from "./SideBar";
//Inbox, next 7, today
const Content = () => {
  const [selectedTab, setSelectedTab] = useState("INBOX");
  return (
    <section className="content">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <Tasks selectedTab={selectedTab} />
    </section>
  );
};

export default Content;
