"use client";

import ProjectHeader from "./projectHeader";
import ProjectNewWrap from "./projectNewWrap";
import ProjectWrap from "./projectWrap";
import Section from "./section";

const ProjectRealWrap = () => {
  return (
    <Section id="project">
      <ProjectHeader />
      <ProjectNewWrap />
      <ProjectWrap />
    </Section>
  );
};

export default ProjectRealWrap;
