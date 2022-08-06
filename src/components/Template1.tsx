import React from 'react';
import Overlap from './OverLap';
import { useSelector } from 'react-redux';
import  State  from '../utils/interfaces';
const Template1: React.FC = () => { 
    const state:State  = useSelector(state => state);
    console.log(state)
    return <div className="relative h-full flex flex-col rounded-md">
        <header className="h-[15vh] rounded-t-md bg-blue-700">
            <div className='flex h-full w-full text-white'>
                <img src="" alt="" className='h-full bg-white w-2/12' />
                <div className='flex justify-around flex-col'>
                 <h2>{state.names? state.names :'Mwenedata Apotre'}</h2>
                 <h6>{state.headLine? state.headLine:'HeadLine'}</h6>
                 <div className='flex justify-around mt-6 border w-full'>
                   <h4 className='m-1'>{state.email || 'Email' }</h4>  
                   <h4 className='m-1'>{state.phone || 'Phone'}</h4> 
                   <h4 className='m-1'>{state.address || 'Address'}</h4> 
                 </div>
                </div>
            </div>
        </header>
        <section className="flex w-full h-full">
            <main className='h-full w-8/12'></main>
            <aside className='h-full w-4/12 border-l-2 border'></aside>
        </section>
        <Overlap />
    </div>
}

export default Template1;