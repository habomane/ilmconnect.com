import { ReactNode } from "react"

export enum ButtonColors {
    purple,
    black,
    white,
    red
}

type ButtonProps = {
    children: ReactNode,
    color: ButtonColors,
    callBack: () => void;
}

export const Button: React.FC<ButtonProps> = ( { children, color, callBack } ) => {
    let tailwindClass = "rounded-full px-8 py-2 hover:translate-y-[-3px] active:translate-y-0 hover:shadow-md";

    switch(color) {
        case ButtonColors.purple:
            tailwindClass += " bg-customPurple hover:bg-purpleHover";
            break;
        case ButtonColors.black:
            tailwindClass += " bg-customBlack hover:bg-customGrey";
            break;
        case ButtonColors.red:
            tailwindClass += " bg-red-500 hover:bg-red-400";
            break;
        default:
            tailwindClass += "bg-white border border-black hover:bg-slate-200";

    }
    return <button 
    className={tailwindClass}
    onClick={callBack}>{ children }</button>
}