interface SectionInnerProps {
  title: string;
  context: string;
}

const SectionInner = ({ title, context }: SectionInnerProps) => {
  return (
    <div className="flex-1">
      <h3 className="font-semibold text-2xl lg:text-4xl mb-2">
        {title}
      </h3>
      <p className="text-2xl font-normal lg:text-4xl">
        {context}
      </p>
    </div>
  );
};

export default SectionInner;
