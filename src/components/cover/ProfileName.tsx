import Link from "next/link";
import { FC } from "react";
import Button from "../ui/Button";
import { Instagram, Phone, Mail } from "lucide-react";

interface ProfileNameProps {}

const ProfileName: FC<ProfileNameProps> = ({}) => {
  return (
    <div className="text-3xl flex flex-col font-bold text-highlight md:text-start text-center">
      Jagdish Singh Dhami
      <div className="text-sm font-thin flex md:justify-between items-center justify-center">
        <div className="m-2">
          <Button variant="primary" sizes={"iconOnly"}>
            <Mail />
            <a href="mailto:Jagdishdhami64@gmail.com">
              {" "}
              Jagdishdhami64@gmail.com
            </a>
          </Button>
        </div>
        <div className="m-2">
          <Button variant="primary" sizes={"iconOnly"}>
            <Phone /> <a href="tel:+91905****83">+91 9057****83</a>
          </Button>
        </div>

        {/* <Link
          className="block md:hidden"
          href="https://www.instagram.com/jazz_dhamii/"
          target="_blank"
        >
          <Button variant="primary" sizes={"iconOnly"}>
            <Instagram />
          </Button>
        </Link> */}
      </div>
    </div>
  );
};

export default ProfileName;
