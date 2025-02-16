"use client";
import ImgLilac from "../../../public/lilac.jpg";
import Imgdnjeh from "../../../public/dnjeh.png";
import IconLink from "./IconLink";
import Image from "next/image";
import { useTheme } from "next-themes";
import { itemList } from "./data";
import { throttle } from "lodash";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const ToggleCon = () => {
  const { theme, setTheme } = useTheme();
  const [vis, isVis] = useState(false);
  const [isChange, setIsChange] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const handleIsVisible = useMemo(
    () =>
      throttle(() => {
        const { scrollY, innerHeight, innerWidth } = window;
        isVis(scrollY > (innerHeight / 6) * 5 || innerWidth < 1280);
      }, 100),
    []
  );
  useEffect(() => {
    window.addEventListener("scroll", handleIsVisible);
    window.addEventListener("resize", handleIsVisible);
    return () => {
      window.removeEventListener("scroll", handleIsVisible);
      window.removeEventListener("resize", handleIsVisible);
    };
  }, [handleIsVisible]);

  useEffect(() => {
    const { scrollY, innerHeight, innerWidth } = window;
    isVis(scrollY > (innerHeight / 6) * 5 || innerWidth < 1280);
  });
  const themeChangeHandle = () => {
    setIsShow(true);
    setIsChange(true);
    setTimeout(() => {
      setTheme(theme !== "dark" ? "dark" : "light");
    }, 500);
    setTimeout(() => {
      setIsShow(false);
    }, 500);
    setTimeout(() => {
      setIsChange(false);
    }, 1000);
  };
  return (
    <div
      className={cn(
        "border-slate-950 dark:border-slate-600 border-opacity-20 border-0 rounded-full p-6 lg:p-8 md:gap-4 gap-1 grid-rows-3 grid-cols-2 grid-flow-col fixed flex items-center right-0 bottom-0 z-0",
        !vis && "xl:border-[1px] xl:relative xl:grid xl:w-1/2 xl:p-12"
      )}
    >
      <div
        className={cn(
          "w-dvw h-dvh opacity-0 -z-[9999] fixed top-0 right-0 bg-[#f9f9f9] dark:bg-[#0a0a0a]",
          isChange && "transition-opacity duration-500 ",
          isShow && "opacity-100 dark:bg-[#f9f9f9] bg-[#0a0a0a]"
        )}
      />
      <div className={cn("w-full text-center", !vis && "absolute top-0 mt-4")}>
        <span className="bg-purple-500 dark:bg-yellow-300 text-white dark:text-slate-700 rounded-full px-3 py-1 select-none text-sm lg:text-base">
          현재는 {theme !== "dark" ? "라일락" : "원도"} 모드에요.
        </span>
      </div>
      {itemList.map((ai, i) => (
        <IconLink
          context={ai.context}
          link={ai.link}
          key={i}
          className={cn(
            ai.className,
            !vis && "xl:flex",
            isShow && "hidden",
            isChange && "transition-opacity duration-500"
          )}
        >
          {ai.icon}
        </IconLink>
      ))}
      <div
        className={cn(
          "w-16 h-full flex items-center order-1 dark:order-3",
          !vis && "xl:w-full xl:h-full xl:row-span-3"
        )}
      >
        <div
          className={cn(
            "w-full h-full rounded-full cursor-pointer",
            vis && "h-[47.19px] overflow-hidden"
          )}
          onClick={isChange ? () => {} : themeChangeHandle}
        >
          <div
            className={cn(
              "relative w-full h-full dark:shadow-yellow-300 shadow-purple-500 ",
              isShow && "transition-all duration-500",
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
                  "z-1 absolute rounded-full opacity-0 dark:opacity-100 object-contain select-none pointer-events-none",
                  isChange && !vis && "transition-opacity duration-500",
                  !vis && "top-2"
                )}
              />
              <Image
                src={ImgLilac}
                alt={"프로필 이미지(라일락)"}
                className={cn(
                  "z-1 absolute dark:opacity-0 opacity-100 rounded-full object-contain  select-none pointer-events-none",
                  isChange && !vis && "transition-opacity duration-500",
                  !vis && "top-2"
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
