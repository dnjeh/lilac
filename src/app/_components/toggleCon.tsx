"use client";
import ImgLilac from "../../../public/lilac.jpg";
import Imgdnjeh from "../../../public/dnjeh.png";
import IconLink from "./IconLink";
import Image from "next/image";
import { useTheme } from "next-themes";
import { itemList } from "./data";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const ToggleCon = () => {
  const { theme, setTheme } = useTheme();
  const [isChange, setIsChange] = useState(false);
  const [isChange2, setIsChange2] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isShow2, setIsShow2] = useState(false);

  const setSet = () => {
    setIsShow(false);
    setTheme(theme !== "dark" ? "dark" : "light");
  };
  const themeChangeHandle = () => {
    const { scrollY } = window;
    if (scrollY > 0) {
      lockedHandle();
      return;
    };
    setIsChange(true);
    setTimeout(() => {
      setIsShow(true);
    }, 1);
    setTimeout(() => {
      setSet();
    }, 500);
    setTimeout(() => {
      setIsChange(false);
    }, 1000);
  };
  const lockedHandle = () => {
    setIsChange2(true);
    setTimeout(() => {
      setIsShow2(true);
    }, 1);
    setTimeout(() => {
      setIsShow2(false);
    }, 300);
    setTimeout(() => {
      setIsChange2(false);
    }, 600);
  };
  return (
    <div className="border-slate-950 dark:border-slate-600 border-opacity-20 border-0 rounded-full p-6 lg:p-8 md:gap-4 gap-1 grid-rows-3 grid-cols-2 grid-flow-col items-center right-0 bottom-0 z-0 xl:border-[1px] xl:relative xl:grid xl:w-1/2 xl:p-12 hidden">
      <div
        className={cn(
          "w-dvw h-dvh fixed top-0 right-0",
          (theme !== "dark" && isShow) || (theme === "dark" && !isShow)
            ? "bg-[#171717]"
            : "bg-[#f9f9f9]",
          isChange
            ? "block opacity-0 transition-opacity duration-500 "
            : "hidden",
          isShow ? "opacity-100" : "opacity-0"
        )}
      />
      {itemList.map((ai, i) => (
        <IconLink
          context={ai.context}
          link={ai.link}
          key={i}
          className={cn(
            ai.className,
            "flex",
            isChange && "transition-opacity duration-500"
          )}
        >
          {ai.icon}
        </IconLink>
      ))}
      <div
        className={cn(
          "w-16 h-full flex items-center order-1 dark:order-3 xl:w-full xl:h-full xl:row-span-3"
        )}
      >
        <div
          className="w-full h-full rounded-full cursor-pointer"
          onClick={isChange ? () => {} : themeChangeHandle}
        >
          <div
            className={cn(
              "relative w-full h-full dark:shadow-yellow-300 shadow-purple-500 p-0",
              (isShow || isChange2) && "transition-all duration-500",
              isShow && theme !== "dark" && "translate-x-[calc(100%+16px)]",
              isShow && theme === "dark" && "-translate-x-[calc(100%+16px)]"
            )}
          >
            <Link
              href={"#"}
              about="토글 버튼"
              className="w-full h-full rounded-full cursor-default"
            >
              <Image
                src={Imgdnjeh}
                alt={"프로필 이미지(원도)"}
                className={cn(
                  "absolute rounded-full opacity-100 object-contain select-none pointer-events-none top-2",
                  isChange && "transition-opacity duration-500",
                  (isChange2) && "transition-all duration-500",
                  isChange2 && (theme !== "dark" ? "left-0" : "right-0"),
                  isShow2 && (theme !== "dark" ? "left-4" : "right-4"),
                  theme !== "dark" && "opacity-0"
                )}
              />
              <Image
                src={ImgLilac}
                alt={"프로필 이미지(라일락)"}
                className={cn(
                  "absolute rounded-full object-contain opacity-0 select-none pointer-events-none top-2 left-0 right-0",
                  isChange && "transition-opacity duration-500",
                  (isChange2) && "transition-all duration-500",
                  isChange2 && (theme !== "dark" ? "left-0" : "right-0"),
                  isShow2 && (theme !== "dark" ? "left-4" : "right-4"),
                  theme !== "dark" && "opacity-100"
                )}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToggleCon;
