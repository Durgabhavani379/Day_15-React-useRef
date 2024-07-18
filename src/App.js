import React,{useState,useEffect,useRef} from 'react';


const App = () => {
    const[firstName,setFirstName]=useState("");
    const renderCount=useRef(1);
    const inputDom=useRef(null);
    //infinite state
   // const[renderCount,setRenderCount]=useState(1);
   useEffect(()=>{
    console.log(renderCount);
    renderCount.current=renderCount.current+1;
    //setRenderCount((prevCount)=>setRenderCount(prevCount+1))
   })
   const focus=()=>{
    inputDom.current.focus();
   }
    return (
       <>
       <input 
       ref={inputDom}
       type="text " name="firstname" 
       id="firstname" 
       onChange={(e)=>{
        setFirstName(e.target.value);
       }}/>
       <h3>Typing:{firstName}</h3>
       <h2>Components rendering:{renderCount.current}</h2>
       <button onClick={focus}>focus</button>
       </>
    );
};

export default App;