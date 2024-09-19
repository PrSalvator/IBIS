import { forwardRef } from "react";

type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, TButtonProps>((props, ref) => {
    const {} = props
    return <button className="border rounded p-3 bg-blue-600 hover:bg-blue-500 text-white w-[150px] h-[50px]" ref={ref} {...props}/>
})