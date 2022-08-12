import React from 'react';
import Overlap from './OverLap';
import { useSelector } from 'react-redux';
import  State  from '../utils/interfaces';
import formatDate from '../utils/formatDate';
const Template1: React.FC = () => { 
    const state:State | any  = useSelector(state => state);
    console.log(state)
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
                <div className='h-fit flex flex-col border-b-2 w-11/12 m-auto'>
                <h2 className='font-semibold m-1 text-sm'>{state.bio && 'Bio'}</h2> 
                <p className='text-xs m-1'>{state.bio ? state.bio:''}</p>   
                </div>
                <div className='ml-1'>
                <h2 className='font-semibold text-sm m-1'>{state.educations.length !== 0 && 'Education'}</h2>
                    {state.educations.length !== 0 && state.educations.map(ed => {
                        return <div className='m-1 flex justify-around'>
                            <div className='flex flex-col w-4/12'>
                                <h3 className='text-sm font-bold'>{ed.degree}</h3>
                                <h4 className='text-xs text-gray-500'>{ed.school}</h4>
                            </div>
                            <div className='w-8/12 flex justify-end'>
                               <h3 className='text-xs'>{formatDate(ed.startdate)} - {formatDate(ed.enddate)}</h3>
                            </div>
                        </div>
                    })}
                </div>
                <div></div>
            </main>
            <aside className='flex flex-col h-full w-4/12 border-l-2 border'>
                <div className='h-1/6 border-b-2'>
                    <h1 className='text-sm font-semibold m-1'>Personal Details</h1>
                     <div>
                    <h1 className='text-xs m-1 font-bold '>{state.linkedIn && 'linkedIn'}</h1>
                     <h4 className='text-xs m-1'>{state.linkedIn ? state.linkedIn:''}</h4>
                     </div>
                </div>
                <div className='flex flex-col h-[25vh] min-h-fit'>
                <h2 className='font-semibold text-sm m-1'>{state.skills.length !== 0 && 'Skills'}</h2>
                    {state.skills.length !== 0 && state.skills.map(skill => {
                        return <div className='h-1/6'>
                            <h3 className='text-xs text-gray-500'>{skill.title}</h3>
                            <progress value='75' max='100'></progress>
                        </div>
                    })}
                </div>
            </aside>
        </section>
        <Overlap />
    </div>
}

export default Template1;