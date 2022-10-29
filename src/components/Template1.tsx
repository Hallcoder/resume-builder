import React, { useEffect, useRef, useState } from "react";
import Overlap from "./OverLap";
import { useSelector } from "react-redux";
import State from "../utils/interfaces";
import {jsPDF} from 'jspdf';
import html2canvas from "html2canvas";
import formatDate from "../utils/formatDate";
const Template1: React.FC = () => {
  const state: State | any = useSelector(state => state);
  let [canvasImage, setCanvasImage] = useState(null);
  const ref = useRef<HTMLDivElement>(null);
  const articleRef = useRef<HTMLElement>(null);
  const generateCanvasImage = () => {
    html2canvas(ref.current).then(canvas => {
    //   articleRef.current.innerHTML = canvas.toDataURL();
        const image = canvas.toDataURL("img/png");
        const doc = new jsPDF("p","cm",[24,22]);
        doc.addImage(image,"PNG",0,0,200,400);
        doc.save("resume.pdf");
    });
  };
  return (
    <section className='h-full'>
      <div ref={ref} className="relative h-full flex flex-col rounded-md">
        {!canvasImage ? (
          <article ref={articleRef}>
            <header className="h-[15vh] rounded-t-md bg-[#303846]">
              <div className="flex h-full w-full text-white">
                <img
                  src={state.image}
                  alt=""
                  className="h-full bg-white w-2/12"
                />
                <div className="flex justify-around flex-col w-7/12">
                  <h2>{state.names ? state.names : "Mwenedata Apotre"}</h2>
                  <h6 className="text-sm text-gray-400">
                    {state.headLine ? state.headLine : "HeadLine"}
                  </h6>
                  <div className="flex justify-around mt-6  w-full">
                    <h4 className="m-1 text-xs text-gray-500">
                      {state.email || "Email"}
                    </h4>
                    <h4 className="m-1 text-xs text-gray-500">
                      {state.phone || "Phone"}
                    </h4>
                    <h4 className="m-1 text-xs  text-gray-500">
                      {state.address || "Address"}
                    </h4>
                  </div>
                </div>
              </div>
            </header>
            <section className="flex w-full h-full text-xs">
              <main className="h-full w-8/12">
                <div className="h-fit flex flex-col border-b w-11/12 m-auto">
                  <h2 className="font-bold m-1 text-sm">
                    {state.bio && "Bio"}
                  </h2>
                  <p className="text-xs m-1">{state.bio ? state.bio : ""}</p>
                </div>
                <div className="w-11/12 m-auto border-b">
                  <h2 className="font-bold text-sm m-1">
                    {state.educations.length !== 0 && "Education"}
                  </h2>
                  {state.educations.length !== 0 &&
                    state.educations.map(ed => {
                      return (
                        <div className="m-1 flex justify-around">
                          <div className="flex flex-col w-4/12">
                            <h3 className="font-semibold">{ed.degree}</h3>
                            <h4 className="text-xs text-gray-500">
                              {ed.school}
                            </h4>
                          </div>
                          <div className="w-8/12 flex justify-end">
                            <h3 className="text-xs">
                              {formatDate(ed.startdate)} -{" "}
                              {formatDate(ed.enddate)}
                            </h3>
                          </div>
                        </div>
                      );
                    })}
                </div>
                <div className="w-11/12 m-auto border-b">
                  <h2 className="font-bold text-sm m-1">
                    {state.employments.length !== 0 && "Employment"}
                  </h2>
                  {state.employments.length !== 0 &&
                    state.employments.map(emp => {
                      return (
                        <div className="m-1 flex justify-around">
                          <div className="flex flex-col w-4/12">
                            <h3 className="font-semibold">{emp.position}</h3>
                            <h4 className="text-xs text-gray-500">
                              {emp.employer}
                            </h4>
                          </div>
                          <div className="w-8/12 flex justify-end">
                            <h3 className="text-xs">
                              {formatDate(emp.startdate)} -{" "}
                              {formatDate(emp.enddate)}
                            </h3>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </main>
              <aside className="flex flex-col h-full w-4/12 border-l border">
                <div className="h-1/6 border-b">
                  <h1 className="text-sm font-bold m-1">Personal Details</h1>
                  <div>
                    <h1 className="text-xs m-1 font-bold ">
                      {state.linkedIn && "linkedIn"}
                    </h1>
                    <h4 className="text-xs m-1">
                      {state.linkedIn ? state.linkedIn : ""}
                    </h4>
                  </div>
                </div>
                <div className="flex flex-col border-b min-h-fit ">
                  <h2 className="font-bold text-sm m-1">
                    {state.skills.length !== 0 && "Skills"}
                  </h2>
                  {state.skills.length !== 0 &&
                    state.skills.map(skill => {
                      return (
                        <div className="h-1/6">
                          <h3 className="text-xs text-gray-500">
                            {skill.title}
                          </h3>
                          <progress value={skill.step} max="100"></progress>
                        </div>
                      );
                    })}
                </div>
                <div className="w-11/12">
                  <h2 className="font-bold text-sm m-1">
                    {state.languages.length !== 0 && "Languages"}
                  </h2>
                  {state.languages.length !== 0 &&
                    state.languages.map(lang => {
                      return (
                        <div className="m-1 flex flex-col justify-around">
                          <h3 className="font-semibold">{lang.name}</h3>
                          <h4 className="text-xs text-gray-500">
                            {lang.fluency}
                          </h4>
                        </div>
                      );
                    })}
                </div>
              </aside>
            </section>
            <Overlap
            />
          </article>
        ) : (
          <img src={canvasImage}></img>
        )}
      </div>
      <span className='flex justify-center mt-2'>
          <button
            className="bg-blue-700 text-white m-1 p-3 w-5/12 text-sm"
            onClick={generateCanvasImage}
          >
            Download Resume as PDF
          </button>
      </span>
    </section>
  );
};
export default Template1;
