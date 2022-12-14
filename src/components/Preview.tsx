import React, { ReactNode, useEffect, useRef } from 'react';
import Template1 from './Template1';
import html2canvas from 'html2canvas';
const Preview:React.FC = () => {
return <div className="w-5/12 ml-auto mr-auto">
    <div className="w-9/12 h-[80%] border m-auto rounded-md border-yellow-400 shadow-md">
      <Template1 />
    </div>
</div>
}

export default Preview;