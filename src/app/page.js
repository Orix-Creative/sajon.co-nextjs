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
      <div className="container  ">
        <Navbar />
        {/* intro */}

        <div className="sl:max-w-[402px] max-w-[326px] sl:ml-5 mx-auto sl:mx-0">
          <p className=" font-inter font-medium text-black text-lg leading-22 tracking-[-0.54px]">
            Meet your trusted design partner Sajon, a design-focused engineer
            who enjoys designing.
          </p>
          <p className="font-inter font-medium text-black text-lg leading-[24px] tracking-[-0.54px] mt-5">
            A multidisciplinary designer who crafting strong brands for SaaS
            products, Website, and Apps with a deep understanding of user needs.
          </p>
        </div>

        {/* year showreel */}
        <div className="sl:mt-9 mt-8 ">
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
        <div className="sl:max-w-[402px] max-w-[326px] sl:ml-5 mx-auto sl:mt-10 mt-8">
          <p className="font-inter font-medium text-black text-lg leading-22 tracking-[-0.54px]">
          I have 10years+ experience 
          </p>
          <p className="font-inter font-medium text-black text-lg leading-[24px] tracking-[-0.54px] mt-4">
          Your vision deserves a world-class execution.
I’m your go-to design partner for Startups, Agencies, and Creatives to create high-converting, meaningful and purpose driven design for users.
          </p>
        </div>
        {/* client logo */}
        <div className="sl:mt-10 mt-8 sl:max-w-[402px] max-w-[326px] mx-auto">
          <div className="flex gap-10 justify-center items-center">
            <svg
              width="110"
              height="30"
              viewBox="0 0 110 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_279_706)">
                <path
                  d="M5.5254 20.9035C8.55025 20.9035 10.9903 18.8877 10.9903 16.2565C10.9903 12.819 8.1671 12.0127 6.15053 11.6944C4.8196 11.4822 3.93231 11.2276 3.93231 10.4213C3.93231 9.82712 4.41628 9.53005 5.30357 9.53005C6.57401 9.53005 7.29998 10.103 7.68312 10.8032L10.7886 9.16933C9.86102 7.04742 7.84445 5.9228 5.4649 5.9228C2.44005 5.9228 0.201657 7.93862 0.201657 10.5698C0.201657 13.9861 3.18618 14.8136 5.22291 15.1319C6.45302 15.3229 7.25964 15.4502 7.25964 16.299C7.25964 16.978 6.51351 17.2963 5.5254 17.2963C4.25496 17.2963 3.48866 16.8931 3.10551 16.0231L0 17.657C0.927621 19.7789 2.94419 20.9035 5.5254 20.9035Z"
                  fill="#9F9F9F"
                />
                <path
                  d="M18.2321 13.3495C19.5631 13.3495 20.0672 14.4741 20.0672 15.8109V20.564H23.697V15.3441C23.697 12.2249 21.9628 9.63615 18.2321 9.63615C14.5015 9.63615 12.7672 12.2249 12.7672 15.3441V20.564H16.3971V15.8109C16.3971 14.4741 16.9012 13.3495 18.2321 13.3495Z"
                  fill="#9F9F9F"
                />
                <path
                  d="M30.2428 20.8823C31.4125 20.8823 32.3199 20.4791 32.9652 19.7789V20.564H36.3934V15.238C36.3934 11.9915 34.0743 9.61493 30.8478 9.61493C27.702 9.61493 25.3023 12.1612 25.3023 15.238C25.3023 18.336 27.2987 20.8823 30.2428 20.8823ZM30.8478 17.2963C29.6984 17.2963 28.9321 16.3626 28.9321 15.2592C28.9321 14.1346 29.6984 13.201 30.8478 13.201C31.9973 13.201 32.7636 14.1346 32.7636 15.2592C32.7636 16.3626 31.9973 17.2963 30.8478 17.2963Z"
                  fill="#9F9F9F"
                />
                <path
                  d="M42.0374 25.4444V20.2882C42.6625 20.6489 43.4087 20.8823 44.1548 20.8823C47.3611 20.8823 49.4987 18.6331 49.4987 15.238C49.4987 12.1612 47.099 9.63615 43.9531 9.63615C40.7266 9.63615 38.4076 11.9915 38.4076 15.238V25.4444H42.0374ZM43.9531 17.2963C42.8037 17.2963 42.0374 16.3626 42.0374 15.2592C42.0374 14.1346 42.8037 13.2222 43.9531 13.2222C45.1026 13.2222 45.8689 14.1346 45.8689 15.2592C45.8689 16.3626 45.1026 17.2963 43.9531 17.2963Z"
                  fill="#9F9F9F"
                />
                <path
                  d="M56.6552 20.8823C59.801 20.8823 62.2007 18.3572 62.2007 15.2804C62.2007 11.8854 60.0632 9.63615 56.8568 9.63615C56.1107 9.63615 55.3646 9.86956 54.7394 10.2303V5.07404H51.1096V15.2804C51.1096 18.527 53.4286 20.8823 56.6552 20.8823ZM56.6552 17.2963C55.5057 17.2963 54.7394 16.3838 54.7394 15.2592C54.7394 14.1558 55.5057 13.2222 56.6552 13.2222C57.8046 13.2222 58.5709 14.1558 58.5709 15.2592C58.5709 16.3838 57.8046 17.2963 56.6552 17.2963Z"
                  fill="#9F9F9F"
                />
                <path
                  d="M68.9539 20.8823C72.0997 20.8823 74.4994 18.336 74.4994 15.238C74.4994 12.1612 72.0997 9.61493 68.9539 9.61493C65.808 9.61493 63.4083 12.1612 63.4083 15.238C63.4083 18.336 65.808 20.8823 68.9539 20.8823ZM68.9539 17.2963C67.8044 17.2963 67.0381 16.3626 67.0381 15.2592C67.0381 14.1346 67.8044 13.201 68.9539 13.201C70.1033 13.201 70.8696 14.1346 70.8696 15.2592C70.8696 16.3626 70.1033 17.2963 68.9539 17.2963Z"
                  fill="#9F9F9F"
                />
                <path
                  d="M81.262 20.8823C84.4079 20.8823 86.8076 18.336 86.8076 15.238C86.8076 12.1612 84.4079 9.61493 81.262 9.61493C78.1162 9.61493 75.7165 12.1612 75.7165 15.238C75.7165 18.336 78.1162 20.8823 81.262 20.8823ZM81.262 17.2963C80.1126 17.2963 79.3463 16.3626 79.3463 15.2592C79.3463 14.1346 80.1126 13.201 81.262 13.201C82.4115 13.201 83.1777 14.1346 83.1777 15.2592C83.1777 16.3626 82.4115 17.2963 81.262 17.2963Z"
                  fill="#9F9F9F"
                />
                <path
                  d="M92.4611 20.564V16.596H93.187C93.2475 16.7446 93.3484 16.9143 93.4492 17.0628L95.8691 20.564H100.124L96.2522 15.2168L100.144 9.95444H95.8489L93.4492 13.3495C93.3282 13.498 93.2475 13.6678 93.1669 13.8375H92.4611V5.07404H88.8312V20.564H92.4611Z"
                  fill="#9F9F9F"
                />
                <path
                  d="M105.463 20.9035C107.923 20.9035 110 19.4606 110 17.2326C110 13.2434 104.676 14.4529 104.676 13.1373C104.676 12.819 104.959 12.5856 105.483 12.5856C106.169 12.5856 106.854 12.9676 107.076 13.6041L109.698 12.0339C109.113 10.8456 107.802 9.61493 105.402 9.61493C102.66 9.61493 101.046 11.2276 101.046 13.2222C101.046 17.3387 106.37 16.0231 106.37 17.3175C106.37 17.657 106.027 17.9328 105.281 17.9328C104.374 17.9328 103.829 17.5933 103.466 16.9143L100.845 18.4633C101.712 20.076 103.184 20.9035 105.463 20.9035Z"
                  fill="#9F9F9F"
                />
              </g>
              <defs>
                <clipPath id="clip0_279_706">
                  <rect
                    width="110"
                    height="18"
                    fill="white"
                    transform="translate(0 6)"
                  />
                </clipPath>
              </defs>
            </svg>

            {/* kubikk */}
            <svg
              width="95"
              height="30"
              viewBox="0 0 95 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.0522 14.4636C35.5336 12.0017 37.459 10.5291 40.2555 10.5291C43.5562 10.5291 45.367 12.3698 45.367 15.7061V20.2388C45.367 20.86 45.6421 21.0901 46.1234 21.0901H46.6048V22.9998H45.8484C44.7481 23.0228 43.2582 22.8388 43.1436 21.1131C42.5935 22.2866 41.2411 23.2759 39.224 23.2759C36.7714 23.2759 34.8459 21.9644 34.8459 19.8016C34.8459 17.3627 36.6568 16.6494 39.4532 16.1202L42.9373 15.43C42.9144 13.4743 42.0204 12.5079 40.2555 12.5079C38.8343 12.5079 37.8945 13.2442 37.5736 14.6247L35.0522 14.4636ZM37.3673 19.7556C37.3673 20.6529 38.1467 21.3892 39.7512 21.3892C41.562 21.3662 42.9831 20.0777 42.9831 17.4547V17.2937L40.393 17.7539C38.7197 18.053 37.3673 18.214 37.3673 19.7556Z"
                fill="#9F9F9F"
              />
              <path
                d="M58.124 10.8053L53.6772 22.9998H50.7203L46.2735 10.8053H48.8178L52.1873 20.4919L55.5568 10.8053H58.124Z"
                fill="#9F9F9F"
              />
              <path
                d="M59.4201 10.8053H61.8498V22.9998H59.4201V10.8053ZM59.3743 9.01058V6.68671H61.9186V9.01058H59.3743Z"
                fill="#9F9F9F"
              />
              <path
                d="M63.8861 14.4636C64.3675 12.0017 66.2929 10.5291 69.0893 10.5291C72.3901 10.5291 74.2009 12.3698 74.2009 15.7061V20.2388C74.2009 20.86 74.4759 21.0901 74.9573 21.0901H75.4386V22.9998H74.6822C73.582 23.0228 72.0921 22.8388 71.9775 21.1131C71.4273 22.2866 70.075 23.2759 68.0579 23.2759C65.6052 23.2759 63.6798 21.9644 63.6798 19.8016C63.6798 17.3627 65.4906 16.6494 68.2871 16.1202L71.7712 15.43C71.7483 13.4743 70.8543 12.5079 69.0893 12.5079C67.6682 12.5079 66.7284 13.2442 66.4075 14.6247L63.8861 14.4636ZM66.2012 19.7556C66.2012 20.6529 66.9805 21.3892 68.5851 21.3892C70.3959 21.3662 71.817 20.0777 71.817 17.4547V17.2937L69.2269 17.7539C67.5536 18.053 66.2012 18.214 66.2012 19.7556Z"
                fill="#9F9F9F"
              />
              <path
                d="M77.2029 8.04422H79.6326V10.8053H82.8416V12.784H79.6326V19.5025C79.6326 20.4919 80.114 20.9981 81.0537 20.9981H82.8187V22.9998H80.8016C78.4636 22.9998 77.2029 21.7804 77.2029 19.5025V12.784H75.3462V10.8053H77.2029V8.04422Z"
                fill="#9F9F9F"
              />
              <path
                d="M89.2239 23.2759C85.7169 23.2759 83.4247 20.791 83.4247 16.9025C83.4247 13.0141 85.7169 10.5291 89.2239 10.5291C92.708 10.5291 95.0002 13.0141 95.0002 16.9025C95.0002 20.791 92.708 23.2759 89.2239 23.2759ZM85.9461 16.9025C85.9461 19.5715 87.1609 21.1591 89.2239 21.1591C91.2868 21.1591 92.4788 19.5715 92.4788 16.9025C92.4788 14.2335 91.2868 12.6459 89.2239 12.6459C87.1609 12.6459 85.9461 14.2335 85.9461 16.9025Z"
                fill="#9F9F9F"
              />
              <path
                d="M13.371 16.8L-4.19617e-05 6L25.0359 14.4259C26.0553 14.7689 26.7419 15.7244 26.7419 16.8H25.9295C23.6637 16.8 21.5555 17.9784 20.3629 19.9049C18.9011 22.2664 15.9462 23.24 13.371 22.2L-4.19617e-05 16.8H13.371Z"
                fill="#9F9F9F"
              />
            </svg>

            {/*  */}
            <svg
              width="95"
              height="30"
              viewBox="0 0 95 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_279_719)">
                <path
                  d="M0 6H3.05755V10.4374H9.7122V13.336H3.05755V18.7824C3.05755 19.9445 3.99968 20.8867 5.16186 20.8867C6.32404 20.8867 7.26617 19.9445 7.26617 18.7824V18.1312H10.4676V18.7662C10.4676 21.6567 8.12435 24 5.2338 24C2.34325 24 0 21.6567 0 18.7662V6Z"
                  fill="#9F9F9F"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.1749 20.9013C22.661 23.034 20.4722 23.9645 18.848 23.9645C14.8748 23.9645 11.6538 20.8082 11.6538 16.9148C11.6538 13.0213 14.8748 9.86505 18.848 9.86505C22.716 9.86505 25.8709 12.8562 26.0355 16.6067L26.0423 16.5927V23.4635H23.1646V22.5688L23.1749 20.9013ZM22.661 16.8432C22.661 19.0765 20.9217 20.8869 18.7761 20.8869C16.6305 20.8869 14.8912 19.0765 14.8912 16.8432C14.8912 14.6099 16.6305 12.7994 18.7761 12.7994C20.9217 12.7994 22.661 14.6099 22.661 16.8432Z"
                  fill="#9F9F9F"
                />
                <path
                  d="M28.6318 16.3561V23.9642H31.6174V16.4121C31.6174 14.6539 33.0427 13.2287 34.8009 13.2287C36.5591 13.2287 37.9843 14.6539 37.9843 16.4121V23.9642H41.0419V16.3561C41.0419 12.9292 38.2638 10.1511 34.8369 10.1511C31.4099 10.1511 28.6318 12.9292 28.6318 16.3561Z"
                  fill="#9F9F9F"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M75.4685 23.9645V15.3147C75.4685 12.3049 77.9084 9.86505 80.9181 9.86505C82.675 9.86505 84.2377 10.6964 85.2343 11.9872C86.2309 10.6964 87.7936 9.86505 89.5504 9.86505C92.5602 9.86505 95.0001 12.3049 95.0001 15.3147V23.9645H91.9425V15.3706C91.9425 14.0297 90.8554 12.9426 89.5145 12.9426C88.1735 12.9426 87.0864 14.0297 87.0864 15.3706V23.9645H86.3678H84.1008H83.3102V15.3706C83.3102 14.0297 82.2231 12.9426 80.8822 12.9426C79.5412 12.9426 78.4541 14.0297 78.4541 15.3706V23.9645H75.4685Z"
                  fill="#9F9F9F"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M69.7467 19.807H73.0201C72.113 22.2993 69.744 23.9581 67.0918 23.9581H66.477C62.7513 23.9581 59.7424 20.8613 59.7804 17.1359C59.8209 13.1626 63.0979 9.92661 67.0705 10.0098C70.6562 10.0849 73.5237 13.0131 73.5237 16.5995V18.1251H63.0201C63.2256 19.7807 64.6324 21.0237 66.3007 21.0237H67.721C68.5692 21.0237 69.3482 20.5558 69.7467 19.807ZM70.2492 15.6199H63.1629C63.5438 14.1252 64.8899 13.0791 66.4324 13.0791H67.0686C68.5921 13.0791 69.9126 14.134 70.2492 15.6199Z"
                  fill="#9F9F9F"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M54.6151 12.9282C54.1012 10.9744 51.9124 9.86502 50.2882 9.86502C46.315 9.86502 43.094 13.0213 43.094 16.9147C43.094 20.8082 46.315 23.9644 50.2882 23.9644C54.1561 23.9644 57.3111 20.9733 57.4757 17.2228L57.4824 17.2368V6.0002H54.6048V11.2606L54.6151 12.9282ZM54.1012 16.9863C54.1012 14.753 52.3618 12.9425 50.2163 12.9425C48.0707 12.9425 46.3314 14.753 46.3314 16.9863C46.3314 19.2196 48.0707 21.03 50.2163 21.03C52.3618 21.03 54.1012 19.2196 54.1012 16.9863Z"
                  fill="#9F9F9F"
                />
              </g>
              <defs>
                <clipPath id="clip0_279_719">
                  <rect width="95" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p
            className="font-inter font-medium text-xs leading-3 tracking-[-0.36px] text-[#0000004D]
          text-center sl:mt-5 mt-4"
          >
            Recent Clients
          </p>
        </div>
        {/* project  */}

        <div className="sl:grid sl:grid-cols-2 flex gap-3 sl:gap-x-3 sl:gap-y-6  sl:mt-10 mt-8 overflow-x-scroll sl:overflow-x-visible ">
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
                <p className="font-inter text-sm leading-3 -tracking-0.4 text-[#27272780]  mt-3">
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

        <div className="sl:max-w-[402px] max-w-[326px] sl:ml-5 mx-auto sl:mx-0 mt-10">
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
          <div className="flex gap-5 mt-10 mb-8 sl:mb-10  ">
            <Link
              href={"https://x.com/sajon_co"}
              target="_blank"
              className="font-inter font-medium text-sm leading-5  -tracking-0.4   rounded-full text-sajonGray   flex items-center justify-center gap-2"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 2.5H6L13 13.5H10L3 2.5Z"
                  stroke="#939393"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.1175 8.97058L3 13.5"
                  stroke="#939393"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.9999 2.5L8.88245 7.02938"
                  stroke="#939393"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Twitter
            </Link>
            <Link
              href={"https://www.instagram.com/sajon.co"}
              target="_blank"
              className="font-inter font-medium text-sm leading-5  -tracking-0.4   rounded-full text-sajonGray   flex items-center justify-center gap-2"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5Z"
                  stroke="#939393"
                  strokeWidth="1.33333"
                  strokeMiterlimit="10"
                />
                <path
                  d="M11 2H5C3.34315 2 2 3.34315 2 5V11C2 12.6569 3.34315 14 5 14H11C12.6569 14 14 12.6569 14 11V5C14 3.34315 12.6569 2 11 2Z"
                  stroke="#939393"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.25 5.5C11.6642 5.5 12 5.16421 12 4.75C12 4.33579 11.6642 4 11.25 4C10.8358 4 10.5 4.33579 10.5 4.75C10.5 5.16421 10.8358 5.5 11.25 5.5Z"
                  fill="#939393"
                />
              </svg>
              Instagram{" "}
            </Link>
            <Link
              href={"https://www.linkedin.com/in/sajonislam/"}
              target="_blank"
              className="font-inter font-medium text-sm leading-5  -tracking-0.4   rounded-full text-sajonGray   flex items-center justify-center gap-2"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 2H2.5C2.22386 2 2 2.22386 2 2.5V13.5C2 13.7761 2.22386 14 2.5 14H13.5C13.7761 14 14 13.7761 14 13.5V2.5C14 2.22386 13.7761 2 13.5 2Z"
                  stroke="#939393"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.5 7V11"
                  stroke="#939393"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.5 7V11"
                  stroke="#939393"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.5 8.75C7.5 8.28587 7.68437 7.84075 8.01256 7.51256C8.34075 7.18437 8.78587 7 9.25 7C9.71413 7 10.1592 7.18437 10.4874 7.51256C10.8156 7.84075 11 8.28587 11 8.75V11"
                  stroke="#939393"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.5 6C5.91421 6 6.25 5.66421 6.25 5.25C6.25 4.83579 5.91421 4.5 5.5 4.5C5.08579 4.5 4.75 4.83579 4.75 5.25C4.75 5.66421 5.08579 6 5.5 6Z"
                  fill="#939393"
                />
              </svg>
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
