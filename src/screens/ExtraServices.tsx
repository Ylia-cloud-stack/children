import PageWithBg from "../components/PageWithBg.tsx";
import {ServicesData} from "./utils/ServicesData.ts";



export default function ExtraServices() {
    return (
        <PageWithBg src="/assets/ser.png">
            <div className="flex justify-between max-[768px]:flex-col max-[768px]:gap-4">
                {
                    ServicesData.slice(3,5).map((item)=>{
                        return (
                            <div key={item.price} className="flex-1 font-cruin font-black text-[#f8c8dc] uppercase text-center flex flex-col gap-6 bg-white border-[5px] border-pink-400/60 p-[40px] rounded-[25px] mx-[40px] max-[950px]:gap-2 max-[768px]:p-[15px]">
                                <h2 className='text-x max-[768px]:text-[0.75rem]'>{item.title}</h2>
                                <p className="text-2xl text-[#a9d1e5] max-[768px]:text-[0.75rem]">{item.price}</p>
                                <p className='text-xs text-[#d18aaa] font-medium whitespace-pre-line max-[768px]:text-[0.35rem]'>{item.about}</p>
                            </div>
                        )
                    })
                }
            </div>
        </PageWithBg>
    )
}
