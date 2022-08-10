import * as React from 'react';
interface Props{
    type?:string,
    placeholder?:string,
    id?:string,
    className:string,
    label?:string,
    onChange:React.EventHandler<any>,
    value:string,
    refr:React.LegacyRef<HTMLInputElement>
}
const Input:React.FC<Props> = ({label,type,placeholder,id,refr,onChange,className,value}) => {
    // const ref = React.useRef<HTMLInputElement>(null);
    return <div className="h-[10vh] flex flex-col w-full">
        <label>{label}</label>
        <input type='text' ref={refr} value={value} onChange={() => onChange(refr)} placeholder={placeholder} id={id} className={className?.concat(' rounded-sm')}/>
        </div>
}

export default Input;