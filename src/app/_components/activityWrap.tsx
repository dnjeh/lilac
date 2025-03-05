"use client";

import ActivityHeader from "./activityHeader";
import ActivityInner from "./activityInner";
import { ActivityList } from "./data";
import Section from "./section";

const ActivityWrap = () => {
  return (
    <Section id="activity">
      <ActivityHeader />
      <ul className="flex flex-col gap-6 lg:gap-12 lg:mt-8 mt-4">
        {ActivityList.map((ai, i) => (
          <ActivityInner context={ai} key={i} isRight={Boolean(!(i % 2))} />
        ))}
      </ul>
    </Section>
  );
};

export default ActivityWrap;
