import ImgRinorbit from "../../../public/rinorbit.webp";
import ImgDarkRinorbit from "../../../public/rinorbit_white.webp";
import ImgSpeedat from "../../../public/speedat.webp";
import ImgIsc  from "../../../public/iscfinal.webp";
import ImgPs  from "../../../public/project_star.webp";
import ImgPsg  from "../../../public/project_starg.webp";
import ImgRC  from "../../../public/rgbcube.webp";
import ImgKT  from "../../../public/kt.webp";
import ImgNYPC  from "../../../public/nypc.webp";
import ImgRCwebp  from "../../../public/rgbcubeg.webp";
import ImgLLwebp  from "../../../public/ll.webp";
import ImgSolvedimg  from "../../../public/solved.webp";
import ImgLLdark  from "../../../public/lldark.webp";
import ImgRCdark  from "../../../public/rgbcubedark.webp";
import ImgBSM  from "../../../public/bsm.webp";
import ImgAD  from "../../../public/ad.webp";
import ImgBSMdark  from "../../../public/bsmdark.webp";
import ImgSpeedatGif from "../../../public/speedat_calendar.webp";
import ImgISCGif from "../../../public/isc1200.webp";
import ImgLLGif from "../../../public/ll2.gif";
import ImgBSMGif from "../../../public/bsm.gif";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import ImgSolved from "./imgSolved";
import { getStreak } from "@/lib/utils";

export const CompanyList: CompanyType[] = [
  {
    name: "주식회사리노빗",
    image: ImgRinorbit,
    dark_image: ImgDarkRinorbit,
    affiliation: "연구개발팀",
    timestemp_start: "2025.04.01",
    timestemp_end: "?",
    detail: [
      {
        title: "기기 통합 제어 툴 개발",
        detail: [
          "기기의 카메라와 XYZ스테이지를 제어하기 위해 관리자용 툴을 만들었어요.",
          "다양한 Api와 GUI 프레임워크를 엮는 복잡한 작업이였어요.",
          "기술이 여러 개고 또 처음이기도 했지만, AI와 공식문서 덕에 완성했어요.",
          "사용 기술: Qt, GenICam, fcntl.h, cmake 등"
        ]
      },
      {
        title: "기기 잔존 버그 해결",
        detail: [
          "그 동안 알고있었지만 끝내 해결하지 못했던 버그들을 고쳤어요.",
          "로직 자체부터 문제였기도, 공식문서가 잘못되기도 했지만 무사히 해결했어요.",
          "고친 후에는 문서를 남겨 다시는 이런 일이 발생하지 않도록 노력했어요.",
        ]
      },
      {
        title: "그 외",
        detail: [
          "기본적으로 C++을 통해 모터, 펌웨어를 제어하는 일을 맡았어요.",
          "프로세스의 전체적인 흐름을 파악해 순서도로 정리하기도 했었어요.", 
          "대표님의 손발이 되어 기기의 속도를 끌어올린 날은 지금도 새록새록해요.",
        ]
      },
    ],
    key2: 1,
  }
]

