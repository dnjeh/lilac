"use client";
import Image from "next/image";
import Line from "./_components/line";
import SectionInner from "./_components/sectionInner";
import ImgLilac from "../../public/lilac.jpg";
import ImgSolved from "../../public/solved.svg";
import ImgSolvedDark from "../../public/solved_dark.svg";
import Imgdnjeh from "../../public/dnjeh.png";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import IconLink from "./_components/IconLink";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="mx-auto max-w-screen-2xl lg:mt-24 mt-12 flex flex-col items-center lg:px-24 md:px-16 px-12 font-pretendard">
      <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold flex lg:flex-row flex-col w-full lg:items-center items-end">
        <div className="self-start">
          <span>오,&nbsp;</span>
          <span className="text-purple-500 dark:text-yellow-400">
            {theme === "light" ? "라일락" : "보름달"}
          </span>
        </div>
        <div className="md:block lg:opacity-100 md:opacity-0 hidden bg-gradient-to-r from-purple-500 dark:from-yellow-400 to-slate-950 dark:to-slate-50 flex-1 h-1 mx-4" />
        {theme === "light" ? <div>꽃이 피는 날</div> : <div>月이 뜨는 밤</div>}
        <div>&nbsp;안녕!</div>
      </h2>
      <Line />
      <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold flex lg:flex-row flex-col w-full lg:items-center items-end">
        <div className="self-start">
          <span>환영해요,&nbsp;</span>
        </div>
        <div className="flex flex-wrap">
          <div>저는 김도원</div>
          <div>
            이에요
            <span className="text-purple-500 dark:text-yellow-300">.</span>
          </div>
        </div>
      </h2>
      <section className="w-full mt-4 sm:mt-2 md:mt-10 lg:mt-12 flex flex-row gap-10">
        <div className="flex flex-col gap-10 w-1/2">
          <SectionInner
            context={
            theme==="light"?
            "아름다운 웹은 사용자가 의도한대로 움직이고, 간단하며, 결국 만족스러워 하는 웹이에요. 모든 사람들이 아름다워할 웹을 가꾸고 싶어요."
            :
            "이제는 잘 익숙치 않은 콘솔 응용프로그램을 제작해요. 간단한 생일 축하 프로그램부터, 안전한 편지를 보내는 프로그램까지."
            }
            title={theme==="light"?"웹이 아름답기를 바라요.":"아름다운 콘솔을 그려요."}
          />
          <SectionInner
            context="2022년 여름, 프로그래밍에 불붙은 열정은 아직 식지 않았어요. 1년에 364일, 오늘도 배움을 향해 나아가고 있어요."
            title="끝없는 배움을 추구해요."
          />
        </div>
        <div className="border-slate-950 dark:border-slate-600 border-opacity-20 border-[1px] rounded-full p-12 gap-4 w-1/2 grid grid-rows-3 grid-cols-2 grid-flow-col relative">
          <div className="absolute mt-4 w-full text-center">
            {/*<span className="bg-purple-500 dark:bg-yellow-300 text-white dark:text-slate-700 rounded-full px-3 py-1">
              현재는 {theme === "light" ? "라일락" : "원도"} 모드에요.
            </span>
*/}
          </div>
          {theme === "light" ? (
            <></>
          ) : (
            <>
              <IconLink
                context="dnjeh"
                icon={<FaGithub width={"4rem"} height={"4rem"} />}
                link={"https://github.com/dnjeh"}
              />
              <IconLink
                context="ehdnj.001@gmail.com"
                icon={<IoMdMail width={"4rem"} height={"4rem"} />}
                link={"mailto:ehdnj.001@gmail.com"}
                className="mr-8"
              />
              <IconLink
                context="baekj0on1o28"
                icon={
                  <Image
                    src={theme === "light" ? ImgSolved : ImgSolvedDark}
                    alt="solved.ac 로고"
                    className="w-5 h-5 select-none"
                  />
                }
                link={"https://solved.ac/baekj0on1o28"}
              />
            </>
          )}
          <div className="w-full h-full row-span-3 flex items-center">
            <div
              className="shadow-purple-500 dark:shadow-yellow-300 shadow-inner rounded-full"
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
              }}
            >
              <Image
                src={theme === "light" ? ImgLilac : Imgdnjeh}
                alt={
                  theme === "light"
                    ? "프로필 이미지(라일락)"
                    : "프로필 이미지(원도)"
                }
                className="-z-10 relative rounded-full object-contain my-auto select-none pointer-events-none"
              />
            </div>
          </div>
          {theme === "light" ? (
            <>
              <IconLink
                context="dnjeh"
                icon={<FaGithub width={"4rem"} height={"4rem"} />}
                link={"https://github.com/dnjeh"}
              />
              <IconLink
                context="ehdnj.001@gmail.com"
                icon={<IoMdMail width={"4rem"} height={"4rem"} />}
                link={"mailto:ehdnj.001@gmail.com"}
                className="ml-8"
              />
              <IconLink
                context="baekj0on1o28"
                icon={
                  <Image
                    src={theme === "light" ? ImgSolved : ImgSolvedDark}
                    alt="solved.ac 로고"
                    className="w-5 h-5 select-none"
                  />
                }
                link={"https://solved.ac/baekj0on1o28"}
              />
            </>
          ) : (
            <></>
          )}
        </div>
      </section>
      <Line />
    </div>
  );
}
