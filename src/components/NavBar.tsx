import React, { useEffect } from 'react';


const NavBar:React.FC = () => {
    const addBoxShadow = ()=>{
        document.getElementById('nav').style.boxShadow = '1px 1px 4px black';
   };
    // if(document.getElementById('nav').style.position)
    useEffect(()=>{
     document.addEventListener('scroll', addBoxShadow)
     return () => document.removeEventListener('scroll', addBoxShadow) ;
    },[])
return <div id='nav' className="flex top-0 fixed z-[1] bg-white w-full h-[6h] justify-around">
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
   <button className='border-blue-800 text-lg font-semibold hover:text-white hover:bg-blue-800 rounded-md border  h-12 m-1 w-4/12'>Sign in</button>
   <button className='bg-blue-800 text-lg font-semibold rounded-md text-white h-12 m-1 w-4/12'>Dashboard</button>
    </div>
</div>
}

export default NavBar;