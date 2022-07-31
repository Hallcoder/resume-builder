import React from 'react';


const NavBar:React.FC = () => {
return <div className="flex top-0 fixed bg-white w-full h-[6h] justify-around">
    <div className="flex items-center w-4/12">
        <img src="https://www.jobseeker.com/logo-black-text.svg" alt="logo" className="m-2 h-10"/>
    </div>
    <div className='w-5/12 items-center m-2 h-full flex'>
        <ul className='list-none h-full items-center justify-center flex w-full'>
            <li className='w-4/12 text-xl font-bold text-gray-500'>Pricing</li>
            <li className='w-4/12 text-xl font-bold text-gray-500'>Tools</li>
            <li className='w-4/12 text-xl font-bold text-gray-500'>FAQ</li>
        </ul>
    </div>
    <div className='w-3/12 flex items-center justify-center'>
   <button className='bg-blue-800 text-lg font-semibold rounded-md text-white h-12 w-6/12'>Dashboard</button>
    </div>
</div>
}

export default NavBar;