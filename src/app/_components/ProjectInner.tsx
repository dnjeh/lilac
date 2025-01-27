import Image, { StaticImageData } from "next/image";

interface ProjectInnerProps {
  name: string;
  image?: StaticImageData;
  image_alt?: string;
  detail: string[];
  detail_image: StaticImageData;
  detail_image_alt: string;
}

const ProjectInner = ({
  detail,
  detail_image,
  detail_image_alt,
  image,
  image_alt,
  name,
}: ProjectInnerProps) => {
  return (
    <li>
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
                <Image src={image} alt={image_alt} className="w-20" />
                <div> )</div>
              </div>
            ) : (
              <></>
            )}
          </h5>
          <ul className="sm:text-2xl text-xl flex flex-col gap-1 lg:gap-2 mt-3 list-disc marker:text-purple-500 pl-6">
            {detail.map((ai, i) => (
              <li key={i}>{ai}</li>
            ))}
          </ul>
        </div>
        <div className="hidden md:flex items-center justify-center h-80 w-80 p-4 border-2 rounded-lg">
          <Image
            src={detail_image}
            alt={detail_image_alt}
            className="object-contain rounded-lg w-full h-full"
          ></Image>
        </div>
      </div>
    </li>
  );
};

export default ProjectInner;
