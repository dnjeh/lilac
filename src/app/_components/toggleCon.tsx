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

const ToggleCon = () => {
  const { theme, setTheme } = useTheme();
  const [vis, isVis] = useState(false);
  const handleIsVisible = useMemo(
    () =>
      throttle(() => {
        const { scrollY, innerHeight, innerWidth } = window;
        isVis(scrollY > innerHeight || innerWidth < 1280);
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

  return (
    <div
      className={cn(
        "border-slate-950 dark:border-slate-600 border-opacity-20 border-0 rounded-full p-6 lg:p-8 gap-4 grid-rows-3 grid-cols-2 grid-flow-col fixed flex items-center right-0 bottom-0 z-10",
        !vis && "xl:border-[1px] xl:relative xl:grid xl:w-1/2 xl:p-12"
      )}
    >
      <div className={cn("w-full text-center", !vis && "absolute top-0 mt-4")}>
        <span className="bg-purple-500 dark:bg-yellow-300 text-white dark:text-slate-700 rounded-full px-3 py-1 select-none">
          현재는 {theme !== "dark" ? "라일락" : "원도"} 모드에요.
        </span>
      </div>
      {itemList.map((ai, i) => (
        <IconLink
          context={ai.context}
          link={ai.link}
          key={i}
          className={cn(ai.className, !vis && "xl:flex")}
        >
          {ai.icon}
        </IconLink>
      ))}
      <div className={cn("w-16 flex items-center order-1 dark:order-3", !vis && "xl:w-full xl:h-full xl:row-span-3")}>
        <div
          className="shadow-purple-500 dark:shadow-yellow-300 shadow-inner rounded-full cursor-pointer"
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          <Image
            src={theme !== "dark" ? ImgLilac : Imgdnjeh}
            alt={
              theme !== "dark" ? "프로필 이미지(라일락)" : "프로필 이미지(원도)"
            }
            className="z-[-1] relative rounded-full object-contain my-auto select-none pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};

export default ToggleCon;
