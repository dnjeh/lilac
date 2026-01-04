import Image from "next/image";


const ProjectInner = ({
  detail,
  detail_image,
  detail_image_alt,
  image,
  image_alt,
  name,
  key2,
}: ProjectType) => {
  return (
    <li id={"prj"+key2}>
      <div className="flex gap-10">
        <div className="flex-1">
          <h5 className="flex text-2xl sm:text-3xl lg:text-4xl items-center font-semibold gap-3">
            <div>
              {name}
              <span className="text-purple-500 dark:text-yellow-300">.</span>
            </div>
            {image && image_alt ? (
              <div className="flex items-center">
                <div>( </div>
                <Image src={image} alt={image_alt} className="h-8 object-contain max-w-20" />
                <div> )</div>
              </div>
            ) : (
              <></>
            )}
          </h5>
          <ul className="sm:text-2xl text-xl flex flex-col gap-1 lg:gap-2 mt-3 list-disc marker:text-purple-500 dark:marker:text-yellow-300 pl-6">
            {detail.map((ai, i) => (
              <li key={i}>{ai}</li>
            ))}
          </ul>
        </div>
        <div className="hidden md:flex items-center justify-center h-72 w-72 p-4 border-[1px] dark:border-black rounded-lg dark:bg-[#0C0C0C] select-none">
          <Image
            src={detail_image}
            alt={detail_image_alt}
            className="object-contain rounded-lg w-full h-full"
            loading="lazy"
          ></Image>
        </div>
      </div>
    </li>
  );
};

export default ProjectInner;
