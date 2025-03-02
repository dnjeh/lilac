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
      <section className="w-full">{children}</section>
      <Line id={id} />
    </>
  );
};

export default Section;
