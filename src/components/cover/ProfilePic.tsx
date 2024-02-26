import Image from "next/image";
import { FC } from "react";

interface ProfilePicProps {}

const ProfilePic: FC<ProfilePicProps> = ({}) => {
  return (
    <div className="flex justify-center">
      <Image
        alt="Jagdish Dhami"
        src="/images/portfolio.jpg"
        height={150}
        width={150}
        className="object-fill border-4 border-white rounded-full shadow-md w-[150px] h-[150px]"
      />
    </div>
  );
};

export default ProfilePic;
