import Line from "./line";

const Section = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  return (
    <>
      <Line id={id} />
      <section>{children}</section>
    </>
  );
};

export default Section;
