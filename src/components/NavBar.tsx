import React from 'react';


const NavBar:React.FC = () => {
return <div className="flex fixed w-full justify-around border-red-400 border-2">
    <div className="nav h-[7vh] w-4/12">
        <img src="https://www.jobseeker.com/logo-black-text.svg" alt="logo" className="h-10"/>
    </div>
    <div className='w-5/12'>
        <ul className='list-none items-center flex'>
            <li className='w-4/12'>Pricing</li>
            <li className='w-4/12'>Tools</li>
            <li className='w-4/12'>FAQ</li>
        </ul>
    </div>
    <div className='w-4/12 flex justify-center'>
   <button className='bg-blue-800 rounded-md text-white h-12 w-6/12'>Dashboard</button>
    </div>
</div>
}

export default NavBar;