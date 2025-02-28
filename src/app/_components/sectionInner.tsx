interface SectionInnerProps {
  title: string;
  context: string;
}
import { FaPlus } from "react-icons/fa6";
const SectionInner = ({ title, context }: SectionInnerProps) => {
  return (
    <div className="flex-1 relative">
      <div className="relative">
        <div className="-z-10 absolute h-[110%] w-[110%] rounded-2xl hover:bg-purple-200 dark:hover:bg-opacity-[4%] dark:hover:bg-yellow-50" />
        <h3 className="font-semibold text-xl md:text-2xl lg:text-3xl md:mb-2 relative">
          {title}
          <div className="hidden p-1 right-5 top-0 m-1 text-purple-300 dark:text-yellow-100 dark:opacity-20 xl:block absolute">
            <FaPlus className="h-4 w-4" />
          </div>
        </h3>
        <p className="text-xl font-normal md:text-2xl">{context}</p>
      </div>
    </div>
  );
};

export default SectionInner;
