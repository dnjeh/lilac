"use client";
import { useTheme } from "next-themes";
import ProjectInner from "./projectInner";
import { dnjehProjectList, lilacProjectList } from "./data";

const ProjectWrap = () => {
  const { theme } = useTheme();
  return (
    <ul className="flex flex-col gap-6 lg:gap-12 lg:mt-8 mt-4">
      {(theme !== "dark" ? lilacProjectList : dnjehProjectList).map((a, ai) => {
        return (
          <ProjectInner
            name={a.name}
            image={theme!=="dark"||!!!a.dark_image?a.image:a.dark_image}
            image_alt={a.image_alt}
            detail={a.detail}
            detail_image={a.detail_image}
            detail_image_alt={a.detail_image_alt}
            key={ai}
            key2={a.key2}
          />
        );
      })}
    </ul>
  );
};
export default ProjectWrap;
