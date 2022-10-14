import React from "react";
import toolImage from '../assets/images/tools.png'
import {MdOutlinePersonPin,MdOutlineCases,MdDocumentScanner,MdChecklistRtl} from 'react-icons/md'
function Tools() {
  return (
    <div className="mt-60 mb-60">
      <h1 className="ml-2 text-6xl font-semibold text-center">Tools</h1>
      <div className="w-9/12 m-auto flex items-center h-[60vh]">
        <div className="w-8/12">
          <span className="flex w-10/12 m-4">
            <div><MdOutlinePersonPin className="text-4xl border p-1 rounded-full text-blue-800" /></div>
            <div className="flex flex-col">
               <h1 className="text-blue-800 text-2xl font-semibold">Resume/ CV</h1>
               <p className='w-10/12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, assumenda. Exercitationem aperiam eligendi illo accusantium.</p>
            </div>
          </span>
          <span className="flex w-10/12 m-4">
          <div><MdOutlineCases className="text-4xl p-1 border rounded-full text-gray-500" /></div>
            <div className="flex flex-col">
               <h1 className="ml-2 text-2xl font-semibold text-gray-600">Jobs</h1>
               <p className='w-10/12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, assumenda. Exercitationem aperiam eligendi illo accusantium.</p>
            </div>
          </span>
          <span className="flex w-10/12 m-4">
          <div><MdDocumentScanner className="text-4xl p-1 border rounded-full text-gray-500" /></div>
            <div className="flex flex-col">
               <h1 className="ml-2 text-2xl font-semibold text-gray-600">Cover Letter</h1>
               <p className='w-10/12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, assumenda. Exercitationem aperiam eligendi illo accusantium.</p>
            </div>
          </span>
          <span className="flex w-10/12 m-4">
          <div><MdChecklistRtl className="text-4xl p-1 border rounded-full text-gray-500" /></div>
            <div className="flex flex-col">
               <h1 className="ml-2 text-2xl font-semibold text-gray-600">Applications</h1>
               <p className='w-10/12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, assumenda. Exercitationem aperiam eligendi illo accusantium.</p>
            </div>
          </span>
        </div>
        <div className="w-4/12">
            <img src={toolImage} alt="Tools" />
        </div>
      </div>
    </div>
  );
}

export default Tools;
