import React from 'react';
import Rating from '../Rating';
import ReviewComponent from './ReviewComponent';
function Reviews() {
    const reviews = [
        {
            id:1,
            image:'	https://www.jobseeker.com/api/media/images/487696f6-5fc2-4672-9818-316706be3010/Anita.jpg?width=128&extract=16.57,0.00,66.86,100.00',
            name:'Anita',
            job:'HR Professional',
            content:'Intuitive tool that guides you through the process of creating a CV with customisable sections.',
        },
        {
            id:2,
            image:'https://www.jobseeker.com/api/media/images/ae5f021e-8113-44ea-984b-cebad7caee79/Meredith.jpg?width=128&extract=16.73,0.00,66.53,100.00',
            name:'Meredith',
            job:'Graphic Designer',
            content:'Great website with lots of interesting vacancies. Applying for jobs has never been easier.',
        },
        {
            id:3,
            image:'https://www.jobseeker.com/api/media/images/0ff9e9b8-297c-4569-aced-54f8a724a8e0/Matt.jpg?width=128&extract=16.73,0.00,66.53,100.00',
            name:'Pratt',
            job:'Project Manager',
            content:'Excellent platform with everything you need as a jobseeker',
        }
    ]
    return ( 
        <div className='bg-[#1D1D20] flex flex-col mt-4 min-h-fit'>
<div className='flex flex-col'>
    <div className='text-white m-2'>
        <h1 className='font-bold  text-4xl text-center'>Reviews</h1>
        <div className='flex w-full justify-center m-2'>
          <h1 className='text-5xl'>4/5</h1>
          <Rating />
        </div>
    </div>
    <div className='flex justify-center m-2 text-white text-3xl'>
      <p>Based on 13,396 <strong>Trustpilot</strong> reviews</p>
    </div>
</div>
<div className='flex mt-16 mb-2'>
    {reviews.map(rv => {
        return <ReviewComponent name={rv.name} key={rv.id} image={rv.image} job={rv.job} content={rv.content}/>
    })}
</div>
<div></div>
        </div>
     );
}

export default Reviews;