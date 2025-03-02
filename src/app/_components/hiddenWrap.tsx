"use client"
import { cn } from "@/lib/utils";
import { throttle } from "lodash";
import { useEffect, useMemo, useState } from "react";

const HiddenWrap = ({ children }: { children: React.ReactNode }) => {
  const [vis, isVis] = useState(false);
  const handleIsVisible = useMemo(
    () =>
      throttle(() => {
        const { scrollY, innerWidth } = window;
        isVis(scrollY > 0 || innerWidth < 1280);
      }, 100),
    []
  );
  useEffect(() => {
    window.addEventListener("scroll", handleIsVisible);
    window.addEventListener("resize", handleIsVisible);
    return () => {
      window.removeEventListener("scroll", handleIsVisible);
      window.removeEventListener("resize", handleIsVisible);
    };
  }, [handleIsVisible]);
  return <div className={cn("z-10 opacity-0 transition-opacity duration-300 w-full h-full flex flex-col items-center", vis && "opacity-100")}>{children}</div>;
};

export default HiddenWrap;
