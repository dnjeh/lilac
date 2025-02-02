import Header from "../_components/header";
import SectionHeader from "../_components/sectionHeader";
import ToggleCon from "../_components/toggleCon";
import SectionWrap from "../_components/sectionWrap";
import ProjectWrap from "../_components/projectWrap";
import ProjectHeader from "../_components/projectHeader";
import CompoWrap from "../_components/compoWrap";
import Footer from "../_components/footer";
import Section from "../_components/section";

export default function Home() {
  return (
    <CompoWrap>
      <div className="mx-auto max-w-screen-xl lg:mt-24 mt-12 flex flex-col items-center lg:px-24 md:px-16 px-12 font-pretendard">
        <Header />
        <Section id="title">
          <SectionHeader />
          <div className="w-full mt-4 sm:mt-2 md:mt-10 lg:mt-12 flex flex-row gap-10">
            <SectionWrap />
            <ToggleCon />
          </div>
        </Section>
        <Section id="project">
          <ProjectHeader />
          <ProjectWrap />
        </Section>
        <Footer />
      </div>
    </CompoWrap>
  );
}
