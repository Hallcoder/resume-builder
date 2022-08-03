import React, { useState } from "react";
import { MdModeEdit } from "react-icons/md";
interface Props{
title: string,
subtitle?: string,
}
const Block: React.FC<Props> = () => {
  const [status, setStatus] = useState("set");
  if (status === "set") {
    return (
      <div className="flex w-11/12 h-[10vh] m-auto mt-1 items-center border border-gray-400 shadow-md rounded-sm">
        <div className="w-6/12 m-1">
          <h1>React JS(Frontend Development)</h1>
          <h5 className="text-sm mt-2 text-gray-500">Excellent</h5>
        </div>
        <div className="rounded-sm w-6/12 flex justify-end">
          <MdModeEdit className="border text-3xl rounded-md p-1 m-1" />
        </div>
      </div>
    );
  } else if (status === "edit") {
    return <div>

    </div>;
  } else {
    return <div>

    </div>;
  }
};

export default Block;
