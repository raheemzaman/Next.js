
import { PlayCircleIcon } from "@heroicons/react/24/solid"; 

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  time: string;
  number: string;
}

 function VideoCard({ imageUrl, title, description, time,number }: CardProps) {
  return (
    <div className="card w-[304px] lg:w-[280px] h-[352px]">
      <div className="body">
       
        <div className="bg-conic-gradient lg:w-[280px] h-[180px] rounded-[20px] flex flex-wrap  items-center justify-center relative">
          <div className="bg-cover w-[200px] h-[108px] rounded-[5px]" style={{ backgroundImage: `url(${imageUrl})` }}></div>
          
          <div className="flex gap-[5px] p-[5px] rounded-[5px] items-center justify-center text-white absolute bottom-[5px] left-[11px] backdrop-blur-sm shadow-lg">
            <PlayCircleIcon className="h-[16px] w-[16px] bg-transparent" />
            <time className="text-[16px] font-[500] text-white">{time}</time>
          </div>
        </div>

        
        <div className="px-[8px] py-[10px]">
          <p className="font-[500] text-[14px] leading-[32px] text-[#45556c]">{number}</p>
          <h6 className="text-[16px] font-[500] leading-[32px] font-sans">{title}</h6>
          <p className="text-[14px] font-[400] tracking-tight leading-[24px] text-[#45556c] font-sans">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
export default VideoCard;
