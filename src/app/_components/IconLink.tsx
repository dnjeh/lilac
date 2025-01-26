import Link from "next/link";
import { JSX } from "react";
interface IconLink {
    icon: JSX.Element;
    context: string;
    link: string;
    className?: string
}
const IconLink = ({icon, context, link, className}:IconLink ) => {
  return <Link
    href={link}
    className={`flex items-center gap-4 text-xl ${className} dark:justify-end`}
  >
    {icon}
    {context}
  </Link>;
};

export default IconLink;
