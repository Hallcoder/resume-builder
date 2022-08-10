import React from 'react';
import Overlap from './OverLap';
import { useSelector } from 'react-redux';
import  State  from '../utils/interfaces';
const Template1: React.FC = () => { 
    const state:State  = useSelector(state => state);
    return <div className="relative h-full  flex flex-col rounded-md">
        <header className="h-[15vh] rounded-t-md bg-[#303846]">
            <div className='flex h-full w-full text-white'>
                <img src="" alt="" className='h-full bg-white w-2/12' />
                <div className='flex justify-around flex-col w-7/12'>
                 <h2>{state.names? state.names :'Mwenedata Apotre'}</h2>
                 <h6 className='text-sm text-gray-400'>{state.headLine? state.headLine:'HeadLine'}</h6>
                 <div className='flex justify-around mt-6  w-full'>
                   <h4 className='m-1 text-xs text-gray-500'>{state.email || 'Email' }</h4>  
                   <h4 className='m-1 text-xs text-gray-500'>{state.phone || 'Phone'}</h4> 
                   <h4 className='m-1 text-xs text-gray-500'>{state.address || 'Address'}</h4> 
                 </div>
                </div>
            </div>
        </header>
        <section className="flex w-full h-full">
            <main className='h-full w-8/12'>
                <div className='h-fit flex flex-col'>
                <h2 className='font-semibold'>{state.bio && 'Bio'}</h2> 
                <p className='text-xs'>{state.bio ? state.bio:''}</p>   
                </div>
                <div></div>
                <div></div>
            </main>
            <aside className='h-full w-4/12 border-l-2 border'></aside>
        </section>
        <Overlap />
    </div>
}

export default Template1;