import  React from 'react';

const Intro:React.FC = () => {
return <div className="w-full border-2 flex justify-center items-center flex-col h-[50vh] mt-[12vh] text-3xl">
    <h1 className="text-7xl m-2 font-extrabold">Create a professional Resume</h1>
    <p className="text-[0.8em] m-4 text-gray-500">Fill in the blanks,choose a template and download your resume instantly.</p>
    <button className='bg-blue-700 text-white h-1/6 w-2/12 rounded-md'>Create resume</button>
</div>
}

export default Intro;