export const lilacProjectList: ProjectType[] = [
  {
    detail: [
      "학교 비공식 커뮤니티 스피닷에서 캘린더, 급식, 시간표 컴포넌트를 만들었어요.",
      "useRef 훅을 이용하여 캘린더의 자연스러운 움직임을 구현했어요.",
      "교육청 OpenApi를 통해 급식, 시간표 정보를 받아왔어요.",
      "사용 기술: pnpm, typescript, next.js, tailwindcss 등",
    ],
    detail_image: ImgSpeedatGif,
    detail_image_alt: "스피닷 캘린더 시연 영상",
    name: "Speedat",
    image: ImgSpeedat,
    image_alt: "스피닷 로고",
    key2: 1,
  },
  {
    detail: [
      "동아리 소개 사이트 Introduce School Club에서 등록 페이지를 만들었어요.",
      "이미지 추가 기능을 구현하면서 여러 메소드들을 써보는 프로젝트였어요.",
      "이미지가 들어간 form을 처리하기 위해 Ajax와 POST을 동시에 활용했어요.",
      "사용 기술: yarn, typescript, next.js, tailwindcss, axios 등",
    ],
    detail_image: ImgISCGif,
    detail_image_alt: "introduce school club post 시연 영상",
    name: "Introduce School Club",
    image: ImgIsc,
    image_alt: "Introduce School Club 로고",
    key2: 2,
  },
  {
    detail: [
      "게임 도우미 사이트 Project Star에서 FE 엔지니어이자 PM을 맡았어요.",
      "1월 8일 배포를 목표로 개발 및 개선해나가고 있어요.",
      "기본적인 디자인을 토대로 AI를 활용하여 빠른 퍼블리싱을 도모했어요.",
      "복잡한 기능을 AI와 같이 학습하며 성장할 수 있는 좋은 기회였어요.",
      "사용 기술: typescript, next.js, tailwindcss, motion, zustand, pako 등",
    ],
    detail_image: ImgPsg,
    detail_image_alt: "Project star 미완 시연 영상",
    name: "Project Star",
    image: ImgPs,
    image_alt: "Project star 로고",
    key2: 3,
  },
  {
    detail: [
      "4인이 협동하여 만들었던 졸업작품이고, 조장으로서 코딩과 회로를 맡았어요.",
      "하드웨어를 제대로 다뤄본 첫 작품이였지만, 그 덕에 큰 발걸음을 내딛었어요.",
      "프로젝트를 진행하면서 수많은 문제가 발생했지만, 결국 무사히 출품하여 졸업작품 발표회에서 은상을 수상하였어요.",
      "사용 기술: SPI, Bluetooth, numpy, matplotlib, tkinter, C++, Java 등",
    ],
    detail_image: ImgRCwebp,
    detail_image_alt: "RGB LED cube 스크린샷",
    name: "RGB LED cube",
    image: ImgRC,
    dark_image: ImgRCdark,
    image_alt: "RGB LED cube 로고",
    key2: 999,
  },
];
export const dnjehProjectList: ProjectType[] = [
  {
    detail: [
      "편지를 암호화하고 유효기간을 설정하여 주고 받을 수 있는 프로그램이에요.",
      "믿을 수 없는 메신저들을 대신하여 소통하기 위해 손수 만들어졌어요.",
      "1년동안 꾸준히 쓰이며 피드백을 모아 계절마다 업데이트 되었어요.",
      "라이브러리: conio.h, io.h, errno.h, windows.h 등",
    ],
    detail_image: ImgLLGif,
    detail_image_alt: "LimitLetter 스크린샷",
    name: "LimitLetter",
    image: ImgLLdark,
    image_alt: "LimitLetter 로고",
    key2: 3,
  },
  {
    detail: [
      "행운의 이름을 뽑기 위해 특별히 제작된 프로그램이에요.",
      "부드러운 움직임을 위해 더블 버퍼링 기법을 이용했어요.",
      "각 부분의 움직임들을 개별적으로 제어하기 위해 스레드를 썼어요.",
      "리소스의 확장성을 위해서 외부에서 텍스트 글꼴을 불러오도록 설계했어요.",
      "라이브러리: conio.h, errno.h, process.h 등",
    ],
    detail_image: ImgBSMGif,
    detail_image_alt: "BigSlotMachine 스크린샷",
    name: "BigSlotMachine",
    image: ImgBSMdark,
    image_alt: "BigSlotMachine 로고",
    key2: 4,
  },
  {
    detail: [
      "전력 부족 문제: 아두이노 우노에서 공급되는 전력으로 큐브를 감당할 수 없어 파워 서플라이로 교체하였고, 이후 어뎁터로 안정화 시켰어요.",
      "LED 불량 문제: LED에 불량이 발생하여 핀셋으로 교체하였어요.",
      "합선 예방: 미래를 대비하여 큐브와 전선 사이를 고무로 감싸주었어요.",
      "신호 교란 문제: 배선 미스로 인해 SPI 통신이 고질적으로 불안정하게 되었었고, 오실로스코프로 발생 위치를 확인한 뒤 무사히 해결했어요.",
    ],
    detail_image: ImgRCwebp,
    detail_image_alt: "RGB LED cube 스크린샷",
    name: "RGB LED cube - 트러블슈팅",
    image: ImgRC,
    dark_image: ImgRCdark,
    image_alt: "RGB LED cube 로고",
    key2: 999,
  },
];

