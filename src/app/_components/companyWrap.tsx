"use client";

import CompanyHeader from "./companyHeader";
import CompanyInner from "./companyInner";
import { CompanyList } from "./data";
import Section from "./section";

const CompanyWrap = () => {
  return (
    <Section id="company">
      <CompanyHeader />
      <ul className="flex flex-col gap-6 lg:gap-12 lg:mt-8 mt-4">
        {CompanyList.map((ai, i) => (
          <CompanyInner context={ai} key={i} />
        ))}
      </ul>
    </Section>
  );
};

export default CompanyWrap;
