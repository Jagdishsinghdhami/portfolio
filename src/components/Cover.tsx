import { FC } from "react";
import ProfilePic from "./cover/ProfilePic";
import ProfileName from "./cover/ProfileName";
import Button from "./ui/Button";
import { Instagram } from "lucide-react";
import Link from "next/link";

interface CoverProps {}

const Cover: FC<CoverProps> = ({}) => {
  return (
    <div className="flex rounded-lg w-full  bg-[url('/images/cover.jpeg')] bg-no-repeat bg-cover">
      <div className="md:flex justify-between items-center gap-2 md:rounded-ld overflow-hidden md:px-10 py-5 bg-blur backdrop-filter backdrop-blur-md w-full md:gap-10 block">
        <ProfilePic />
        <ProfileName />
        {/* <div className="flex md:flex-1 flex-col justify-center gap-4">
          <div className="flex justify-between items-center gap-5 ">
            <ProfileName />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Cover;
