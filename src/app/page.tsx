"use client";
import Image from "next/image";
import Line from "./_components/line";
import SectionInner from "./_components/sectionInner";
import ImgLilac from "../../public/lilac.jpg";
import ImgSolved from "../../public/solved.svg";
import ImgSolvedDark from "../../public/solved_dark.svg";
import Imgdnjeh from "../../public/dnjeh.png";
import ImgSpeedat from "../../public/speedat.svg";
import ImgSpeedatGif from "../../public/speedat_calendar.gif";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import IconLink from "./_components/IconLink";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { TbMail } from "react-icons/tb";
import { PiClockCountdownBold } from "react-icons/pi";

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
    <div className="mx-auto max-w-screen-xl lg:mt-24 mt-12 flex flex-col items-center lg:px-24 md:px-16 px-12 font-pretendard">
      <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold flex lg:flex-row flex-col w-full lg:items-center items-end">
        <div className="self-start">
          <span>오,&nbsp;</span>
          <span className="text-purple-500 dark:text-yellow-400">
            {theme === "light" ? "라일락" : "보름달"}
          </span>
        </div>
        <div className="md:block lg:opacity-100 md:opacity-0 hidden bg-gradient-to-r from-purple-500 dark:from-yellow-400 to-slate-950 dark:to-slate-50 flex-1 h-1 mx-4" />
        {theme === "light" ? <div>花이 피는 날</div> : <div>月이 뜨는 밤</div>}
        <div>&nbsp;안녕!</div>
      </h2>
      <Line id="start" />
      <section>
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
        <div className="w-full mt-4 sm:mt-2 md:mt-10 lg:mt-12 flex flex-row gap-10">
          <div className="flex flex-col gap-5 lg:gap-10 xl:w-1/2">
            <SectionInner
              context={
                theme === "light"
                  ? "아름다운 웹은 사용자가 의도한대로 움직이고, 간단하며, 결국 만족스러워 하는 웹이에요. 모든 사람들이 아름다워할 웹을 가꾸고 싶어요."
                  : "이제는 잘 익숙치 않은 콘솔 응용프로그램을 제작해요. 간단한 생일 축하 프로그램부터, 안전한 편지를 보내는 프로그램까지."
              }
              title={
                theme === "light"
                  ? "웹이 아름답기를 바라요."
                  : "아름다운 콘솔을 그려요."
              }
            />
            <SectionInner
              context="2022년 여름, 프로그래밍에 불붙은 열정은 아직 식지 않았어요. 1년에 364일, 오늘도 배움을 향해 나아가고 있어요."
              title="끝없는 배움을 추구해요."
            />
          </div>
          <div
            className="border-slate-950 dark:border-slate-600 border-opacity-20 border-0 2xl:border-[1px] 
        rounded-full p-6 lg:p-8 2xl:p-12 gap-4 2xl:w-1/2 2xl:grid grid-rows-3 grid-cols-2 grid-flow-col
         2xl:relative fixed flex items-center right-0 bottom-0 z-10 "
          >
            <div className="2xl:mt-4 w-full text-center 2xl:absolute 2xl:top-0">
              <span className="bg-purple-500 dark:bg-yellow-300 text-white dark:text-slate-700 rounded-full px-3 py-1 select-none">
                현재는 {theme === "light" ? "라일락" : "원도"} 모드에요.
              </span>
            </div>
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
                  src={theme === "light" ? ImgSolved : ImgSolvedDark}
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
                  src={theme === "light" ? ImgLilac : Imgdnjeh}
                  alt={
                    theme === "light"
                      ? "프로필 이미지(라일락)"
                      : "프로필 이미지(원도)"
                  }
                  className="z-[-1] relative rounded-full object-contain my-auto select-none pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Line />
      <section className="w-full">
        <h3 className="text-3xl sm:text-4xl lg:text-6xl font-bold flex w-full">
          프로젝트들
          <span className="text-purple-500 dark:text-yellow-300">.</span>
        </h3>
        <div className="">
          {theme === "light" ? (
            <ul className="flex flex-col gap-6 lg:gap-12 lg:mt-8 mt-4">
              <li>
                <div className="flex gap-10">
                  <div className="flex-1">
                    <h5 className="flex text-2xl sm:text-3xl lg:text-4xl items-center font-semibold gap-3">
                      <div>
                        Speedat
                        <span className="text-purple-500 dark:text-yellow-300">
                          .
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div>( </div>
                        <Image
                          src={ImgSpeedat}
                          alt="'스피닷 로고"
                          className="w-20"
                        />
                        <div> )</div>
                      </div>
                    </h5>
                    <ul className="text-2xl mt-3 list-disc marker:text-purple-500 pl-6">
                      <li>
                        학교 비공식 커뮤니티 사이트 스피닷에서 캘린더, 급식,
                        시간표 컴포넌트를 만들었어요.
                      </li>
                      <li className="mt-1 lg:mt-2">
                        애니메이션을 위해 useRef 훅을 이용하여 캘린더의
                        자연스러운 움직임을 구현했어요.
                      </li>
                      <li className="mt-1 lg:mt-2">
                        교육청 OpenApi를 통해 급식, 시간표 정보를 next.js 내에서
                        받아왔어요.
                      </li>
                      <li className="mt-1 lg:mt-2">
                        pnpm, typescript, next.js, tailwindcss 등의 기술을
                        사용했어요.
                      </li>
                    </ul>
                  </div>
                  <div className="hidden md:block h-80 px-10 border-2 rounded-lg">
                    <Image
                      src={ImgSpeedatGif}
                      alt="스피닷 캘린더 시연 영상"
                      className="h-full w-full"
                    ></Image>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex gap-10">
                  <div className="flex-1">
                    <h5 className="flex text-2xl sm:text-3xl lg:text-4xl items-center font-semibold gap-3">
                      <div>
                        Introduce School Club
                        <span className="text-purple-500 dark:text-yellow-300">
                          .
                        </span>
                      </div>
                    </h5>
                    <ul className="text-2xl mt-3 list-disc marker:text-purple-500 pl-6">
                      <li>
                        학교 비공식 커뮤니티 사이트 스피닷에서 캘린더, 급식,
                        시간표 컴포넌트를 만들었어요.
                      </li>
                      <li className="mt-1 lg:mt-2">
                        애니메이션을 위해 useRef 훅을 이용하여 캘린더의
                        자연스러운 움직임을 구현했어요.
                      </li>
                      <li className="mt-1 lg:mt-2">
                        교육청 OpenApi를 통해 급식, 시간표 정보를 next.js 내에서
                        받아왔어요.
                      </li>
                      <li className="mt-1 lg:mt-2">
                        pnpm, typescript, next.js, tailwindcss 등의 기술을
                        사용했어요.
                      </li>
                    </ul>
                  </div>
                  <div className="hidden md:block h-full">
                    <Image
                      src={ImgSpeedatGif}
                      alt="스피닷 캘린더 시연 영상"
                      className="object-contain my-auto"
                    ></Image>
                  </div>
                </div>
              </li>
            </ul>
          ) : (
            <ul className="flex flex-col gap-6 lg:gap-12 lg:mt-8 mt-4">
              <li>
                <h5 className="flex text-2xl sm:text-3xl lg:text-4xl items-center font-semibold gap-3">
                  <div>
                    LimitLetter
                    <span className="text-purple-500 dark:text-yellow-300">
                      .
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div>( </div>
                    <div className="relative w-full flex items-center justify-center">
                      <TbMail className="opacity-0" />
                      <TbMail className="absolute z-[-1]" />
                      <PiClockCountdownBold className="absolute h-full w-3 mx z-[-1]" />
                    </div>
                    <div> )</div>
                  </div>
                </h5>
              </li>
            </ul>
          )}
        </div>
      </section>
      <Line />
      <span className="mb-12 text-lg text-slate-950 dark:text-slate-50 opacity-25">
        Last update: 2025.01.26
      </span>
    </div>
  );
}
