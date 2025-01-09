"use client"
import Image from 'next/image';
import sajonImg from '../../public/assets/sajon.svg'
import Link from 'next/link';
import Bookcall from './bookcall';


const Navbar = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const instagramLink = isMobile ? 'instagram://user?username=sajon.co' : 'https://www.instagram.com/sajon.co';
    return (
        <>
            <div className='p-3 rounded-full bg-[#F4F4F4] flex justify-between items-center mb-9 mt-6 sl:max-w-[420px] max-w-[326px] mx-auto'>
                <Link href={instagramLink}
                    className='flex gap-3 items-center'
                    target="_blank"
                    rel="noopener noreferrer">
                    <Image
                        src={sajonImg}
                        width={38}
                        height={38}
                        alt="Picture of the Sajon Islam"
                    />
                    <p className='font-inter text-black text-base font-medium leading-5 -tracking-0.4'>Sajon Islam</p>
                </Link>

                <Bookcall />

            </div>
        </>
    );
};

export default Navbar;