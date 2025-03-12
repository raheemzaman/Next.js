
import Image from "../../../public/assets/images/figma.jpg";
function SourcesCard(){
    return(
        <div className="container mx-auto px-[30px]">
        <div className="lg:w-[56%] mx-auto mt-[50px]">
         <div>
            <button className="border-[2px] border-blue-500 rounded-[50px] px-[10px] py-[8px] text-gray-500"><span className="text-[16px] text-blue-500">02</span>  |  <span className="text-[18px] font-[500] text-[blue] tracking-tight">Secreenshots</span></button>
             <h5 className="text-[32px] pt-[20px] leading-[40px] lg:font-[700] font-san text-[#0f172b] lg:tracking-normal">Over an hour of high quality, step-by-step video content to sharpen your icon design workflow.</h5>
             <p className="text-[21px] pt-[20px] leading-[32px] font-[400]">Learn how to design your very first icons in a series of screencasts that will teach you everything you need to know to go from beginner to pro in just over an hour.</p>
         </div>
        </div>
          

            <div className="card">
                <div className="body">
                    <div className="bg-[blue] w-[340px] h-[160px] rounded-[10px] p-[20px]"></div>
                </div>
            </div>
 </div>
    )
}
export default SourcesCard;