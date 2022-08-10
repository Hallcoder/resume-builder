import * as React from 'react';
interface Props{
    type?:string,
    placeholder?:string,
    id?:string,
    className:string,
    label?:string,
    onChange:React.EventHandler<any>,
    value:string,
    name?:string,
    refr?:React.LegacyRef<HTMLInputElement>
}
const Input:React.FC<Props> = ({label,type,placeholder,id,refr,onChange,className,value,name}) => {
    const ref = React.useRef<HTMLInputElement>(null);
    return <div className="h-[10vh] flex flex-col w-full">
        <label>{label}</label>
        <input type='text' ref={ref} value={value} name={name} onChange={!name? () => onChange(refr):() => onChange(ref)} placeholder={placeholder} id={id} className={className?.concat(' rounded-sm')}/>
        </div>
}

export default Input;