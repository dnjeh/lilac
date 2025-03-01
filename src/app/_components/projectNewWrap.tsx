import ProjectNewInner from "./projectNewInner";

const ProjectNewWrap = () => {
  return (
    <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full py-8 px-2 gap-4 z-auto">
      {['','','','','','','','',''].map((ai, i) => {
        return <ProjectNewInner key={i} />;
      })}
    </ul>
  );
};
export default ProjectNewWrap;
