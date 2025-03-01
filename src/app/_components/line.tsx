"use client"
import { useTheme } from "next-themes";
import { LuFlower } from "react-icons/lu";
import { TbMoonStars } from "react-icons/tb";
interface LineProps {
  id?:string
}
const Line = ({id}:LineProps) => {
  const { theme } = useTheme();
  return <div className="w-full flex items-center text-stone-300 dark:text-zinc-800 my-4 sm:my-2 md:my-10 lg:my-12" id={id}>
    <hr className="flex-1 border-t-1 border-t-stone-300 dark:border-t-zinc-800"/>
    {
      theme==="light"?
      <LuFlower />
      :
      <TbMoonStars />
    }
    <hr className="flex-1 border-t-1 border-t-stone-300 dark:border-t-zinc-800"/>
  </div>;
};

export default Line;
