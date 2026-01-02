import { cn } from "@/lib/utils";
import Image from "next/image";

interface ActivityInnerProps {
  context: ActivityType;
  isRight: boolean;
}

const ActivityInner = ({ context, isRight }: ActivityInnerProps) => {
  return (
    <li id={"act" + context.key2}>
      <div className="flex gap-10 flex-col-reverse lg:flex-row">
        <div className="flex-1 order-2 my-auto">
          <h5 className="flex text-2xl sm:text-3xl lg:text-4xl items-center font-semibold gap-3">
            <div>
              {context.name}
              <span className="text-purple-500 dark:text-yellow-300">.</span>
            </div>
          </h5>
          <h3 className="text-slate-700 dark:text-zinc-400">
            : {context.host}, {context.timestemp_start} - {context.timestemp_end}
          </h3>
          <ul className="sm:text-2xl text-xl flex flex-col gap-1 lg:gap-2 mt-3 list-disc marker:text-purple-500 dark:marker:text-yellow-300 pl-6">
            {context.detail.map((ai, i) => (
              <li key={i}>{ai}</li>
            ))}
          </ul>
        </div>
        <div className={cn("hidden md:flex items-center justify-center h-80 p-1 border-[1px] dark:border-black rounded-lg dark:bg-[#0C0C0C] select-none order-2",
          isRight ? "lg:order-1" : "order-3"
        )}>
          <Image
            src={context.detail_image}
            alt={context.detail_image_alt}
            className="object-contain rounded-lg w-full h-full"
          ></Image>
        </div>
      </div>
    </li>
  );
};

export default ActivityInner;
