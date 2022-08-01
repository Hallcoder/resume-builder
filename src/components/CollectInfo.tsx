import React from 'react';
import Section from './Section';

const CollectInfo:React.FC = ()  => {
 return <div className="flex flex-col w-6/12">
    <form action="" className='h-full ml-4'>
        <Section title={'Personal Details'} />
        <Section title={'Bio'} />
        <Section title={'Skills'} />
        <Section title={'Education'} />
        <Section title={'Employment'} />
        <Section title={'Languages'} />
        <Section title={'Languages'} />
    </form>
 </div>
}

export default CollectInfo;