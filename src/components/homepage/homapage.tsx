 const Home =() => {
  return (
    <div className="container mx-auto  relative w-full">
      <div className="flex flex-col  lg:flex-row">
   <div className="bg-blue-500 text-white w-[50%]  h-[500px]  md:h-[800px] lg:h-[900px] 
                sm:w-[50%] md:w-[50%] lg:w-[360px] rounded-br-[80px] lg:rounded-br-[100px]">
    </div>
        <div className="flex-1">
          <div className="h-auto h-[250px] p-3 md:h-[300px] w-full flex items-center justify-center lg:pt-[100px] text-[#0f172b] bg-[#f7f9fc]">
            <div className="max-w-xl  text-center md:text-center lg:text-left lg:ml-[40px]"> 
              <p className="text-[24px]   md:text-[24px] text-blue-500 lg:font-[400]">★ ★ ★ ★ ★</p>
              <p className="text-[24px] pt-[10px] font-[500] md:text-[24px] lg:text-[20px] font-normal leading-[28px] md:leading-[32px]">
                “This method of designing icons is genius. I wish I <br className="hidden md:block" /> had known this method a lot sooner.”
              </p>
              <p className="mt-2 text-[18px] pt-[10px] font-normal leading-[20px] md:text-[16px]  lg:text-[14px]">
                <span className="text-blue-500">--Stacey Solomon,</span> Founder at Retail Park
              </p>
            </div> 
          </div>
          <div className="mt-[10px] flex items-center justify-center text-center lg:text-left  lg:mt-[90px]">
            <div className="max-w-2xl p-4 lg:ml-[240px]">
              <p className="text-[35px] tracking-normal text-left leading-[37px]  md:text-[64px] lg:text-[64px]  md:leading-[56px] lg:leading-[64px] font-bold font-sans text-[oklch(0.208_0.042_265.755)] ">
                Get lost in the world <br className="hidden md:block" /> of icon design.
              </p>
              <p className="mt-4 text-[24px] text-left font-[400]  text-[oklch(0.446 0.043 257.281)] md:text-[20px] leading-[28px] md:leading-[32px] font-normal lg:text-[24px]">
                A book and video course that teaches you how to <br className="hidden md:block" /> design your own icons from scratch.
              </p>
              <div className="mt-6 space-x-3 text-left">
                <button className="bg-blue-500 text-white px-5 py-2 rounded-md text-[16px] font-normal">
                  Get sample chapter
                </button>
                <button className="bg-white text-blue-500 px-5 py-2 rounded-md border border-blue-500 hover:bg-[#f7f9fc] hover:text-blue text-[16px] font-normal">
                  My Book
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute   top-[70px]  w-[256px]  left-[70px]   md:w-[60%] md:left-[200px] lg:w-[30%] lg:top-[130px]">
  <div className="bg-[url(/assets/images/cover.webp)]
                  h-[342px] sm:h-[342px] md:h-[505px] lg:h-[629px] 
                  w-[256px] sm:w-[256px] md:w-full lg:w-[470px] 
                  bg-cover rounded-md  shadow-xl "></div>
</div>
    </div>
  );
}


export default Home;