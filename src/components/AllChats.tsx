import avatar from "../assets/avatar.jpg";
import { IoSearch } from "react-icons/io5";
import logo from "../assets/logo1.png";
import ChatSection from "./ChatSection";
import { FaPlus } from "react-icons/fa6";
import { FC } from "react";

type AllChatsProps = {
  className?: string;
};

const AllChats: FC<AllChatsProps> = ({ className }) => {
  const groupChats = [
    {
      name: "Liam Anderson",
      message: "Hey Hows it going",
      time: "12:00 P.M",
      avatarSrc: avatar,
    },
    {
      name: "Liam Anderson",
      message: "Hey Hows it going",
      time: "12:00 P.M",
      avatarSrc: avatar,
    },
    {
      name: "Liam Anderson",
      message: "Hey Hows it going",
      time: "12:00 P.M",
      avatarSrc: avatar,
    },
    {
      name: "Liam Anderson",
      message: "Hey Hows it going",
      time: "12:00 P.M",
      avatarSrc: avatar,
    },
    {
      name: "Liam Anderson",
      message: "Hey Hows it going",
      time: "12:00 P.M",
      avatarSrc: avatar,
    },
  ];

  const allChats = [
    {
      name: "Liam Anderson",
      message: "Hey Hows it going",
      time: "12:00 P.M",
      avatarSrc: avatar,
    },
    {
      name: "Liam Anderson",
      message: "Hey Hows it going",
      time: "12:00 P.M",
      avatarSrc: avatar,
    },
    {
      name: "Liam Anderson",
      message: "Hey Hows it going",
      time: "12:00 P.M",
      avatarSrc: avatar,
    },
    {
      name: "Liam Anderson",
      message: "Hey Hows it going",
      time: "12:00 P.M",
      avatarSrc: avatar,
    },
    {
      name: "Liam Anderson",
      message: "Hey Hows it going",
      time: "12:00 P.M",
      avatarSrc: avatar,
    },
    {
      name: "Liam Anderson",
      message: "Hey Hows it going",
      time: "12:00 P.M",
      avatarSrc: avatar,
    },
    {
      name: "Liam Anderson",
      message: "Hey Hows it going",
      time: "12:00 P.M",
      avatarSrc: avatar,
    },
    {
      name: "Liam Anderson",
      message: "Hey Hows it going",
      time: "12:00 P.M",
      avatarSrc: avatar,
    },
  ];

  return (
    <div
      className={`bg-black w-[30%] h-screen border-r-[1px]  border-gray-700 ${className}`}
    >
      {/* Logo Section */}
      <div className="mt-1 mb-2">
        <div className="flex  items-center my-2">
          <div>
            <img src={logo} className="h-12 w-12" />
          </div>
          <div className="text-xl font-semibold">
            <span className="text-blue-400">Any</span>
            <span className="text-white">Chat</span>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex items-center">
        <div className="relative w-[80%]">
          <input
            className="border-[1px]  border-gray-700 bg-black rounded-md text-gray-300 text-sm p-2 pl-8 w-full"
            placeholder="Search messages and people"
          />
          <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">
            <IoSearch className="text-lg" />
          </span>
        </div>
        <div>
          <button className="bg-[#00A3FF] mx-2 p-2 rounded-lg">
            <FaPlus className="text-white text-xl" />
          </button>
        </div>
      </div>

      {/* Chat Sections */}
      <ChatSection title="GROUP CHATS" chats={groupChats} isGroup={false} />
      <ChatSection title="ALL CHATS" chats={allChats} isGroup={true} />
    </div>
  );
};

export default AllChats;
