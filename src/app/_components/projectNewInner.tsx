"use client"
import { useTheme } from "next-themes";
import Link from "next/link";
import { LuFlower } from "react-icons/lu";
import { TbMoonStars } from "react-icons/tb";

const ProjectNewInner = ({image, dark_image, project_type, key2}: ProjectNewBannerType) => {
  const {theme} = useTheme();
  return (
    <Link href={`#prj${key2}`} className="w-full h-full">
    <li className="border-[3px] w-full h-[42dvw] xs:h-[24dvw] sm:h-36 rounded-xl xs:rounded-2xl shadow-inner shadow-stone-200 dark:shadow-zinc-800 relative border-stone-200 dark:border-zinc-800 bg-no-repeat bg-center bg-[length:calc(60%)] hover:bg-[length:calc(70%)] cursor-pointer"
      style={{
        backgroundImage: `url(${(theme!=="dark"||!!!dark_image?image.src:dark_image.src)})`,
        transition: "background-size .3s ease"
      }}
    >
      {" "}
      <div className="absolute left-[calc(50%-8px)] bottom-1 text-stone-300 dark:text-zinc-700">
        {project_type === "web" ? <LuFlower /> : project_type === "con" ? <TbMoonStars /> : ""}
      </div>
    </li>
    </Link>
  );
};
export default ProjectNewInner;
