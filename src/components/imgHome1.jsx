import meditazione from '../img/meditazione.jpeg'

function ImgHome1() {
    return (
        <img
            className="
            w-[100px] h-[50px] rounded-[10px] m-[10px] text-[10px]
            xs:w-[200px] xs:h-[100px] xs:rounded-[8px] xs:m-[5px] xs:text-[12px]
            sm:w-[300px] sm:h-[150px] sm:rounded-[8px] sm:m-[7.5px] sm:text-[14px]
            md:w-[400px] md:h-[200px] md:rounded-[10px] md:m-[10px] md:text-[16px]
            lg:w-[500px] lg:h-[250px] lg:rounded-[12px] lg:m-[12.5px] lg:text-[20px]
            2xl:w-[600px] 2xl:h-[300px] 2xl:rounded-[16px] 2xl:m-[17.5px] 2xl:text-[25px]
            3xl:w-[700px] 3xl:h-[350px] 3xl:rounded-[18px] 3xl:m-[20px] 3xl:text-[30px]"
            src={meditazione}
            alt="meditazione"
        />
    );
}
export default ImgHome1