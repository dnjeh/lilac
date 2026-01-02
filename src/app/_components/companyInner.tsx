import Image from "next/image";
import React from "react";

interface CompanyInnerProps {
  context: CompanyType;
}

const CompanyInner = ({ context }: CompanyInnerProps) => {
  return (
    <li id={"com" + context.key2}>
      <div className="flex gap-10 flex-row lg:flex-row">
        <div className="hidden md:flex flex-col items-end justify-start w-72 pl-24">
          <Image
            src={context.image}
            alt={context.name}
            className="object-contain rounded-lg w-full h-11"
          ></Image>
          <h2 className="sm:text-lg text-base text-slate-700 dark:text-zinc-400">
            {context.affiliation} 소속
          </h2>
          <h3 className="text-slate-700 dark:text-zinc-400">
            {context.timestemp_start} - {context.timestemp_end}
          </h3>
        </div>
        <div className="flex-1 my-auto">
          {context.detail.map((ai, i) => (
            <React.Fragment key={i}>
              <h5 className="flex text-2xl sm:text-3xl lg:text-4xl items-center font-semibold gap-3">
                <div>
                  {ai.title}
                  <span className="text-purple-500 dark:text-yellow-300">
                    .
                  </span>
                </div>
              </h5>

              {ai.detail.map((ai, i) => (
                <ul
                  key={i}
                  className="sm:text-2xl text-xl flex flex-col gap-1 lg:gap-2 mt-3 list-disc marker:text-purple-500 dark:marker:text-yellow-300 pl-6"
                >
                  <li key={i}>{ai}</li>
                </ul>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </li>
  );
};

export default CompanyInner;
