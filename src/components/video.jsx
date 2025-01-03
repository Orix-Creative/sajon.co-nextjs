"use client"
import { useEffect, useRef } from 'react';

const Video = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.play().catch((error) => {
                console.error('Autoplay prevented:', error);
            });
            video.loop = true;
        }
    }, []);

    return (
        <>
            <video
                ref={videoRef}
                muted
                playsInline
                className={`w-full   sl:h-[258px] h-[205px] `}
                style={{ objectFit: 'cover' }}
            >
                <source src={'https://cdn.prod.website-files.com/675aaa451de0011e537740d8%2F67752af8b700ee94518b5b09_Website%20Reel-transcode.mp4'} type="video/mp4" />

            </video>
        </>
    );
};

export default Video;


