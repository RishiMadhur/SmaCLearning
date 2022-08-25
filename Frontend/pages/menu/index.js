import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Image from "next/image";
import Switch from "../switch/Switch";
import dashboardIcon from "/public/icons/dashboard.svg?url";
import classroomIcon from "/public/icons/classroom.svg?url";
import profileIcon from "/public/icons/profile.svg?url";
import messagesIcon from "/public/icons/msg.svg?url";
import docsIcon from "/public/icons/docs.svg?url";

const Menu = (props) => {
  const router = useRouter();
  const [active, setActive] = useState(false);

  const { isDarkMode, onThemeChange, onTogglesSidebar } = props;

  const handleThemeChange = (e) => {
    onThemeChange("dark", e);
  };

  const handleClick = () => {
    setActive(!active);
  };
  const menu = [
    {
      id: 1,
      to: "/dashboard",
      label: "Dashboard",
      img: dashboardIcon,
      active: false,
    },
    {
      id: 2,
      to: "/classroom",
      label: "Classroom",
      img: classroomIcon,
      active: false,
    },
    {
      id: 3,
      to: "/profile",
      label: "My Profile",
      img: profileIcon,
      active: false,
    },
    {
      id: 4,
      to: "/messages",
      label: "Messages",
      img: messagesIcon,
      active: false,
    },
    { id: 5, to: "/docs", label: "Docs", img: docsIcon, active: false },
  ];

  //color =  dashboardState
  return (
    <div className="text-text font-normal md:h-40 w-full flex pt-20 bg-white items-center">
      <div>
        <img
          className="pl-20 w-72 h-40 pb-20"
          src="/icons/smart solution.svg"
          alt="smart"
        />
      </div>
      <button
        className=" inline-flex p-3 rounded lg:hidden text-text ml-auto hover:text-white outline-none"
        onClick={handleClick}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div
        className={`${
          active ? "" : "hidden"
        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >
        <div className="flex w-full items-center md:ml-92 pl-20">
          <div className="flex mx-14 gap-10 md:ml-60 items-center">
            {menu.map((value) => (
              <div
                className="cursor-pointer flex mb-20 items-center"
                key={value.id}
              >
                <span
                  className="pl-5 "
                  onClick={() => {
                    router.push(value.to);
                  }}
                >
                  {value.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5 mb-20">
          <Switch
            checked={isDarkMode}
            label={isDarkMode ? "Dark" : "Light"}
            onChange={handleThemeChange}
          />
        </div>
        <div className="flex justify-end md:mr-5">
          <div className="flex mb-20">
            <Image
              width="146px"
              height="55px"
              src="/icons/contact.svg"
              alt="contact"
            />
          </div>
          <div className="pl-5 mb-20 mt-6">
            <Image
              src="/icons/head4.svg"
              width="50px"
              height="50px"
              alt="Img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
