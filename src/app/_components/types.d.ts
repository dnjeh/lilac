type ProjectType = {
  name: string;
  image?: StaticImageData;
  image_alt?: string;
  detail: string[];
  detail_image: StaticImageData;
  detail_image_alt: string;
}

type ProjectStringType = "web" | "con" | "etc";

type ProjectNewBannerType = {
  image: StaticImageData;
  dark_image?: StaticImageData;
  project_type: ProjectStringType;
}

type ItemType = {
  context: string;
  icon: React.ReactNode;
  link: string;
  className: string;
}

type TitleType = {
  context: string;
  title: string;
}
