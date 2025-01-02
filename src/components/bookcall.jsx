"use client"
import { getCalApi } from '@calcom/embed-react';
import React, { useEffect } from 'react';

const Bookcall = ({ footer }) => {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "30min" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])
    return (
        <>
            {
                footer ? <div data-cal-namespace="30min"
                    data-cal-link="testingmror/30min"
                    data-cal-config='{"layout":"month_view"}' className="bg-black rounded-full text-white  py-2 px-4 font-inter text-sm leading-22 font-medium -tracking-0.4 cursor-pointer hover:bg-[#3D3D3D] duration-300 inline-block ">
                    <p>Book a call</p>
                </div> : <div data-cal-namespace="30min"
                    data-cal-link="testingmror/30min"
                    data-cal-config='{"layout":"month_view"}' className="bg-black rounded-full text-white  py-2 px-4 font-inter text-base leading-[24px] font-medium -tracking-0.4 cursor-pointer hover:bg-[#3D3D3D] duration-300 inline-block ">
                    <p>Book a call</p>
                </div>
            }


        </>
    );
};

export default Bookcall;




