import Image from 'next/image';

interface HeroImageItemProps {
  image: string;
}

const HeroImageItem: React.FC<HeroImageItemProps> = ({ image }) => {
  return (
    <div className='group z-[3] h-full w-full overflow-hidden'>
      <Image
        src={image}
        alt='Hero Image'
        width={300}
        height={200}
        priority
        className='invisible h-full w-full object-cover duration-300 group-hover:visible'
      />
    </div>
  );
};

export default HeroImageItem;
