import Line from "./_components/line";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-2xl lg:mt-24 mt-12 flex flex-col items-center lg:px-24 md:px-16 px-12">
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold font-pretendard flex lg:flex-row flex-col w-full lg:items-center items-end">
        <div className="self-start">
          <span>오,&nbsp;</span>
          <span className="text-purple-500">라일락</span>
        </div>
        <div className="md:block lg:opacity-100 md:opacity-0 hidden bg-gradient-to-r from-purple-500 to-slate-950 flex-1 h-1 mx-4" />
        <div>꽃이 피는 날</div>
        <div>&nbsp;안녕!</div>
      </h2>
      <Line/>
      <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-pretendard flex lg:flex-row flex-col w-full lg:items-center items-end">
        <div className="self-start">
          <span>환영해요,&nbsp;</span>
        </div>
        <div className="flex flex-wrap">
        <div>저는 김도원</div>
        <div>이에요.</div>
        </div>
      </h2>
      
    </div>
  );
}
