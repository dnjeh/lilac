import Header from "../_components/header";
import SectionHeader from "../_components/sectionHeader";
import ToggleCon from "../_components/toggleCon";
import SectionWrap from "../_components/sectionWrap";
//import ProjectWrap from "../_components/projectWrap";
import ProjectHeader from "../_components/projectHeader";
import CompoWrap from "../_components/compoWrap";
import Footer from "../_components/footer";
import Section from "../_components/section";
import ProjectNewWrap from "../_components/projectNewWrap";

export default function Home() {
  return (
    <CompoWrap>
      <div className="mx-auto max-w-screen-xl lg:mt-13 md:mt-12 mt-10 flex flex-col items-center lg:px-24 md:px-16 sm:px-10 px-8 font-pretendard">
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
          {/*<ProjectWrap />*/}
          <ProjectNewWrap />
        </Section>
        <Footer />
      </div>
    </CompoWrap>
  );
}
