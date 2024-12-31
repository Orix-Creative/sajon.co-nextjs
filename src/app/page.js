import Navbar from "@/components/navbar";
import logo from "../../public/assets/whop.png";
import Image from "next/image";
import projects from "../data/projectData.json";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="container">
        <Navbar />
        {/* intro */}
        <div className="sl:max-w-[402px] max-w-[326px] mx-auto">
          <p className="font-inter font-medium text-black text-lg leading-[24px] -tracking-0.4">
            Hello I’m Sajon Islam
          </p>
          <p className="font-inter font-medium text-black text-lg leading-[24px] -tracking-0.4 mt-4">
            I partner with founders and startups to create high-converting,
            meaningful and purpose driven design for users.
          </p>
          <div className="bg-black rounded-full text-white  py-2 px-4 inline-block font-inter text-base leading-6 font-medium -tracking-0.4 cursor-pointer hover:bg-[#3D3D3D] duration-300 mt-6">
            <p>Book a call</p>
          </div>
        </div>
        {/* year showreel */}
        <div className="mt-8">
          <div className="border border-[#2727270D] bg-[#f2f2f2] rounded-2xl w-full h-[280px]"></div>
          <p
            className="font-inter font-medium text-xs leading-3 tracking-[-0.36px] text-[#0000004D]
          text-center mt-3"
          >
            2024 Showreel
          </p>
        </div>
        {/*  */}
        <div className="sl:max-w-[402px] max-w-[326px] mx-auto mt-10">
          <p className="font-inter font-medium text-black text-lg leading-22 -tracking-0.4">
            I have 15years+ experience{" "}
          </p>
          <p className="font-inter font-medium text-black text-lg leading-22 -tracking-0.4 mt-4">
            My goal has never been monetary success, we strive to leave a legacy
            renowned for long-lasting, remarkable design that not only looks the
            part, but converts.
          </p>
        </div>
        {/* client logo */}
        <div className="mt-10">
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
        <div className="grid grid-cols-2 gap-3 mt-10">
          {projects?.map((project) => (
            <Link href={`/projects/${project.id}`} className="border border-[#2727270D] bg-[#f2f2f2] rounded-2xl w-full h-[200px] relative flex justify-center items-center overflow-hidden cursor-pointer project-card">
              <p className="font-inter text-base font-medium leading-3 -tracking-0.4 text-[#0000004D] absolute bottom-5 left-5">
                {project.project_name}
              </p>
              <div className="font-inter text-base font-normal leading-6 -tracking-0.4 text-white text-center px-4 py-2 rounded-full bg-[#0000007A] view-project">
                <p>View</p>
              </div>
            </Link>
          ))}
        </div>
        <p
          className="font-inter font-medium text-xs leading-3 tracking-[-0.36px] text-[#0000004D]
          text-center mt-3"
        >
          My selected Projects
        </p>

        <div className="sl:max-w-[402px] max-w-[326px] mx-auto mt-9">
          <p className="font-inter font-medium text-black text-lg leading-22 -tracking-0.4">
            My projects take 1-3 months on average Prices start at $10,000 and
            my own vibes and style are off the charts.
          </p>
          <p className="font-inter font-medium text-black text-lg leading-22 -tracking-0.4 mt-6">
            My services include Web design , Product design Branding , Pitch
            decks , Design systems
          </p>
        </div>

        <div className="flex gap-3 mt-8">
          <div className="bg-black rounded-full text-white  py-2 px-4 inline-block font-inter text-lg leading-6 font-medium -tracking-0.4 cursor-pointer hover:bg-[#3D3D3D] duration-300  ">
            <p>Book a call</p>
          </div>
          <div className="bg-[#F5F5F5] rounded-full text-black  py-2 px-4 inline-block font-inter text-lg leading-6 font-medium -tracking-0.4 cursor-pointer ">
            <p>Copy email</p>
          </div>
        </div>

        <p className="font-inter font-medium text-lg leading-5 -tracking-0.4 text-[#0A0A0A80] py-8 block">
          © sajon.co
        </p>
      </div>
    </>
  );
}
