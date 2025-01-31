"use client"
import ImgLilac from "../../../public/lilac.jpg";
import ImgSolved from "../../../public/solved.svg";
import ImgSolvedDark from "../../../public/solved_dark.svg";
import Imgdnjeh from "../../../public/dnjeh.png";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import IconLink from "./IconLink";
import Image from "next/image";
import { useTheme } from "next-themes";

const ToggleCon = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className="border-slate-950 dark:border-slate-600 border-opacity-20 border-0 2xl:border-[1px] 
            rounded-full p-6 lg:p-8 2xl:p-12 gap-4 2xl:w-1/2 2xl:grid grid-rows-3 grid-cols-2 grid-flow-col
            2xl:relative fixed flex items-center right-0 bottom-0 z-10 "
    >
      {/*
            <div className="2xl:mt-4 w-full text-center 2xl:absolute 2xl:top-0">
              <span className="bg-purple-500 dark:bg-yellow-300 text-white dark:text-slate-700 rounded-full px-3 py-1 select-none">
                현재는 {theme !== "dark" ? "라일락" : "원도"} 모드에요.
              </span>
            </div>
*/}
      <IconLink
        context="dnjeh"
        icon={<FaGithub width={"4rem"} height={"4rem"} />}
        link={"https://github.com/dnjeh"}
        className="dark:ml-6 -ml-2"
      />
      <IconLink
        context="ehdnj.001@gmail.com"
        icon={<IoMdMail width={"4rem"} height={"4rem"} />}
        link={"mailto:ehdnj.001@gmail.com"}
        className="dark:ml-0 ml-4"
      />
      <IconLink
        context="baekj0on1o28"
        icon={
          <Image
            src={theme !== "dark" ? ImgSolved : ImgSolvedDark}
            alt="solved.ac 로고"
            className="w-5 h-5 select-none"
          />
        }
        link={"https://solved.ac/baekj0on1o28"}
        className="dark:ml-6 -ml-2"
      />
      <div className="w-16 2xl:w-full 2xl:h-full 2xl:row-span-3 flex items-center order-1 dark:order-3">
        <div
          className="shadow-purple-500 dark:shadow-yellow-300 shadow-inner rounded-full cursor-pointer"
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          <Image
            src={theme !== "dark" ? ImgLilac : Imgdnjeh}
            alt={
              theme !== "dark"
                ? "프로필 이미지(라일락)"
                : "프로필 이미지(원도)"
            }
            className="z-[-1] relative rounded-full object-contain my-auto select-none pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};

export default ToggleCon;
