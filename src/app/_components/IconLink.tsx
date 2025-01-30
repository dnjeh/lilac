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
    className={`items-center gap-4 ${className} 2xl:flex hidden order-2`}
  >
    {icon}
    {context}
  </Link>;
};

export default IconLink;
