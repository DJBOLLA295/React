function Title({children}) {
  return (
    <h1
      className="
      text-center text-arrancioScuro 
      xs:text-[20px]
      sm:text-[40px]   
      md:text-[60px]   
      lg:text-[80px] 
      xl:text-[100px]   
      2xl:text-[120px]   
      3xl:text-[140px]"
    >
      {children}
    </h1>
  );
}
export default Title;
