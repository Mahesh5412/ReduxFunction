import React,{useState,useEffect} from 'react';
import Splash from './Splash';
import StackExample from './StackExample';

const Initial1 = () => {
    const[ comp,setComp]=useState( 
      <Splash/>
     );

    useEffect(()=>{
        const interval = setInterval(() => setComp(<StackExample/>),3000);
    //alert("mahesh");
    console.log('I will run after every render');
        return () =>{  clearInterval(this.interval) };
    },[ comp.data]);

    return (comp);
    

}


export default Initial1
