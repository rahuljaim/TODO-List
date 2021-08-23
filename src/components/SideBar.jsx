import React from "react";
import { FaInbox, FaCalendarCheck, FaCalendarAlt } from "react-icons/fa";

const SideBar = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="sidebar">
      <div
        className={selectedTab === "INBOX" ? "active" : ""}
        onClick={() => setSelectedTab("INBOX")}
      >
        <FaInbox className="icon" />
        Inbox
      </div>
      <div
        className={selectedTab === "TODAY" ? "active" : ""}
        onClick={() => setSelectedTab("TODAY")}
      >
        {" "}
        <FaCalendarCheck className="icon" />
        Today
      </div>
      <div
        className={selectedTab === "NEXT_7" ? "active" : ""}
        onClick={() => setSelectedTab("NEXT_7")}
      >
        {" "}
        <FaCalendarAlt className="icon" />
        Next 7 days
      </div>
    </div>
  );
};

export default SideBar;
