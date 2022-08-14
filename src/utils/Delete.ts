import { LegacyRef, SetStateAction } from 'react';
import handleChange from './handleChange';
import { RefObject } from 'react';
export default function Delete(what:string,dummyRef:RefObject<any>,Dispatch,id:string){
      console.log(`Deleting ${what}`);
      handleChange(`delete-${what}`,dummyRef,Dispatch,{id});
}