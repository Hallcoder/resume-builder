import React, { SetStateAction } from 'react';
import Description from '../Description';


const Bio:React.FC<{set:SetStateAction<any>}> = ({set}) => {

    return <div className="h-full w-full">
        <Description set={set} />
    </div>
}

export default Bio;