import React from 'react';
import Overlap from './OverLap';
import { useSelector } from 'react-redux';
const Template1: React.FC = () => { 
    return <div className="relative h-full rounded-md">
        <header className="h-[15vh] rounded-t-md bg-blue-700"></header>
        <section className="">
                
        </section>
        <Overlap />
    </div>
}

export default Template1;