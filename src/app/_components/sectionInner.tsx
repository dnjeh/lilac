interface SectionInnerProps {
  title: string;
  context: string;
  src: string;
}
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
const SectionInner = ({ title, context, src }: SectionInnerProps) => {
  return (
    <div className="flex-1 relative">
        <h3 className="font-semibold text-xl md:text-2xl lg:text-3xl md:mb-2 relative">
          {title}
          <Link href={src}>
          <div className="cursor-pointer hidden p-3 right-5 top-0 -m-1 hover:-mt-2 transition-all duration-500 text-purple-300 dark:text-yellow-300 dark:opacity-20 xl:block absolute hover:bg-purple-100 dark:hover:bg-yellow-100 rounded-full">
            <FaPlus className="h-4 w-4" />
          </div>
          </Link>
        </h3>
        <p className="text-xl font-normal md:text-2xl">{context}</p>
    </div>
  );
};

export default SectionInner;
