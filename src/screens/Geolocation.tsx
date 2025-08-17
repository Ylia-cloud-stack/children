import PageWithBg from "../components/PageWithBg.tsx";
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import MapSingleMarker from "../components/MapSingleMarker.tsx"; // фикс иконок метки

export default function GeolocationPage() {
    const point: [number, number] = [56.247761, 44.040760];
    return (
        <PageWithBg src="/assets/geo.png">
            <div className="bg-white border-[5px] border-pink-400/60 p-10 rounded-[25px] mx-auto w-3/4 max-[1100px]:p-4">
                <div className='flex justify-center max-[1100px]:flex-col max-[1100px]:items-center'>
                    <div className='flex flex-col text-center py-[10%] max-[1100px]:py-4'>
                        <h1 className='font-black text-3xl font-cruin text-pink-400/60 max-[768px]:text-[0.75rem]'>Нижегородская обл., Кстовский р-н</h1>
                        <h1 className='font-black text-3xl font-cruin text-pink-400/60 max-[768px]:text-[0.75rem]'>д. Анкудиновка</h1>
                        <h1 className='font-black text-3xl font-cruin text-pink-400/60 max-[768px]:text-[0.75rem]'> ул. Черкесская, д. 2, помещ. П5</h1>
                    </div>
                    <MapSingleMarker
                        position={point}
                    />
                </div>
            </div>
        </PageWithBg>
    )
}