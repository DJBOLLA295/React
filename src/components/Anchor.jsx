import { Link } from 'react-router-dom';

function Anchor({ to, children }) { // to instead of children
  return (
    <div className='flex justify-center'>
    <Link
      to={to}
      className="bg-verde text-bianco text-center flex items-center justify-center
      w-[100px] h-[30px] rounded-[10px] m-[10px] text-[10px]
      xs:w-[120px] xs:h-[20px] xs:rounded-[8px] xs:m-[5px] xs:text-[12px]
      sm:w-[140px] sm:h-[20px] sm:rounded-[8px] sm:m-[7.5px] sm:text-[14px]
      md:w-[160px] md:h-[30px] md:rounded-[10px] md:m-[10px] md:text-[16px]
      lg:w-[190px] lg:h-[40px] lg:rounded-[12px] lg:m-[12.5px] lg:text-[20px]
      xl:w-[240px] xl:h-[50px] xl:rounded-[14px] xl:m-[15px] xl:text-[25px]
      2xl:w-[300px] 2xl:h-[60px] 2xl:rounded-[16px] 2xl:m-[17.5px] 2xl:text-[30px]
      3xl:w-[380px] 3xl:h-[80px] 3xl:rounded-[20px] 3xl:m-[20px] 3xl:text-[40px]"
    >
      {children}
    </Link>
    </div>
  );
}

export default Anchor;