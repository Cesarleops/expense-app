"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import profilePic from "../assets/img/desktop-menu.png";
import { Create } from "../assets/icons/createIcon";
import { Settings } from "../assets/icons/settings";
import { Statistics } from "../assets/icons/statistics";
import { useState } from "react";
import { AddExpense } from "../expenses/ui/add-expense";
export default function MainSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const [addModal, setAddModal] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center h-10 pt-5 px-5">
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
            icon={<Create />}
            className="flex items-center justify-center rounded-full shadow-md h-10 w-10 "
          />
          <Button
            text=""
            icon={<Statistics />}
            className="flex items-center justify-center rounded-full shadow-md h-10 w-10 "
          />
          <Button
            text=""
            icon={<Settings />}
            className="flex items-center justify-center rounded-full shadow-md h-10 w-10 "
          />
        </aside>
      </header>
      {children}
      {addModal ? <AddExpense /> : null}
    </>
  );
}
