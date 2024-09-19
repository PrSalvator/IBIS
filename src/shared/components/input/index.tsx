import { forwardRef, InputHTMLAttributes } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ label, error, ...props }, ref) => (
    <div className="flex flex-col">
      <p className="text-[20px] h-[30px]">{label}</p>
      <input ref={ref} className={`border border-slate-500 rounded h-[50px] text-[20px] w-[300px] ${error ? "border-red-500" : ""}`} {...props}/>
      <span className="text-red-500 h-[30px]">{error}</span>
    </div>
  )
);
