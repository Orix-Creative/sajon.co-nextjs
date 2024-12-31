import Navbar from "@/components/navbar";
import logo from "../../public/assets/whop.png";
import Image from "next/image";
import projects from "../data/projectData.json";
import Link from "next/link";
import CopyMailButton from "@/components/copyMail";
import Bookcall from "@/components/bookcall";
export const runtime = "edge";

export default function Home() {
  return (
    <>
      <div className="container">
        <Navbar />
        {/* intro */}

        <div className="sl:max-w-[402px] max-w-[326px] mx-auto">
          <p className="font-inter font-medium text-black text-lg leading-22 tracking-[-0.54px]">
            Hello I’m Sajon Islam
          </p>
          <p className="font-inter font-medium text-black text-lg leading-[24px] tracking-[-0.54px] mt-4 mb-6">
            I partner with founders and startups to create high-converting,
            meaningful and purpose driven design for users.
          </p>
          <Bookcall/>
          {/* <div className="bg-black rounded-full text-white  py-2 px-4 inline-block font-inter text-base leading-6 font-medium -tracking-0.4 cursor-pointer hover:bg-[#3D3D3D] duration-300 ">
            <p>Book a call</p>
          </div> */}
        </div>

        {/* year showreel */}
        <div className="mt-8">
          <div className="border border-[#2727270D] bg-[#f2f2f2] rounded-2xl w-full h-[280px]"></div>
          <p
            className="font-inter font-medium text-xs leading-3 tracking-[-0.36px] text-[#0000004D]
          text-center mt-3 sl:mt-4"
          >
            2024 Showreel
          </p>
        </div>
        {/*  */}
        <div className="sl:max-w-[402px] max-w-[326px] mx-auto mt-10 sl:mt-8">
          <p className="font-inter font-medium text-black text-lg leading-22 tracking-[-0.54px]">
            I have 15years+ experience{" "}
          </p>
          <p className="font-inter font-medium text-black text-lg leading-[24px] tracking-[-0.54px] mt-4">
            My goal has never been monetary success, we strive to leave a legacy
            renowned for long-lasting, remarkable design that not only looks the
            part, but converts.
          </p>
        </div>
        {/* client logo */}
        <div className="sl:mt-10 mt-8 sl:max-w-[402px] max-w-[326px] mx-auto">
          <div className="flex gap-8 justify-center items-center">
            <Image
              src={logo}
              width={100}
              height={60}
              alt="Picture of the author"
            />
            <Image
              src={logo}
              width={100}
              height={60}
              alt="Picture of the author"
            />
            <Image
              src={logo}
              width={100}
              height={60}
              alt="Picture of the author"
            />
          </div>
          <p
            className="font-inter font-medium text-xs leading-3 tracking-[-0.36px] text-[#0000004D]
          text-center mt-5"
          >
            My clients include
          </p>
        </div>
        {/* project  */}
        <div className="sl:grid sl:grid-cols-2 flex gap-3 sl:mt-10 mt-8 overflow-x-scroll sl:overflow-x-visible">
          {projects?.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="border border-[#2727270D] bg-[#f2f2f2] rounded-2xl w-full max-w-[224px] h-[200px] relative flex justify-center items-center flex-shrink-0 overflow-hidden cursor-pointer project-card"
            >
              <p className="font-inter text-base font-medium leading-3 -tracking-0.4 text-[#0000004D] absolute bottom-5 left-5">
                {project.project_name}
              </p>
              <div className="font-inter text-base font-normal leading-6 tracking-[-0.3px] text-white text-center px-4 py-2 rounded-full bg-[#0000007A] view-project">
                <p>View</p>
              </div>
            </Link>
          ))}
        </div>
        <p
          className="font-inter font-medium text-xs leading-3 tracking-[-0.36px] text-[#0000004D]
          text-center sl:mt-3 mt-4"
        >
          My selected Projects
        </p>

        <div className="sl:max-w-[402px] max-w-[326px] mx-auto sl:mt-9 mt-8">
          <p className="font-inter font-medium text-black text-lg leading-22 tracking-[-0.54px] max-w-[339px]">
            My projects take 1-3 months on average Prices start at $10,000 and
            my own vibes and style are off the charts.
          </p>
          <p className="font-inter font-medium text-black text-lg leading-[24px] tracking-[-0.54px] mt-6">
            My services include Web design , Product design Branding , Pitch
            decks , Design systems
          </p>
          <div className="flex gap-3 sl:mt-8 mt-6">
            {/* <div className="bg-black rounded-full text-white  py-2 px-4 font-inter text-base leading-6 font-medium -tracking-0.4 cursor-pointer hover:bg-[#3D3D3D] duration-300  ">
              <p>Book a call</p>
            </div> */}
            <Bookcall/>
            {/* <div className="bg-[#F5F5F5] rounded-full text-black  py-2 px-4 inline-block font-inter text-base leading-6 font-medium -tracking-0.4 cursor-pointer ">
              <p>Copy email</p>
            </div> */}
            <CopyMailButton/>
          </div>

          <p className="font-inter font-medium text-lg leading-5 -tracking-0.4 text-[#0A0A0A80] py-8  ">
            © sajon.co
          </p>
        </div>
      </div>
    </>
  );
}
