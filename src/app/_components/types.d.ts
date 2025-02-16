type ProjectType = {
  name: string;
  image?: StaticImageData;
  image_alt?: string;
  detail: string[];
  detail_image: StaticImageData;
  detail_image_alt: string;
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
