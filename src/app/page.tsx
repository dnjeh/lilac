"use client";
import Line from "./_components/line";
import SectionInner from "./_components/sectionInner";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { dnjehList, lilacList } from "./_components/data";
import ProjectInner from "./_components/ProjectInner";
import Header from "./_components/header";
import SectionHeader from "./_components/sectionHeader";
import ToggleCon from "./_components/toggleCon";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="mx-auto max-w-screen-xl lg:mt-24 mt-12 flex flex-col items-center lg:px-24 md:px-16 px-12 font-pretendard">
      <Header />
      <Line id="start" />
      <section>
        <SectionHeader />
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
          <ToggleCon />
        </div>
      </section>
      <Line id="project" />
      <section className="w-full">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold flex w-full">
          {theme === "light" ? "웹 " : "콘솔 "} 프로젝트들
          <span className="text-purple-500 dark:text-yellow-300">.</span>
        </h3>
        <ul className="flex flex-col gap-6 lg:gap-12 lg:mt-8 mt-4">
          {theme === "light"
            ? lilacList.map((a, ai) => (
                <ProjectInner
                  name={a.name}
                  image={a.image}
                  image_alt={a.image_alt}
                  detail={a.detail}
                  detail_image={a.detail_image}
                  detail_image_alt={a.detail_image_alt}
                  key={ai}
                />
              ))
            : dnjehList.map((a, ai) => (
                <ProjectInner
                  name={a.name}
                  image={a.image}
                  image_alt={a.image_alt}
                  detail={a.detail}
                  detail_image={a.detail_image}
                  detail_image_alt={a.detail_image_alt}
                  key={ai}
                />
              ))}
        </ul>
      </section>
      <Line />
      <span className="mb-12 text-base text-slate-950 dark:text-slate-50 opacity-25">
        Last update: 2025.01.27
      </span>
    </div>
  );
}
