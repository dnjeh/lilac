"use client"
import { useTheme } from "next-themes";
import { LuFlower } from "react-icons/lu";
import { TbMoonStars } from "react-icons/tb";
interface LineProps {
  id?:string
}
const Line = ({id}:LineProps) => {
  const { theme } = useTheme();
  return <div className="w-full flex items-center opacity-10 my-4 sm:my-2 md:my-10 lg:my-12" id={id}>
    <hr className="flex-1 border-t-1 border-t-slate-950 dark:border-t-slate-50"/>
    {
      theme==="light"?
      <LuFlower />
      :
      <TbMoonStars />
    }
    <hr className="flex-1 border-t-1 border-t-slate-950 dark:border-t-slate-50"/>
  </div>;
};

export default Line;
