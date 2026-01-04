"use client";

import CertificateHeader from "./certificateHeader";
import CertificateInner from "./certificateInner";
import { CertificateList } from "./data";
import Section from "./section";

const CertificateWrap = () => {
  return (
    <Section id="certificate">
      <CertificateHeader />
      <ul className="flex flex-col gap-6 lg:gap-12 lg:mt-8 mt-4">
        {CertificateList.map((ai, i) => (
          <CertificateInner context={ai} key={i} />
        ))}
      </ul>
    </Section>
  );
};

export default CertificateWrap;
