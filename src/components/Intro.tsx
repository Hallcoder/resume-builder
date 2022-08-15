import  React from 'react';
import { NavLink } from 'react-router-dom';

const Intro:React.FC = () => {
return <div className="w-full flex justify-center items-center flex-col h-[80vh] mt-[2vh] text-3xl">
    <h1 className="text-7xl m-2 font-extrabold">Create a professional Resume</h1>
    <p className="text-[0.8em] m-4 text-gray-500">Fill in the blanks,choose a template and download your resume instantly.</p>
    <NavLink to='/makeResume' className='h-1/6 w-3/12'><button className='bg-blue-900 text-white h-full w-full  rounded-md'>Create resume</button></NavLink>
</div>
}

export default Intro;