import { LuFlower } from "react-icons/lu";
import { TbMoonStars } from "react-icons/tb";

const ProjectNewInner = () => {
  const ran = Math.floor(Math.random() * 3);
  return (
    <li className="border-[3px] w-full h-[42dvw] xs:h-[24dvw] sm:h-36 rounded-xl xs:rounded-2xl relative border-stone-200 dark:border-zinc-800">
      {" "}
      <div className="absolute left-[calc(50%-8px)] bottom-1 text-stone-300 dark:text-zinc-700">
        {ran === 0 ? <LuFlower /> : ran === 1 ? <TbMoonStars /> : ""}
      </div>
    </li>
  );
};
export default ProjectNewInner;
