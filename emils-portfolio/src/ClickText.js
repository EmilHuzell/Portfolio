import React, { useEffect } from 'react';
import { useState, useLayoutEffect, forwardRef, useImperativeHandle } from 'react';

const ClickText =  ({text, trigger, setTrigger} )=>{


    const [className, setClassName] = useState("ClickTextHidden");

    useEffect(()=>{
        console.log("text triggered!");
        const playAnimation = ()=>{
            setClassName("ClickTextHidden ClickTextVisible");
            
            const timer = setTimeout(()=>{
                setClassName("ClickTextHidden");
                console.log("timerout");
            },1000)
            
        }
        if(trigger){
            playAnimation();
            setTrigger(false);
        }
    },[trigger]);

    return(

        <div className={className}>
            
        
            <p>{text}</p>
        </div>
    )
}






export default ClickText;