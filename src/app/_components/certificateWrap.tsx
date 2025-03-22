import CertificateHeader from "./certificateHeader";
import Section from "./section";

const CertificateWrap = () => {
  return (
    <Section id="certificate">
      <CertificateHeader />
      <div className="flex">
        <ul className="flex-1">

        </ul>
      <ul className="h-[calc(100dvh-14rem)] w-[calc((100dvh-14rem)/27*40+4rem)] m-8 p-8 border-2 rounded-3xl mr-0">
        <ul>
        {
          ["정보처리기능사", "웹디자인기능사", "정보기기운용기능사", "전자기기기능사"].map((ai, i)=>(
            <li key={i}>{ai}</li>
          ))
        }
        </ul>

      </ul></div>
    </Section>
  );
};

export default CertificateWrap;
