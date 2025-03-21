import { Link as RouterLink } from "react-router-dom";

function Link({ to, children, className = "" }) {
  return (
    <RouterLink
      to={to}
      className={`
        ${className}
        text-bianco hover:text-grigio
        xs:text-[10px] 
        sm:text-[20px] 
        md:text-[30px] md:text-center
        lg:text-[40px]
        2xl:text-[60px]  
        3xl:text-[80px] 
      `}
    >
      {children}
    </RouterLink>
  );
}

export default Link;

