import ImgSpeedat from "../../../public/speedat.webp";
import ImgSpeedatGif from "../../../public/speedat_calendar.webp";
import ImgISCGif from "../../../public/isc1200.webp";
import ImgLL from "../../../public/limitletter.png";
import ImgLLGif from "../../../public/ll2.gif";
import ImgBSMGif from "../../../public/bsm.gif";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import ImgSolved from "./imgSolved";
import { getStreak } from "@/lib/utils";
export const lilacProjectList: ProjectType[] = [
  {
    detail: [
      "학교 비공식 커뮤니티 사이트 스피닷에서 캘린더, 급식, 시간표 컴포넌트를 만들었어요.",
      "애니메이션을 위해 useRef 훅을 이용하여 캘린더의 자연스러운 움직임을 구현했어요.",
      "교육청 OpenApi를 통해 급식, 시간표 정보를 next.js 내에서 받아왔어요.",
      "pnpm, typescript, next.js, tailwindcss 등의 기술을 사용했어요.",
    ],
    detail_image: ImgSpeedatGif,
    detail_image_alt: "스피닷 캘린더 시연 영상",
    name: "Speedat",
    image: ImgSpeedat,
    image_alt: "스피닷 로고",
  },
  {
    detail: [
      "학교 동아리 소개 사이트 Introduce School Club에서 등록 페이지를 만들었어요.",
      "이미지 추가 기능을 구현하면서 그와 관련된 여러 메소드들을 써보는 좋은 기회였어요.",
      "이미지가 들어간 form을 보다 수월하게 처리하기 위해 FormData와 일반적인 POST을 동시에 활용했어요.",
      "yarn, typescript, next.js, tailwindcss, axios 등의 기술을 사용했어요.",
    ],
    detail_image: ImgISCGif,
    detail_image_alt: "introduce school club post 시연 영상",
    name: "Introduce School Club",
  },
];
export const dnjehProjectList: ProjectType[] = [
  {
    detail: [
      "편지를 암호화하고 유효기간을 설정하여 주고 받을 수 있는 프로그램이에요.",
      "믿을 수 없는 메신저들을 대신하여 소통하기 위해 손수 만들어졌어요.",
      "1년동안 꾸준히 쓰이며 피드백을 모아 계절마다 업데이트 되었어요.",
      "이용자가 없어져 현재는 업데이트가 안 되고 있어요.",
      "conio.h, io.h, errno.h, windows.h 등의 라이브러리를 사용했어요.",
    ],
    detail_image: ImgLLGif,
    detail_image_alt: "LimitLetter 스크린샷",
    name: "LimitLetter",
    image: ImgLL,
    image_alt: "LimitLetter 로고",
  },
  {
    detail: [
      "행운의 이름을 뽑기 위해 특별히 제작된 프로그램이에요.",
      "부드러운 움직임을 위해 더블 버퍼링 기법을 이용했어요.",
      "레버의 움직임과 슬롯머신의 움직임을 개별적으로 제어하기 위해 스레드를 썼어요.",
      "conio.h, errno.h, process.h 등의 라이브러리를 사용했어요.",
    ],
    detail_image: ImgBSMGif,
    detail_image_alt: "BigSlotMachine 스크린샷",
    name: "BigSlotMachine",
  },
];

export const itemList: ItemType[] = [
  {
    context: "dnjeh",
    icon: <FaGithub width={"4rem"} height={"4rem"} />,
    link: "https://github.com/dnjeh",
    className: "dark:ml-6 -ml-2",
  },
  {
    context: "ehdnj.001@gmail.com",
    icon: <IoMdMail width={"4rem"} height={"4rem"} />,
    link: "mailto:ehdnj.001@gmail.com",
    className: "dark:ml-0 ml-4",
  },
  {
    context: "baekj0on1o28",
    icon: <ImgSolved />,
    link: "https://solved.ac/baekj0on1o28",
    className: "dark:ml-6 -ml-2",
  },
];
const streak = getStreak();
const commonTitle: TitleType = {
  context: `2022년 여름, 프로그래밍에 불붙은 열정은 아직 식지 않았어요. 오늘로 ${streak}일째, 매일매일 배움을 향해 문제를 풀며 나아가고 있어요.`,
  title: "끝없는 배움을 추구해요.",
};
export const dnjehTitleList: TitleType[] = [
  {
    context:
      "이제는 잘 익숙치 않은 콘솔 응용프로그램을 제작해요. 간단한 생일 축하 프로그램부터, 안전한 편지를 보내는 프로그램까지.",
    title: "미려한 콘솔을 그려요.",
  },
  commonTitle,
];
export const lilacTitleList: TitleType[] = [
  {
    context:
      "아름다운 웹은 사용자가 의도한대로 움직이고, 간단하며, 결국 만족스러워 하는 웹이에요. 모든 사람들이 아름다워할 웹을 가꾸고 싶어요.",
    title: "웹이 아름답기를 바라요.",
  },
  commonTitle,
];