export const ActivityList: ActivityType[] = [
  {
    detail: [
      "10주간 진행되는 현장실습에서 SoC 엔지니어의 PI, PD 과정을 수료했어요.",
      "또한 처음으로 교육받는 리눅스의 시험에서 귀사기준 유일한 만점을 받았어요.",
      "10주동안 반복되는 교육과 시험으로, 회사생활을 어느정도 익힐 수 있었던 귀중한 경험이였어요.",
    ],
    detail_image: ImgAD,
    detail_image_alt: "ADTechnology 산학현장실습 스크린샷",
    name: "ADTechnology 산학현장실습",
    key2: 1,
    timestemp_start: "2024.10.07",
    timestemp_end: "2024.12.13",
    host: "(주)에이디테크놀로지"
  },
  {
    detail: [
      "이틀간 진행되었던 AICE Associate를 취득하기 위한 교육이였어요.",
      "시험 당일, 과제를 완성해냈고 그 결과 자격증을 취득했어요.",
      "아주 빠른 템포로 진행되는 강의를 듣는 능력을 얻을 수 있었던 고마운 이틀이였어요.",
    ],
    detail_image: ImgKT,
    detail_image_alt: "KT 인공지능 모델링 사진",
    name: "KT 인공지능 모델링 교육",
    key2: 2,
    timestemp_start: "2023.08.08",
    timestemp_end: "2023.08.09",
    host: "케이티"
  },
  {
    detail: [
      "넥슨이 주최하는 청소년을 위한 프로그래밍 대회에 3년 내내 출전했어요.",
      "매번 본선까진 출전 못하더라도 특별상을 받을 수 있었어요.",
      "이러한 제 실력 확인은 앞으로의 열정이자 계기가 되었어요."
    ],
    detail_image: ImgNYPC,
    detail_image_alt: "NYPC 대표 이미지",
    name: "NYPC 예선 출전",
    key2: 3,
    timestemp_start: "2022",
    timestemp_end: "2024",
    host: "넥슨"
  },
  {
    detail: [
      "solved.ac 기준, 오늘도 연속 일수를 늘리며 코딩을 하고 있어요.",
      "매일 할 순 없지만 그 빈도는 극히 드물어요.",
      "현재 사이트 내에서 상위 3%, 앞으로의 여정을 응원해주시길 빌어요."
    ],
    detail_image: ImgSolvedimg,
    detail_image_alt: "솔브닥 대표 이미지",
    name: "하루 한 문제 & 한 커밋",
    key2: 4,
    timestemp_start: "2022.11.12",
    timestemp_end: "?",
    host: "솔브드"
  },
];

export const CertificateList: CertificateType[] = [
  {
    affiliation: "국가공인자격증",
    key2: 1,
    detail: [
      {
        title: "정보처리기능사",
        timestemp: "2022.09.16",
        detail: [
          "컴퓨터에 관한 기초적인 지식과 기술을 갖췄는지를 봄",
          "프로그래밍 언어와 SQL 문법을 익혀 여유롭게 획득했어요.",
        ]
      },
      {
        title: "웹디자인기능사",
        timestemp: "2023.12.13",
        detail: [
          "주어진 자원과 S/W로 홈페이지를 기획, 설계제작할 수 있는지 봄",
          "기존의 동아리 활동으로 갖춰진 실력으로 정정당당하게 합격했어요.",
        ]
      },
      {
        title: "정보기기운용기능사",
        timestemp: "2024.06.26",
        detail: [
          "컴퓨터 및 네트워크 장비 등을 이해하고 조작, 유지보수가 가능한지 봄",
          "처음이였지만 관련 지식과 조작 방법을 터득하여 무사히 넘어갈 수 있었어요.",
        ]
      },
      {
        title: "전자기능사",
        timestemp: "2024.07.03",
        detail: [
          "전자기기에 대한 지식과 기술을 가지고 제작·조작·보수가 가능한지 봄",
          "학교에서 여러 개의 기판을 만들며 숙달한 끝에 얻을 수 있었어요.",
        ]
      },
    ]
  },
  /*{
    affiliation: "민간자격증",
    key2: 2,
    detail: [
      {
        title: "AICE Associate",
        timestemp: "2023.08.09",
        detail: [
          "",
          "이틀 내내 ",
        ]
      },
    ]
  }*/
]

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
  src: "#act3"
};
export const dnjehTitleList: TitleType[] = [
  {
    context:
      "이제는 잘 익숙치 않은 콘솔 응용프로그램을 제작해요. 간단한 생일 축하 프로그램부터, 안전한 편지를 보내는 프로그램까지.",
    title: "미려한 콘솔을 그려요.",
    src: "#"
  },
  commonTitle,
];
export const lilacTitleList: TitleType[] = [
  {
    context:
      "아름다운 웹은 사용자가 의도한대로 움직이고, 간단하며, 결국 만족스러워 하는 웹이에요. 모든 사람들이 아름다워할 웹을 가꾸고 싶어요.",
    title: "웹이 아름답기를 바라요.",
    src: "#"
  },
  commonTitle,
];

export const lilacProjectBanner: ProjectNewBannerType[] = [
  {
    image: ImgSpeedat,
    project_type: "web",
    key2: 1,
  },
  {
    image: ImgIsc,
    project_type: "web",
    key2: 2,
  },
  {
    image: ImgPs,
    project_type: "web",
    key2: 3,
  }
]
export const dnjehProjectBanner: ProjectNewBannerType[] = [
  {
    image: ImgLLwebp,
    dark_image: ImgLLdark,
    project_type: "con",
    key2: 3,
  },
  {
    image: ImgBSM,
    dark_image: ImgBSMdark,
    project_type: "con",
    key2: 4,
  },
  
]
export const ehdnjProjectBanner: ProjectNewBannerType[] = [
  {
    image: ImgRC,
    dark_image: ImgRCdark,
    project_type: "etc",
    key2: 999,
  },
]