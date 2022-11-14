import React,{useEffect,useState} from 'react'

const Lifecyclefunction = () => {
    const [state,setState]=useState("");
    const [hh,setHH]=useState("");


const handleChange=(event)=>{
    setHH(event.target.value);

}

 // You cam observe mounting phase here    
useEffect(()=>{
    //mounting phase is used to load any initial data of your component of the api
    console.log("I am mounted ,mounting phase finished of Lifecyclefunctioncomponnet");

  return   ()=>{
//

     console.log(" I will be called during unmount........")
    }
    
},[])

 // You cam observe updation phase in  here    
 useEffect(()=>{
    console.log("Updation Phase going on  Lifecyclefunctioncomponnet")
  
    
})









  return (
    <div>
        <h1>I am lifecycle function Component</h1>
    <input type={"text"} onChange={handleChange} />


    </div>
  )
}

export default Lifecyclefunction