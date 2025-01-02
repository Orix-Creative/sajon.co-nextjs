import { notFound } from "next/navigation";
import projects from "../../../data/projectData.json";
import Link from "next/link";
import Image from "next/image";
export const runtime = "edge";

const Projects = ({ params }) => {
  const { id } = params;
  console.log("Params:", params);
  console.log("Projects:", projects);

  // Find the project
  const project = projects.filter((item) => item.id === parseInt(id));

  // Handle project not found
  if (project.length === 0) {
    notFound();
  }

  // Use project[0] since filter returns an array
  const currentProject = project[0];

  return (
    <div className="container pb-8">
      <div className="sl:max-w-[402px] max-w-[326px] mx-auto mb-8">
        <Link
          href={"/"}
          className="bg-[#F5F5F5] rounded-full text-black  py-2 px-4 inline-block font-inter text-base leading-6 font-medium -tracking-0.4 cursor-pointer my-8"
        >
          <p>Go back</p>
        </Link>
        <div className="size-[50px] rounded-md overflow-hidden">
          <Image
            src={currentProject?.project_icon}
            width={50}
            height={50}
            loading="lazy"
            alt={`${currentProject.project_name} icon`}
          />
        </div>
        <p className="font-inter font-medium text-black text-lg leading-22 -tracking-0.4 mt-8">
          {currentProject.project_name}
        </p>
        <p className="font-inter font-medium text-black text-lg leading-[24px] tracking-[-0.54px] mt-4">
          {currentProject.project_details}
        </p>
      </div>
      {currentProject.project_images.map((item, idx) => (
        <div key={idx} className=" relative ">
          <div className="w-full sl:h-[261px] h-[207px] rounded-[16px] bg-[#f2f2f2] border border-[#2727270D]">
            <Image src={item} loading="lazy" className="w-full h-full" fill alt={`${currentProject.project_name} preview image`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
