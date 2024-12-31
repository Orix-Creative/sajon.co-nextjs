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
            {/* <button
                onClick={handleCopy}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                {copied ? "Copied!" : "Copy Mail"}
            </button> */}
            <div onClick={handleCopy} className="bg-[#F5F5F5] rounded-full text-black  py-2 px-4 inline-block font-inter text-base leading-6 font-medium -tracking-0.4 cursor-pointer ">
                <p>Copy email</p>
            </div>


        </>

    );
};

export default CopyMailButton;
