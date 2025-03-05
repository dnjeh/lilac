import Link from "next/link";
interface IconLink {
    context: string;
    link: string;
    className?: string;
    children: React.ReactNode;
}
const IconLink = ({context, link, className, children}:IconLink ) => {
  return <Link
    href={link}
    target="_blank"
    className={`items-center gap-4 ${className} order-2`}
  >
    {children}
    {context}
  </Link>;
};

export default IconLink;
