import Cover from "@/components/Cover";
import ProjectCardSection from "@/components/sections/ProjectCardSection";
import Image from "next/image";
import MoreProjects from "@/components/sections/MoreProjects";
import CardSection from "@/components/sections/CardSection";
import {
  backendCard,
  databaseCard,
  devopsCards,
  frontendCard,
  moreProjects,
  otherCards,
  projectCard,
  web3Cards,
} from "@/components/utils/Data";

export default function Home() {
  return (
    <>
      <Cover />
      <div className="flex flex-col gap-10 lg:px-10">
        <ProjectCardSection title="Projects" data={projectCard} />
        <MoreProjects title="More projects" data={moreProjects} />

        <CardSection title="Times Internet Projects : " data={web3Cards} />
        <CardSection title="Others Projects :" data={otherCards} />
      </div>
    </>
  );
}
