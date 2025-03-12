import VideoCard from "../common/main-card/maincard"

function MainCard() {
    return (
       <div className="container mx-auto px-[30px]">
        <div className="lg:w-[56%] mx-auto mt-[50px]">
         <div>
            <button className="border-[2px] border-blue-500 rounded-[50px] px-[10px] py-[8px] text-gray-500"><span className="text-[16px] text-blue-500">02</span>  |  <span className="text-[18px] font-[500] text-[blue] tracking-tight">Secreenshots</span></button>
             <h5 className="text-[32px] pt-[20px] leading-[40px] lg:font-[700] font-san text-[#0f172b] lg:tracking-normal">Over an hour of high quality, step-by-step video content to sharpen your icon design workflow.</h5>
             <p className="text-[21px] pt-[20px] leading-[32px] font-[400]">Learn how to design your very first icons in a series of screencasts that will teach you everything you need to know to go from beginner to pro in just over an hour.</p>
         </div>
        </div>
        
        <div className="flex flex-wrap justify-center  gap-[30px] mt-[50px] lg:w-[100%]"> 
        <VideoCard 
            imageUrl="/assets/images/card.jpg"
            number="01"
            title="Getting started with Figma"
            description="Get familiar with the Figma UI, the different tools it offers, and the most important features."
            time="16:54"
        />
        <VideoCard 
            imageUrl="/assets/images/card.jpg"
            number="02"
            title="Setting up your artboard"
            description="Learn how to create a new artboard and configure your grid and rulers for designing icons."
            time="9:12"
        />
        <VideoCard 
            imageUrl="/assets/images/card.jpg"
            number="03"
            title="Getting started with Figma"
            description="Using basic shapes and boolean operations, learn how to design your own notification icon from scratch."
            time="21:23"
        />
        <VideoCard 
            imageUrl="/assets/images/card.jpg"
            number="04"
            title="Getting started with Figma"
            description="Learn the techniques you need to know to adapt your original icon to a modern duotone style."
            time="28:44"
        />

        </div>
        </div>
       
       
         
      
    )
}
export default MainCard
