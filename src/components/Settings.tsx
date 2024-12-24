import { FC } from "react";
type SettingsProps = {
  className?: string;
};
const Settings: FC<SettingsProps> = ({ className }) => {
  return (
    <div
      className={`bg-black text-2xl text-gray-200 w-[30%] h-screen border-r-[1px]  border-gray-700 ${className}`}
    >
      Settings
    </div>
  );
};

export default Settings;
