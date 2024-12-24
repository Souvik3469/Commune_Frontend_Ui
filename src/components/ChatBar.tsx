import { FaPhoneAlt, FaVideo } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import avatar from "../assets/avatar.jpg";

const ChatBar = () => {
  return (
    <div className="grid grid-cols-12 p-2 bg-black border-b-[1px] border-gray-700 sticky top-0 z-10 ">
      <div className="col-span-9 flex items-center mx-2">
        <div>
          <img src={avatar} className="h-12 w-12 rounded-full" />
        </div>
        <div className="mx-3">
          <div className="text-sm text-gray-200">Grace Miller</div>
          <div className="text-xs text-blue-600">Online</div>
        </div>
      </div>
      <div className="col-span-3  flex items-center space-x-8 justify-end mx-4">
        <div>
          <FaPhoneAlt className="text-xl text-gray-400" />
        </div>
        <div>
          <FaVideo className="text-xl text-gray-400" />
        </div>
        <div>
          <BsThreeDotsVertical className="text-xl text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
