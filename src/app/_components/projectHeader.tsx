"use client"

import { useTheme } from "next-themes";

const ProjectHeader = () => {
  const { theme } = useTheme();
  return (
    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold flex w-full">
      {theme !== "dark" ? "웹 " : "콘솔 "} 프로젝트들
      <span className="text-purple-500 dark:text-yellow-300">.</span>
    </h3>
  );
};

export default ProjectHeader;
