"use client"
import { dnjehProjectBanner, ehdnjProjectBanner, lilacProjectBanner } from "./data";
import ProjectNewInner from "./projectNewInner";

const ProjectNewWrap = () => {
  return (
    <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full py-8 px-2 gap-4 z-auto">
      {[...lilacProjectBanner, ...dnjehProjectBanner, ...ehdnjProjectBanner].map((ai, i) => {
        return <ProjectNewInner image={ai.image} project_type={ai.project_type} key={i} />;
      })}
    </ul>
  );
};
export default ProjectNewWrap;
