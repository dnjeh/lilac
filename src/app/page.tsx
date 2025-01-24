import Line from "./_components/line";
import SectionInner from "./_components/sectionInner";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-2xl lg:mt-24 mt-12 flex flex-col items-center lg:px-24 md:px-16 px-12 font-pretendard">
      <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold flex lg:flex-row flex-col w-full lg:items-center items-end">
        <div className="self-start">
          <span>오,&nbsp;</span>
          <span className="text-purple-500">라일락</span>
        </div>
        <div className="md:block lg:opacity-100 md:opacity-0 hidden bg-gradient-to-r from-purple-500 to-slate-950 flex-1 h-1 mx-4" />
        <div>꽃이 피는 날</div>
        <div>&nbsp;안녕!</div>
      </h2>
      <Line />
      <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold flex lg:flex-row flex-col w-full lg:items-center items-end">
        <div className="self-start">
          <span>환영해요,&nbsp;</span>
        </div>
        <div className="flex flex-wrap">
          <div>저는 김도원</div>
          <div>
            이에요<span className="text-purple-500">.</span>
          </div>
        </div>
      </h2>
      <section className="w-full my-4 sm:my-2 md:my-10 lg:my-12 flex xl:flex-row flex-col gap-10">
        <SectionInner
          context="아름다운 웹은 사용자가 의도한대로 움직이고, 간단하며, 결국 만족스러워 하는 웹이에요. 모든 사람들이 아름다워할 웹을 가꾸고 싶어요."
          title="웹이 아름답기를 바라요."
        />
        <SectionInner
          context="2022년 여름, 프로그래밍에 불붙은 열정은 아직 식지 않았어요. 1년에 364일, 오늘도 배움을 향해 나아가고 있어요."
          title="끝없는 배움을 추구해요."
        />
      </section>
    </div>
  );
}
