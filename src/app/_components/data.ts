import ImgSpeedat from "../../../public/speedat.svg";
import ImgSpeedatGif from "../../../public/speedat_calendar.gif";
import ImgISCGif from "../../../public/introduceschoolclub.gif"
export const lilacList: ProjectType[] = [
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
