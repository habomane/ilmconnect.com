import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { ButtonColors } from "./Button";


type LinkButtonProps = {
  children: ReactNode;
  to: string;
  color: ButtonColors;
  callBack?: () => void;
};

export const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  to,
  color,
  callBack
}) => {
  let tailwindClass = "rounded-full px-8 py-2 hover:translate-y-[-3px] active:translate-y-0 hover:shadow-md";

  switch(color) {
    case ButtonColors.purple:
        tailwindClass += " bg-customPurple hover:bg-purpleHover";
        break;
    case ButtonColors.black:
        tailwindClass += " bg-customBlack hover:bg-customGrey";
        break;
    default:
        tailwindClass += " bg-white border border-black hover:bg-hoverGrey";

}
  return (
    <Link to={to}>
      <div onClick={callBack}
      className={tailwindClass}>{children}</div>
    </Link>
  );
};


type LinkItemProps = {
    children: ReactNode;
    path: string;
}

export const LinkItem: React.FC<LinkItemProps> = ({ children, path }) => {
    const location = useLocation(); 
    const currentPath = location.pathname; 
    const activeClass = 'text-customPurple';
    const linkClass = 'px-4 py-4';
  
    return (<Link to={path} className={`${linkClass} ${currentPath === path ? activeClass : 'text-black'}`}> 
    {children}
  </Link> )
}