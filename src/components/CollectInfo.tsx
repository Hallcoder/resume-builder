import React from 'react';
import Section from './Section';
import PersonDetails from './Sections/PersonalDetails';

const CollectInfo:React.FC = ()  => {
 return <div className="h-5/6 w-6/12 flex overflow-y-scroll flex-col">
    <form action="" className='h-5/6 ml-4 mr-2'>
        <Section title={'Personal Details'} RealSection={'PD'}/>
        <Section title={'Bio'}    RealSection={'BIO'}/>
        <Section title={'Skills'} RealSection={'SKILL'} />
        <Section title={'Education'} />
        <Section title={'Employment'} />
        <Section title={'Personal Projects'} />
        <Section title={'Hobbies'} />
        <Section title={'Certificates'} />
    </form>
 </div>
}

export default CollectInfo;