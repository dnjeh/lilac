"use client"
import { useTheme } from "next-themes";

const SectionHeader = () => {
  const {theme} = useTheme();
  return (
  <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold flex lg:flex-row flex-col w-full lg:items-center items-end">
    <div className="self-start">
      <span>환영해요,&nbsp;</span>
    </div>
    <div className="flex flex-wrap">
      <div>저는 {theme!=="dark"?"프론트엔드":"콘솔 프로그램"} 개발자 김도원이에요
        <span className="text-purple-500 dark:text-yellow-300">.</span></div>
    </div>
  </h2>)
};
export default SectionHeader;
