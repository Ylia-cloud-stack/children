import { useEffect, useState } from 'react';
import {Link} from "react-router-dom";

export default function Landing() {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowContent(true), 4500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div>
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={'/assets/video.mp4'}
                    autoPlay
                    muted
                    playsInline
                />
                {showContent &&
                    <div className="relative z-20 flex flex-col items-center justify-center h-full gap-6">
                        <h1 className="text-[64px] font-cruin font-black text-[#f8c8dc] uppercase tracking-wider drop-shadow-[2px_2px_0_rgba(255,0,128,0.9)]">
                            СТРАНА ЧУДЕС
                        </h1>
                        <p className="text-[24px] font-cruin font-black text-purple-600">ДЕТСКИЙ САД НОВОГО ПОКОЛЕНИЯ</p>
                        <Link to="/geolocation">
                        <button className="bg-pink-400 hover:bg-pink-500 text-white text-2xl font-semibold px-10 py-5 rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition duration-300 cursor-pointer">
                            в вашем районе
                        </button>
                        </Link>
                    </div>
                }
            </div>
        </>
    );
}
