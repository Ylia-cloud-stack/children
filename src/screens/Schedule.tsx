import PageWithBg from "../components/PageWithBg.tsx";

const schedule = "7.00-8.30 - Прием детей\n" +
    "8.10 - Зарядка\n" +
    "8.30 - Завтрак\n" +
    "9.00-10.00 - Занятия (в зависимости от дня недели\n" +
    "-хореограф, английский, китайский,логопед)\n" +
    "10.30-11.30 - Прогулка\n" +
    "12.00 - Обед\n" +
    "12.30-15.00 - Дневной сон\n" +
    "15.30 - Полдник\n" +
    "16.00-17.00 - Занятия\n" +
    "17.00 - Прогулка\n" +
    "18:00 - Ужин\n" +
    "19.00 - Уход детей домой"

export default function Schedule() {
    return (
        <PageWithBg src="/assets/shed.png">
            <div className="bg-white border-[5px] border-pink-400/60 p-[40px] rounded-[25px] max-w-[600px] mx-auto max-[768px]:p-[15px] max-[768px]:max-w-[350px]">
                <div className='text-center text-2xl text-[#3f80ad] whitespace-pre-line max-[768px]:text-[0.75rem]'>
                    {schedule}
                </div>
            </div>
        </PageWithBg>
    )
}