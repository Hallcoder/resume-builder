import React from 'react';
import Section from './Section';
import PersonDetails from './Sections/PersonalDetails';

const CollectInfo:React.FC = ()  => {
 return <div className="h-5/6 w-6/12 flex overflow-y-scroll flex-col">
    <form action="" className='h-5/6 ml-4 mr-2'>
        <Section title={'Personal Details'} RealSection={'PD'}/>
        <Section title={'Bio'} />
        <Section title={'Skills'} />
        <Section title={'Education'} />
        <Section title={'Employment'} />
        <Section title={'Languages'} />
        <Section title={'Languages'} />
        <Section title={'Languages'} />
    </form>
 </div>
}

export default CollectInfo;