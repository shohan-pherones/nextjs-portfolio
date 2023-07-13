interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-10 md:mb-20">
      <p>{subtitle}</p>
      <h4 className="text-4xl font-semibold">{title}</h4>
    </div>
  );
};

export default SectionTitle;
