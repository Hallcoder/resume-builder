import React from 'react';
import Rating from '../Rating';
import ReviewComponent from './ReviewComponent';
function Reviews() {
    const reviews = [
        {
            id:1,
            image:'',
            name:'Pratt',
            job:'Product Manager',
            content:'Excellent platform with everything you need as a jobseeker',
        }
    ]
    return ( 
        <div className='bg-[#1D1D20] flex flex-col h-[80vh]'>
<div className='flex flex-col'>
    <div className='text-white'>
        <h1 className='font-bold  text-4xl text-center'>Reviews</h1>
        <div className='flex w-full justify-center'>
          <h1 className='text-5xl'>4/5</h1>
          <Rating />
        </div>
    </div>
    <div className='flex justify-center text-white text-3xl'>
      <p>Based on 13,396 <strong>Trustpilot</strong> reviews</p>
    </div>
</div>
<div>
    {reviews.map(rv => {
        return <ReviewComponent name={rv.name} key={rv.id} image={rv.image} job={rv.job} content={rv.content}/>
    })}
</div>
<div></div>
        </div>
     );
}

export default Reviews;