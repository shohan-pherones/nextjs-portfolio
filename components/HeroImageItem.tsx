import Image from "next/image";

interface HeroImageItemProps {
  image: string;
}

const HeroImageItem: React.FC<HeroImageItemProps> = ({ image }) => {
  return (
    <div className="w-full h-full overflow-hidden group z-[3]">
      <Image
        src={image}
        alt="Hero Image"
        width={200}
        height={100}
        priority
        className="w-full h-full object-cover duration-300 invisible group-hover:visible"
      />
    </div>
  );
};

export default HeroImageItem;
