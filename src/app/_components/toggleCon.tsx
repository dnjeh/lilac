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
  const setSet = () => {
    setIsShow(false);
    setTheme(theme !== "dark" ? "dark" : "light");
  };
  const themeChangeHandle = () => {
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
  return (
    <div
      className={cn(
        "border-slate-950 dark:border-slate-600 border-opacity-20 border-0 rounded-full p-6 lg:p-8 md:gap-4 gap-1 grid-rows-3 grid-cols-2 grid-flow-col fixed flex items-center right-0 bottom-0 z-0",
        !vis && "xl:border-[1px] xl:relative xl:grid xl:w-1/2 xl:p-12"
      )}
    >
      <div
        className={cn(
          "w-dvw h-dvh fixed top-0 right-0",
          theme !== "dark" && isShow || theme === "dark" && !isShow ? "bg-[#171717]" : "bg-[#f9f9f9]",
          isChange ? "block opacity-0 transition-opacity duration-500 " : "hidden",
          isShow ? "opacity-100" : "opacity-0"
        )}
      />
      <div className={cn("w-full text-center", !vis && "absolute top-0 mt-4")}>
        <span className="bg-purple-500 dark:bg-yellow-300 text-white dark:text-slate-700 rounded-full px-3 py-1 select-none text-sm lg:text-base">
          현재는 {theme !== "dark" ? "라이트" : "다크"} 모드에요.
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
              !vis && isShow && theme !== "dark" && "translate-x-[calc(100%+16px)]",
              !vis && isShow && theme === "dark" && "-translate-x-[calc(100%+16px)]"
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
                  "absolute rounded-full opacity-100 object-contain select-none pointer-events-none",
                  isChange && !vis && "transition-opacity duration-500",
                  theme !== "dark" && "opacity-0",
                  !vis && "top-2",
                  vis && "-z-10"
                )}
              />
              <Image
                src={ImgLilac}
                alt={"프로필 이미지(라일락)"}
                className={cn(
                  "absolute rounded-full object-contain opacity-0 select-none pointer-events-none",
                  isChange && !vis && "transition-opacity duration-500",
                  theme !== "dark" && "opacity-100",
                  !vis && "top-2",
                  vis && "-z-10"
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
