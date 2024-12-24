import ChatBar from "./ChatBar";
import ChatArea from "./ChatArea";
import MessageBox from "./MessageBox";
import { FC } from "react";
import { messages } from "../data/messages";

type ChatBoxProps = {
  className?: string;
};

const ChatBox: FC<ChatBoxProps> = ({ className }) => {
  return (
    <div className={`text-white w-[70%]  ${className} bg-black`}>
      <ChatBar />
      <ChatArea messages={messages} />
      <MessageBox />
    </div>
  );
};

export default ChatBox;
