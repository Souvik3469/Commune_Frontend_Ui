import { useEffect, useState } from "react";
import SideBar from "./SideBar";
import AllChats from "./AllChats";

import ChatBox from "./ChatBox";
import Notifications from "./Notifications";
import Settings from "./Settings";

const Chat1 = () => {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setActive("messages"); // Default to 'messages' in mobile view
    } else {
      setActive("home"); // Default to 'home' in fullscreen view
    }
  };

  // Set default view based on initial screen size
  useEffect(() => {
    handleResize(); // Set initial active view based on screen size
    window.addEventListener("resize", handleResize); // Add resize event listener

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener on unmount
    };
  }, []);
  return (
    <div className="flex bg-black">
      <SideBar
        active={active}
        setActive={setActive}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div
        className={`flex w-full bg-black ${
          isOpen ? "pl-12" : "" // Apply padding when the sidebar is open
        } sm:pl-36`} // Apply padding on sm (desktop) breakpoint
      >
        {active === "home" && (
          <>
            <AllChats />
            <ChatBox />
          </>
        )}
        {active === "people" && <AllChats className="w-full pl-4 sm:pl-0" />}
        {active === "messages" && <ChatBox className="w-full" />}
        {active === "notifications" && <Notifications className="w-full" />}
        {active === "settings" && <Settings className="w-full" />}
      </div>
    </div>
  );
};

export default Chat1;
