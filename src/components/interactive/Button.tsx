import { ReactNode } from "react"

export enum ButtonColors {
    purple,
    black,
    white
}

type ButtonProps = {
    children: ReactNode,
    color: ButtonColors,
    callBack: () => void;
}

export const Button: React.FC<ButtonProps> = ( { children, color, callBack } ) => {
    let tailwindClass = "rounded-full px-8 py-2.5 ";

    switch(color) {
        case ButtonColors.purple:
            tailwindClass += " bg-customPurple hover:bg-purpleHover";
            break;
        case ButtonColors.black:
            tailwindClass += " bg-customBlack hover:bg-customGrey";
            break;
        default:
            tailwindClass += "bg-white border border-black hover:bg-slate-200";

    }
    return <button 
    className={tailwindClass}
    onClick={callBack}>{ children }</button>
}