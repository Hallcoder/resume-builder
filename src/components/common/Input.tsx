import * as React from 'react';
interface Props{
    type?:string,
    placeholder?:string,
    id?:string,
    className:string,
    label?:string,
    onChange?:React.EventHandler<any>,
    refr?:React.LegacyRef<HTMLInputElement>;
    value:string | undefined,
}

const Input:React.FC<Props> = ({label,type,placeholder,id,refr,onChange,className,value}) => {
    return <div className="h-[10vh] flex flex-col w-full">
        <label>{label}</label>
        <input type={type ? type:'text'} ref={refr} onChange={onChange} placeholder={placeholder} id={id} className={className?.concat(' rounded-sm')}/>
        </div>
}

export default Input;