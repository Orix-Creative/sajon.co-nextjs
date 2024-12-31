import { notFound } from "next/navigation";
import projects from "../../../data/projectData.json";
import Link from "next/link";

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
    <div className="container pb-20 ">
      <div className="sl:max-w-[402px] max-w-[326px] mx-auto">
        <Link href={'/'} className="bg-[#F5F5F5] rounded-full text-black  py-2 px-4 inline-block font-inter text-lg leading-6 font-medium -tracking-0.4 cursor-pointer my-6">
          <p>Go back</p>
        </Link>
        <div className="size-[50px] rounded-md bg-gray-200"> </div>
        <p className="font-inter font-medium text-black text-lg leading-22 -tracking-0.4 mt-8">
          {currentProject.project_name}
        </p>
        <p className="font-inter font-medium text-black text-lg leading-22 -tracking-0.4 mt-4">
          {currentProject.project_details}
        </p>
      </div>
      {currentProject.project_images.map((item) => (
        <div className="w-full h-[280px] rounded-[16px] bg-[#f2f2f2] border border-[#2727270D] mt-8"></div>
      ))}
    </div>
  );
};

export default Projects;
