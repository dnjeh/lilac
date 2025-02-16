"use client";
import { useTheme } from "next-themes";
import ImgLilach from "../../../public/lilach.png";
import Image from "next/image";

const Header = () => {
  const { theme } = useTheme();
  return (
    <h2 className="text-3xl sm:text-4xl lg:h-12 lg:text-5xl font-semibold flex lg:flex-row flex-col w-full lg:items-center items-end">
      <div className="self-start">
        <span>오,&nbsp;</span>
        <span className="text-purple-500 dark:text-yellow-400">
          {theme !== "dark" ? "라일락" : "보름달"}
        </span>
      </div>
      <div className="md:block lg:opacity-100 md:opacity-0 hidden bg-gradient-to-r from-purple-500 dark:from-yellow-400 to-slate-950 dark:to-slate-50 flex-1 h-1 mx-4" />
      {theme !== "dark" ? <div>花이 피는 날</div> : <div>月이 뜨는 밤</div>}
      <div className="flex items-center">
        &nbsp;안녕
        {theme === "light" ? (
          <Image
            src={ImgLilach}
            alt="느낌표"
            className="h-8 w-6 sm:h-9 sm:w-6 lg:h-16 object-cover lg:w-12"
          />
        ) : (
          "!"
        )}
      </div>
    </h2>
  );
};

export default Header;
