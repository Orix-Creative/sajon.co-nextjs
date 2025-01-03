import Navbar from "@/components/navbar";
import logo from "../../public/assets/whop.png";
import Image from "next/image";
import projects from "../data/projectData.json";
import Link from "next/link";
import CopyMailButton from "@/components/copyMail";
import Bookcall from "@/components/bookcall";
import Video from "@/components/video";
import { lazy } from "react";
export const runtime = "edge";

export default function Home() {
  return (
    <>
      <div className="container">
        <Navbar />
        {/* intro */}

        <div className="sl:max-w-[402px] max-w-[326px] mx-auto">
          <p className=" font-inter font-medium text-black text-lg leading-22 tracking-[-0.54px]">
            Hello I’m Sajon Islam
          </p>
          <p className="font-inter font-medium text-black text-lg leading-[24px] tracking-[-0.54px] mt-4">
            I partner with founders and startups to create high-converting,
            meaningful and purpose driven design for users.
          </p>
        </div>

        {/* year showreel */}
        <div className="mt-8  ">
          {/* <div className="border border-[#2727270D] bg-[#f2f2f2] rounded-2xl w-full h-[258px]"></div> */}
          <Video />
          <p
            className="font-inter font-medium text-xs leading-3 tracking-[-0.36px] text-[#0000004D]
          text-center mt-4 sl:mt-3"
          >
            My Recent Works
          </p>
        </div>
        {/*  */}
        <div className="sl:max-w-[402px] max-w-[326px] mx-auto mt-9">
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
        <div className="mt-10 sl:mt-9 sl:max-w-[402px] max-w-[326px] mx-auto">
          <div className="flex justify-center items-center">
            <svg
              width="134"
              height="48"
              viewBox="0 0 134 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 15.6187H23.9931V19.9851H30.5076V22.8374H23.9931V28.2075C23.9931 29.3452 24.9154 30.2675 26.0531 30.2675C27.1908 30.2675 28.1131 29.3452 28.1131 28.2075V27.556H31.2471V28.2075C31.2471 31.0371 28.9532 33.331 26.1236 33.331C23.2939 33.331 21 31.0372 21 28.2075V15.6187Z"
                fill="#9F9F9F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M43.6866 30.282C43.1835 32.3807 41.0409 33.2962 39.4509 33.2962C35.5613 33.2962 32.4082 30.1904 32.4082 26.3592C32.4082 22.5279 35.5613 19.4221 39.4509 19.4221C43.2374 19.4221 46.3259 22.3655 46.487 26.056L46.4936 26.0423V32.8033H43.6765V31.9229L43.6866 30.282ZM43.1835 26.2888C43.1835 28.4864 41.4808 30.2679 39.3805 30.2679C37.2801 30.2679 35.5774 28.4864 35.5774 26.2888C35.5774 24.0911 37.2801 22.3096 39.3805 22.3096C41.4808 22.3096 43.1835 24.0911 43.1835 26.2888Z"
                fill="#9F9F9F"
              />
              <path
                d="M49.0293 25.7777V33.2958H51.952V25.8481C51.952 24.127 53.3473 22.7317 55.0684 22.7317C56.7896 22.7317 58.1848 24.127 58.1848 25.8481V33.2958H61.178V25.7777C61.178 22.4229 58.4584 19.7034 55.1036 19.7034C51.7489 19.7034 49.0293 22.4229 49.0293 25.7777Z"
                fill="#9F9F9F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M94.8789 33.2962V24.757C94.8789 21.8106 97.2674 19.4221 100.214 19.4221C101.934 19.4221 103.464 20.2361 104.439 21.4998C105.415 20.2361 106.945 19.4221 108.665 19.4221C111.611 19.4221 113.999 21.8106 113.999 24.757V33.2963H111.006V24.8274C111.006 23.5147 109.942 22.4505 108.629 22.4505C107.317 22.4505 106.252 23.5147 106.252 24.8274V33.2963H103.33V33.2962H102.555V24.8274C102.555 23.5147 101.491 22.4505 100.179 22.4505C98.8658 22.4505 97.8016 23.5147 97.8016 24.8274V33.2962H94.8789Z"
                fill="#9F9F9F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M89.2788 29.2052H92.4832C91.5956 31.6569 89.2674 33.29 86.66 33.29H86.1116C82.4458 33.29 79.4846 30.2985 79.5218 26.633L79.5234 26.4819C79.5629 22.5919 82.7706 19.4827 86.6599 19.5646C90.1696 19.6385 92.9762 22.5048 92.9762 26.0153V27.5502H82.6939C82.895 29.179 84.2788 30.4025 85.92 30.4025H87.2903C88.1237 30.4025 88.8889 29.9418 89.2788 29.2052ZM89.7705 25.085H82.8335C83.2063 23.6146 84.5296 22.5849 86.0466 22.5849H86.6443C88.1427 22.5849 89.4411 23.6232 89.7705 25.085Z"
                fill="#9F9F9F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M74.4659 22.4362C73.9628 20.5136 71.8202 19.422 70.2302 19.422C66.3406 19.422 63.1875 22.5278 63.1875 26.3591C63.1875 30.1903 66.3406 33.2961 70.2302 33.2961C74.0167 33.2961 77.1052 30.3528 77.2663 26.6622L77.2729 26.676V15.619H74.4558V20.7953L74.4659 22.4362ZM73.9628 26.4295C73.9628 24.2319 72.2601 22.4504 70.1598 22.4504C68.0594 22.4504 66.3567 24.2319 66.3567 26.4295C66.3567 28.6271 68.0594 30.4086 70.1598 30.4086C72.2601 30.4086 73.9628 28.6271 73.9628 26.4295Z"
                fill="#9F9F9F"
              />
            </svg>
            {/* kubikk */}
            <svg
              width="134"
              height="48"
              viewBox="0 0 134 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_5798_30466)">
                <path
                  d="M29.0762 31.8786V15.0271H31.9918V26.069L30.8788 25.7342L36.578 19.7689H40.2067L35.7328 24.6446L40.2972 31.8804H36.9581L32.9963 25.602L34.7319 25.2455L31.0815 29.1638L31.9936 27.3829V31.8804H29.0762V31.8786Z"
                  fill="#9F9F9F"
                />
                <path
                  d="M46.2404 32.1448C45.3047 32.1448 44.492 31.9367 43.8025 31.5222C43.1129 31.1077 42.5863 30.5286 42.2225 29.7866C41.8587 29.0445 41.6777 28.1758 41.6777 27.1822V19.769H44.5934V26.9379C44.5934 27.4428 44.6929 27.8844 44.8938 28.2627C45.0947 28.6409 45.3843 28.9377 45.7626 29.1531C46.1408 29.3685 46.5679 29.4753 47.0421 29.4753C47.5163 29.4753 47.9398 29.3685 48.3108 29.1531C48.6818 28.9377 48.9714 28.6373 49.1796 28.2518C49.3877 27.8663 49.4908 27.4066 49.4908 26.8709V19.769H52.4065V31.8787H49.6465V29.497L49.8908 29.9205C49.6085 30.6625 49.1452 31.22 48.4991 31.591C47.8529 31.962 47.1 32.1466 46.2404 32.1466V32.1448Z"
                  fill="#9F9F9F"
                />
                <path
                  d="M59.4396 32.1448C58.5039 32.1448 57.6913 31.9367 57.0017 31.5222C56.3122 31.1077 55.7855 30.5286 55.4217 29.7866C55.0579 29.0445 54.877 28.1758 54.877 27.1822V19.769H57.7926V26.9379C57.7926 27.4428 57.8922 27.8844 58.0931 28.2627C58.2939 28.6409 58.5835 28.9377 58.9618 29.1531C59.34 29.3685 59.7672 29.4753 60.2413 29.4753C60.7155 29.4753 61.139 29.3685 61.51 29.1531C61.8811 28.9377 62.1706 28.6373 62.3788 28.2518C62.5869 27.8663 62.6901 27.4066 62.6901 26.8709V19.769H65.6057V31.8787H62.8457V29.497L63.09 29.9205C62.8077 30.6625 62.3444 31.22 61.6983 31.591C61.0522 31.962 60.2993 32.1466 59.4396 32.1466V32.1448Z"
                  fill="#9F9F9F"
                />
                <path
                  d="M74.9335 32.1446C74.0575 32.1446 73.2521 31.9709 72.5174 31.6216C71.7826 31.2723 71.1998 30.7728 70.769 30.1194L71.0586 29.5403V31.8786H68.3203V15.0271H71.236V22.1724L70.7908 21.5715C71.2052 20.9182 71.7699 20.4096 72.483 20.0458C73.196 19.682 74.0195 19.501 74.9534 19.501C76.0954 19.501 77.127 19.7834 78.0482 20.3462C78.9676 20.9109 79.6988 21.6674 80.2418 22.6176C80.7829 23.5678 81.0544 24.6356 81.0544 25.8228C81.0544 27.0101 80.7865 28.0634 80.2526 29.0281C79.7187 29.9927 78.9912 30.7529 78.0718 31.3103C77.1524 31.8677 76.1045 32.1446 74.9335 32.1446ZM74.6005 29.4751C75.2683 29.4751 75.862 29.3195 76.3814 29.0082C76.9008 28.6969 77.3044 28.2661 77.594 27.7178C77.8835 27.1694 78.0283 26.5377 78.0283 25.8247C78.0283 25.1116 77.8835 24.4854 77.594 23.9442C77.3044 23.4031 76.9008 22.9723 76.3814 22.6538C75.862 22.3353 75.2683 22.176 74.6005 22.176C73.9327 22.176 73.3879 22.3316 72.8757 22.6429C72.3635 22.9542 71.9635 23.3886 71.674 23.946C71.3844 24.5035 71.2396 25.1297 71.2396 25.8265C71.2396 26.5233 71.3844 27.1694 71.674 27.7196C71.9635 28.2679 72.3635 28.6987 72.8757 29.01C73.3879 29.3213 73.9634 29.4769 74.6005 29.4769V29.4751Z"
                  fill="#9F9F9F"
                />
                <path
                  d="M88.0898 31.8787L89.7821 19.769H92.7212L91.029 31.8787H88.0898Z"
                  fill="#9F9F9F"
                />
                <path
                  d="M94.5898 31.8786V15.0271H97.5055V26.069L96.3925 25.7342L102.092 19.7689H105.72L101.246 24.6446L105.809 31.8804H102.47L98.5082 25.602L100.244 25.2455L96.5933 29.1638L97.5055 27.3829V31.8804H94.5898V31.8786Z"
                  fill="#9F9F9F"
                />
                <path
                  d="M82.9277 28.3604L84.1277 19.769H87.0669L85.8687 28.3477L82.9277 28.3604Z"
                  fill="#9F9F9F"
                />
              </g>
              <defs>
                <clipPath id="clip0_5798_30466">
                  <rect
                    width="77"
                    height="17.1175"
                    fill="white"
                  
                    transform="translate(29 15.0271)"
                  />
                </clipPath>
              </defs>
            </svg>
            {/*  */}
            <svg
              width="134"
              height="48"
              viewBox="0 0 134 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M54.7763 23.595C55.2667 21.19 57.2047 19.6722 59.8433 19.6722C63.0189 19.6722 64.8168 21.5402 64.8168 24.8559V29.8294C64.8168 30.3431 65.0503 30.6 65.564 30.6H66.0777V32.3279H65.2371C63.9762 32.3279 62.8788 31.9309 62.8788 30.4132C62.3417 31.5573 60.9874 32.6081 59.026 32.6081C56.5509 32.6081 54.5662 31.3005 54.5662 29.0822C54.5662 26.5371 56.4809 25.8833 59.2362 25.3696L62.8554 24.6458C62.8321 22.5676 61.828 21.5402 59.8433 21.5402C58.2788 21.5402 57.2281 22.3341 56.8545 23.7585L54.7763 23.595ZM56.621 29.0822C56.621 30.0629 57.4616 30.8802 59.2829 30.8802C61.291 30.8568 62.9021 29.4558 62.9021 26.5605V26.397L59.9834 26.9107C58.1387 27.2376 56.621 27.3543 56.621 29.0822ZM77.3745 19.9524L72.868 32.3279H70.3929L65.8863 19.9524H67.9878L71.6304 30.2731L75.273 19.9524H77.3745ZM78.8253 19.9524H80.7867V32.3279H78.8253V19.9524ZM78.7786 18.0144V15.7728H80.8334V18.0144H78.7786ZM83.0316 23.595C83.5219 21.19 85.46 19.6722 88.0985 19.6722C91.2741 19.6722 93.072 21.5402 93.072 24.8559V29.8294C93.072 30.3431 93.3055 30.6 93.8192 30.6H94.3329V32.3279H93.4923C92.2314 32.3279 91.134 31.9309 91.134 30.4132C90.5969 31.5573 89.2426 32.6081 87.2812 32.6081C84.8062 32.6081 82.8214 31.3005 82.8214 29.0822C82.8214 26.5371 84.7361 25.8833 87.4914 25.3696L91.1106 24.6458C91.0873 22.5676 90.0832 21.5402 88.0985 21.5402C86.534 21.5402 85.4833 22.3341 85.1097 23.7585L83.0316 23.595ZM84.8762 29.0822C84.8762 30.0629 85.7168 30.8802 87.5381 30.8802C89.5462 30.8568 91.1573 29.4558 91.1573 26.5605V26.397L88.2386 26.9107C86.3939 27.2376 84.8762 27.3543 84.8762 29.0822ZM96.1633 17.1504H98.1247V19.9524H101.417V21.6803H98.1247V29.0355C98.1247 30.0629 98.6151 30.6 99.5958 30.6H101.37V32.3279H99.5958C97.3775 32.3279 96.1633 31.137 96.1633 29.0355V21.6803H94.342V19.9524H96.1633V17.1504ZM107.766 32.6081C104.333 32.6081 102.091 30.0863 102.091 26.1402C102.091 22.194 104.333 19.6722 107.766 19.6722C111.175 19.6722 113.416 22.194 113.416 26.1402C113.416 30.0863 111.175 32.6081 107.766 32.6081ZM104.146 26.1402C104.146 29.0122 105.477 30.7401 107.766 30.7401C110.03 30.7401 111.361 29.0122 111.361 26.1402C111.361 23.2681 110.03 21.5402 107.766 21.5402C105.477 21.5402 104.146 23.2681 104.146 26.1402Z"
                fill="#9F9F9F"
              />
              <path
                d="M32.6214 24.8627L19.0006 14.3552L44.5749 22.5755C45.5684 22.8949 46.2421 23.8191 46.2422 24.8627H45.3204C43.064 24.8627 40.9611 26.0056 39.7339 27.8991C38.235 30.2117 35.3205 31.1575 32.7493 30.1657L32.6214 30.1164L19.0006 24.8627H32.6214Z"
                fill="#9F9F9F"
              />
            </svg>
          </div>
          <p
            className="font-inter font-medium text-xs leading-3 tracking-[-0.36px] text-[#0000004D]
          text-center sl:mt-5 mt-4"
          >
            My clients include
          </p>
        </div>
        {/* project  */}
        {/* sl:grid sl:grid-cols-2 flex gap-3 sl:gap-x-3 sl:gap-y-5  sl:mt-10 mt-8 overflow-x-scroll sl:overflow-x-visible   */}
        <div className="sl:grid sl:grid-cols-2 flex gap-3 sl:gap-x-3 sl:gap-y-4  sl:mt-10 mt-8 overflow-x-scroll sl:overflow-x-visible ">
          {projects?.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="relative project-card flex-shrink-0 max-w-[224px] w-full"
            >
              {/* project image */}
              <div className="rounded-2xl w-full max-w-[224px] h-[200px] relative flex justify-center items-center flex-shrink-0 overflow-hidden cursor-pointer project-img ">
                <Image
                  src={project.project_thumb}
                  loading="lazy"
                  fill
                  alt="Project Image"
                  className="w-full h-full"
                />
              </div>
              {/* project title & description */}
              <div className="mt-[14px] py-1">
                <p className="font-inter text-base font-medium leading-3 -tracking-[-0.54px] text-black">
                  {project.project_name}
                </p>
                <p className="font-inter text-sm leading-3 -tracking-0.4 text-[#27272780]  mt-2">
                  {project.project_type}
                </p>
              </div>
              <div className="font-inter text-base font-normal leading-6 tracking-[-0.3px] text-white text-center px-4 py-2 rounded-full bg-[#0000007A] view-project">
                <p>View</p>
              </div>
            </Link>
          ))}
        </div>
        {/* <p
          className="font-inter font-medium text-xs leading-3 tracking-[-0.36px] text-[#0000004D]
          text-center sl:mt-3 mt-4"
        >
          My selected Projects
        </p> */}

        <div className="sl:max-w-[402px] max-w-[326px] mx-auto sl:mt-9 mt-10">
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
            <Bookcall />
            {/* <div className="bg-[#F5F5F5] rounded-full text-black  py-2 px-4 inline-block font-inter text-base leading-6 font-medium -tracking-0.4 cursor-pointer ">
              <p>Copy email</p>
            </div> */}
            <CopyMailButton />
          </div>
          {/* social media links */}
          <div className="flex gap-1 sl:mt-8 sl:mb-6 mt-7 mb-8">
            <Link
              href={"https://x.com/sajon_co"}
              target="_blank"
              className="font-inter font-medium text-sm leading-5 px-3 -tracking-0.4 hover:bg-[#F5F5F5] py-[6px] rounded-full text-sajonGray duration-300"
            >
              Twitter
            </Link>
            <Link
              href={"https://www.instagram.com/sajon.co"}
              target="_blank"
              className="font-inter font-medium text-sm leading-5 px-3 -tracking-0.4  hover:bg-[#F5F5F5] py-[6px] rounded-full text-sajonGray duration-300"
            >
              Instagram{" "}
            </Link>
            <Link
              href={"https://www.linkedin.com/in/sajonislam/"}
              target="_blank"
              className="font-inter font-medium text-sm leading-5 px-3 -tracking-0.4  hover:bg-[#F5F5F5] py-[6px] rounded-full text-sajonGray duration-300"
            >
              LinkedIn
            </Link>
          </div>
          {/* <p className="font-inter font-medium text-lg leading-5 -tracking-0.4 text-[#0A0A0A80] py-8  ">
            © sajon.co
          </p> */}
        </div>
      </div>
    </>
  );
}
