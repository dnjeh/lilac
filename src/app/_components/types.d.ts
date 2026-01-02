type ProjectType = {
  name: string;
  image?: StaticImageData;
  dark_image?: StaticImageData;
  image_alt?: string;
  detail: string[];
  detail_image: StaticImageData;
  detail_image_alt: string;
  key2: number;
}

type ActivityType = {
  name: string;
  timestemp_start: string;
  timestemp_end: string;
  detail: string[];
  detail_image: StaticImageData;
  detail_image_alt: string;
  key2: number;
  host: string
}

type CompanyDetailType = {
  title: string;
  detail: string[];
}

type CompanyType = {
  name: string;
  image?: StaticImageData;
  affiliation: string;
  timestemp_start: string;
  timestemp_end: string;
  detail: CompanyDetailType[];
  key2: number;
}

type ProjectStringType = "web" | "con" | "etc";

type ProjectNewBannerType = {
  image: StaticImageData;
  dark_image?: StaticImageData;
  project_type: ProjectStringType;
  key2: number;
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
  src: string;
}
