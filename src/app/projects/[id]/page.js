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
    <>
      <div className="container">
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
      </div>
      <div className="max-w-[665px] w-full mx-auto mb-8 px-1 sl:space-y-4 space-y-3">
        {currentProject.project_images.map((item, idx) => (
          <div key={idx} className="relative w-full">
            <div className="w-full h-auto max-w-full rounded-[16px]">
              <Image
                src={item}
                loading="lazy"
                className="w-full h-auto object-contain "
                alt={`${currentProject.project_name} preview image`}
                width={0}
                height={0}
                sizes="(max-width: 665px) 100vw, 50vw"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
