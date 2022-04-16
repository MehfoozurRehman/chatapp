import React, { useState } from "react";
import ChatArea from "../components/ChatArea";
import ChatInfo from "../components/ChatInfo";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const [isDetails, setIsDetails] = useState(false);
  return (
    <div className="container">
      <Sidebar />
      <ChatArea setIsDetails={setIsDetails} />
      {isDetails ? <ChatInfo /> : null}
    </div>
  );
}
