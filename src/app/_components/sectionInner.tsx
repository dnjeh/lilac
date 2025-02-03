interface SectionInnerProps {
  title: string;
  context: string;
}

const SectionInner = ({ title, context }: SectionInnerProps) => {
  return (
    <div className="flex-1">
      <h3 className="font-semibold text-xl md:text-2xl lg:text-3xl md:mb-2">
        {title}
      </h3>
      <p className="text-xl font-normal md:text-2xl">
        {context}
      </p>
    </div>
  );
};

export default SectionInner;
