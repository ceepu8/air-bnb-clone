import Image from 'next/image';

const RoomImage = ({ src }: { src: string }) => {
  return <Image src={src} className="rounded-md" width={1120} height={400} />;
};

export default RoomImage;
