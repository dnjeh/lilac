"use client"
import { useTheme } from "next-themes";
import { dnjehProjectBanner, ehdnjProjectBanner, lilacProjectBanner } from "./data";
import ProjectNewInner from "./projectNewInner";

const ProjectNewWrap = () => {
  const { theme } = useTheme();
  let list;
  if(theme !== "dark") list=[...lilacProjectBanner, ...ehdnjProjectBanner];
  else list=[...dnjehProjectBanner, ...ehdnjProjectBanner];
  return (
    <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full py-8 px-2 gap-4 z-auto">
      {list.map((ai, i) => {
        return <ProjectNewInner image={ai.image} dark_image={ai.dark_image} project_type={ai.project_type} key={i} key2={ai.key2} />;
      })}
    </ul>
  );
};
export default ProjectNewWrap;
