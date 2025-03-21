function TimerDisplay ({ time }) {
    const formatTime = (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };
  
    return (
      <div className={`
       bg-blu text-arrancioChiaro text-center flex items-center justify-center
        w-[30px] h-[20px] rounded-[10px] m-[10px] text-[10px]
        xs:w-[40px] xs:h-[20px] xs:rounded-[8px] xs:m-[5px] xs:text-[12px]
        sm:w-[50px] sm:h-[20px] sm:rounded-[8px] sm:m-[7.5px] sm:text-[14px]
        md:w-[60px] md:h-[30px] md:rounded-[10px] md:m-[10px] md:text-[16px]
        lg:w-[70px] lg:h-[40px] lg:rounded-[12px] lg:m-[12.5px] lg:text-[20px]
        xl:w-[80px] xl:h-[50px] xl:rounded-[14px] xl:m-[15px] xl:text-[25px]
        2xl:w-[100px] 2xl:h-[60px] 2xl:rounded-[16px] 2xl:m-[17.5px] 2xl:text-[30px]
        3xl:w-[120px] 3xl:h-[80px] 3xl:rounded-[18px] 3xl:m-[20px] 3xl:text-[40px]       
    `}>
        {formatTime(time)}
    </div>
    );
  };
  
  export default TimerDisplay;

