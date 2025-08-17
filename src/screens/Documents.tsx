import {
     linksConfig,
   sectionsConfig,
} from "./utils/dataForDocuments.ts";
import {Item} from "../components/Item.tsx";


export default function Documents() {
    return (
        <div className='bg-[#a9d1e5] pt-[150px] bg-cover pb-[50px]'>
            <div className="bg-white border-[5px] border-pink-400/60 p-[40px] rounded-[25px] mx-[40px] max-[768px]:p-4">
               <div>
                   <h1 className="font-cruin font-black text-[#f8c8dc] uppercase text-2xl text-center mb-[40px] max-[768px]:text-[0.75rem] max-[768px]:mb-[20px]">Сведения об образовательной организации</h1>
                   <ul className='text-sm max-[768px]:text-[0.4375rem]'>
                       {
                           linksConfig.map((link) => {
                               return <li>
                                   <a href={link.href} key={link.href}>
                                       {link.a}
                                   </a>
                               </li>
                           })
                       }
                   </ul>
               </div>
                {
                    sectionsConfig.map((section) => {
                        return <section key={section.id} id={section.id}>
                            <h2 className="font-cruin font-black text-[#f8c8dc] uppercase text-center py-[30px] text-xl max-[768px]:text-[0.75rem] max-[768px]:py-[15px]">{section.subtitle}</h2>
                            <ul>
                                {section.configName.map((item) => (<li className='flex justify-between gap-8 mb-2 last:mb-0'>
                                    <p className='text-sm max-w-[550px] text-left max-[768px]:text-[0.4375rem]'>{item.title}</p>
                                    <Item value={item.value}/>
                                </li>))}
                            </ul>
                        </section>
                    })

                }
            </div>
        </div>
    )
}