import { ReactNode } from "react";

type InputTextProps = {
    label: string;
    type: string;
    callBack: (e: any) => void;
    placeholder?: string;
}

type InputTextareaProps = {
    children: ReactNode;
    label: string;
    callBack: (e: any) => void;
    placeholder?: string;
}

type InputDropwdownProps = {
    label: string;
    options: string[];
    callBack: (e: any) => void;
}

export const InputText: React.FC<InputTextProps> = ({ label, type, callBack, placeholder=" "}) => {
    return (
        <div className="relative w-full max-w-xl">
          <input
            onChange={(e) => callBack(e.target.value)}
            className="peer transition-all px-6 py-3 w-full text-lg text-customGrey  white rounded-2xl border border-slate-300 outline-none select-all" type={type} placeholder={placeholder}/>
          <label className="z-2 tracking-wide text-customGrey pointer-events-none absolute left-5 inset-y-0 h-fit flex items-center select-none px-1  bg-white peer-focus:bg-white m-0 -translate-y-1/2 ">{label}</label>
        </div>
    )
}

export const InputDropdown: React.FC<InputDropwdownProps> = ({ label, options, callBack}) => {
    let totalOptions = ["No item selected", ...options];
    return (
        <div className="relative w-full max-w-xl">
          <select
            onChange={(e) => callBack(e.target.value)}
            className="peer transition-all px-6 py-4 w-full text-lg text-customGrey  white rounded-2xl border border-slate-300 outline-none select-all">
                {
                    totalOptions.map((item, key) => {
                        return <option value={item} key={key}>{item}</option>
                    })
                }
            </select>
          <label className="z-2 tracking-wide text-customGrey pointer-events-none absolute left-5 inset-y-0 h-fit flex items-center select-none px-1  bg-white peer-focus:bg-white m-0 -translate-y-1/2 ">{label}</label>
        </div>
    )
}


export const InputTextarea: React.FC<InputTextareaProps> = ({ children, label, callBack, placeholder=" "}) => {
    return (
        <div className="relative w-full max-w-xl">
          <textarea
            onChange={(e) => callBack(e.target.value)}
            className="peer transition-all px-6 py-3 w-full text-lg text-customGrey  white rounded-2xl border border-slate-300 outline-none select-all" placeholder={placeholder} rows={4} cols={90}>{children}</textarea>
          <label className="z-2 tracking-wide text-customGrey pointer-events-none absolute left-5 inset-y-0 h-fit flex items-center select-none px-1  bg-white peer-focus:bg-white m-0 -translate-y-1/2 ">{label}</label>
        </div>
    )
}