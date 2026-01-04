"use client";
import { useTheme } from "next-themes";
import Image, { StaticImageData } from "next/image";

export const CompanyInnerImage = ({
  image,
  dark_image,
  name,
}: {
  image: StaticImageData;
  dark_image: StaticImageData;
  name: string;
}) => {
  const { theme } = useTheme();
  return <Image 
    src={theme==="dark"? dark_image:image}
    alt={name}
    className="object-contain rounded-lg w-full h-11"
  />;
};
