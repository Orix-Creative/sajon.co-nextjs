"use client";

import { useState } from "react";

const CopyMailButton = () => {
    const email = 'contact@sajon.co'
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    };

    return (
        <>
            <div onClick={handleCopy} className="bg-[#F5F5F5] rounded-full text-black  py-2 px-4 inline-block font-inter text-base leading-6 font-medium -tracking-0.4 cursor-pointer ">
                <p>Copy email</p>
            </div>

            {/* <div
                onClick={handleCopy}
                className="bg-[#f5f5f5] px-4 py-2 rounded-full font-inter text-base leading-6 font-medium -tracking-0.4 cursor-pointer relative inline-flex items-center overflow-hidden"
            >
                <p className="">Cop</p>
                <div className="relative w-auto">
                    <p
                        className={`c-done absolute top-0 left-0 transition-transform duration-500 ${copied ? "transform translate-x-0 translate-y-0" : "transform -translate-x-full -translate-y-[110%]"
                            }`}
                    >
                        ied!
                    </p>
                    <p
                        className={`c-def relative transition-transform duration-500 ${copied ? "transform translate-x-full translate-y-[-2rem]" : "transform translate-x-0 translate-y-0"
                            }`}
                    >
                        y Email
                    </p>
                </div>
            </div> */}

        </>

    );
};

export default CopyMailButton;
