import { useTheme } from "next-themes"
import RealImgSolved  from "@/app/_components/svg/solved.svg";
import ImgSolvedDark  from "@/app/_components/svg/solved_dark.svg";

const ImgSolved = () => {
    const {theme} = useTheme();
    if(theme !== "dark") return <RealImgSolved width={"1rem"} height={"1rem"}/>
    else return <ImgSolvedDark width={"1rem"} height={"1rem"}/>
}

export default ImgSolved;
