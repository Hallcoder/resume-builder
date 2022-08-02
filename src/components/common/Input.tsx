import * as React from 'react';
interface Props{
    type?:string,
    placeholder?:string,
    id?:string,
    className?:string,
    label?:string,
}

const Input:React.FC<Props> = ({label,type,placeholder,id,className}) => {
    return <div className="h-[10vh] flex flex-col w-full">
        <label>{label}</label>
        <input type={type ? type:'text'} placeholder={placeholder} id={id} className={className?.concat(' rounded-sm')}/>
        </div>
}

export default Input;