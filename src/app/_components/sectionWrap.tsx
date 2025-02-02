"use client"
import { useTheme } from "next-themes";
import SectionInner from "./sectionInner";
import { lilacTitleList, dnjehTitleList } from "./data";

const SectionWrap = () => {
  const {theme} = useTheme();
  return (
    <div className="flex flex-col gap-5 lg:gap-10 xl:w-1/2">
      {
        (theme !== "dark" ? lilacTitleList : dnjehTitleList ).map((ai, i)=>(
          <SectionInner context={ai.context} title={ai.title} key={i}/>
        ))
      }
    </div>
  );
};

export default SectionWrap;