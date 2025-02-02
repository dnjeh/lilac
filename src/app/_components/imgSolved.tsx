import { useTheme } from "next-themes"
import Image from "next/image";
import RealImgSolved from "../../../public/solved.svg";
import ImgSolvedDark from "../../../public/solved_dark.svg";

const ImgSolved = () => {
    const {theme} = useTheme();
    return <Image
    src={theme !== "dark" ? RealImgSolved : ImgSolvedDark}
    alt="solved.ac 로고"
    className="w-5 h-5 select-none"
  />
}

export default ImgSolved;