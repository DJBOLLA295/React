import Label from "./Label";

function InputMinutes ({ inputMinutes, onChange }) {
    return (
      <div className=" flex flex-col items-center justify-center">
    <Label htmlFor="minutes" className={`text-sabbia text-center
        
    `}>
        Inserisci i minuti:
    </Label>
    <input
        id="minutes"
        type="number"
        value={inputMinutes}
        onChange={onChange}
        className={`            
            text-center  bg-grigio text-giallo font-semibold 
            w-[60px] h-[20px] rounded-[10px] m-[10px] text-[10px]
            xs:w-[100px] xs:h-[20px] xs:rounded-[8px] xs:m-[5px] xs:text-[12px]
            sm:w-[120px] sm:h-[20px] sm:rounded-[8px] sm:m-[7.5px] sm:text-[14px]
            md:w-[140px] md:h-[30px] md:rounded-[10px] md:m-[10px] md:text-[16px]
            lg:w-[160px] lg:h-[40px] lg:rounded-[12px] lg:m-[12.5px] lg:text-[20px]
            xl:w-[200px] xl:h-[50px] xl:rounded-[14px] xl:m-[15px] xl:text-[25px]
            2xl:w-[250px] 2xl:h-[60px] 2xl:rounded-[16px] 2xl:m-[17.5px] 2xl:text-[30px]
            3xl:w-[300px] 3xl:h-[80px] 3xl:rounded-[18px] 3xl:m-[20px] 3xl:text-[40px]
           
        `}
        min="0"
    />
</div>
    );
  };
  
  export default InputMinutes;
  
