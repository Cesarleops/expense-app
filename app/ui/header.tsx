import { Button } from "./button";
import profilePic from "../assets/img/desktop-menu.png";
import Image from "next/image";
interface Props {
  iconRight?: React.ReactNode;
  icon?: React.ReactNode;
}
export const Header = ({ icon, iconRight }: Props) => {
  return (
    <header className="w-screen flex justify-between items-center h-14 p-5">
      <picture className="rounded-full shadow-md h-10 w-10">
        <Image
          src={profilePic}
          alt="user"
          height={60}
          width={60}
          className=""
        />
      </picture>
      <aside className="flex gap-4 items-center justify-center">
        <Button
          text=""
          icon={iconRight}
          className="flex items-center justify-center rounded-full shadow-md h-10 w-10 "
        />
      </aside>
    </header>
  );
};
