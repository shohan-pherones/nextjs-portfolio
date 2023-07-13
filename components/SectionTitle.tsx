interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-10">
      <p>{subtitle}</p>
      <h2 className="text-4xl font-semibold">{title}</h2>
    </div>
  );
};

export default SectionTitle;
