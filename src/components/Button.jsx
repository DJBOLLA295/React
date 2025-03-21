function ButtonTimer({ children, onClick, className }) {
    return (
        <button
            type="button"
            className={`text-sabbia text-center
         flex items-center justify-center
        w-[40px] h-[20px] rounded-[10px] m-[10px] text-[10px]
        xs:w-[50px] xs:h-[25px] xs:rounded-[8px] xs:m-[5px] xs:text-[12px]
        sm:w-[60px] sm:h-[28px] sm:rounded-[8px] sm:m-[7.5px] sm:text-[14px]
        md:w-[70px] md:h-[33px] md:rounded-[10px] md:m-[10px] md:text-[16px]
        lg:w-[80px] lg:h-[35px] lg:rounded-[12px] lg:m-[12.5px] lg:text-[20px]
        xl:w-[80px] xl:h-[50px] xl:rounded-[14px] xl:m-[15px] xl:text-[25px]
        2xl:w-[100px] 2xl:h-[60px] 2xl:rounded-[16px] 2xl:m-[17.5px] 2xl:text-[30px]
        3xl:w-[120px] 3xl:h-[80px] 3xl:rounded-[18px] 3xl:m-[20px] 3xl:text-[40px]  
                ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default ButtonTimer;