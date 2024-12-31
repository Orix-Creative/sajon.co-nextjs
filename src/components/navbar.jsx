import Image from 'next/image';
import sajonImg from '../../public/assets/sajon.svg'
import Link from 'next/link';


const Navbar = () => {
    return (
        <div className='p-8 flex justify-between items-center'>
            <div className='border border-[#0000000D] p-1 rounded-full'>

                <Image
                    src={sajonImg}
                    width={46}
                    height={46}
                    alt="Picture of the author"
                />

            </div>
            <div className='flex gap-1'>
                <Link href={'https://x.com/sajon_co'} target='_blank' className='font-inter font-medium text-sm leading-5 px-3 -tracking-0.4 hover:bg-[#F5F5F5] py-[6px] rounded-full text-sajonGray duration-300'>Twitter</Link>
                <Link href={'https://www.instagram.com/sajon.co'} target='_blank' className='font-inter font-medium text-sm leading-5 px-3 -tracking-0.4  hover:bg-[#F5F5F5] py-[6px] rounded-full text-sajonGray duration-300'>Instagram </Link>
                <Link href={'https://www.linkedin.com/in/sajonislam/'}  target="_blank" className='font-inter font-medium text-sm leading-5 px-3 -tracking-0.4  hover:bg-[#F5F5F5] py-[6px] rounded-full text-sajonGray duration-300'>LinkedIn</Link>
            </div>
        </div>
    );
};

export default Navbar;