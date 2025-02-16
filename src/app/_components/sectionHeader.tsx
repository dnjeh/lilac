const SectionHeader = () => {
    return (
  <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold flex lg:flex-row flex-col w-full lg:items-center items-end">
    <div className="self-start">
      <span>환영해요,&nbsp;</span>
    </div>
    <div className="flex flex-wrap">
      <div>저는 김도원</div>
      <div>
        이에요
        <span className="text-purple-500 dark:text-yellow-300">.</span>
      </div>
    </div>
  </h2>)
};
export default SectionHeader;
