import React,{useState} from 'react'
import Lifecyclefunction from './Lifecyclefunction';

const Unmountfunction = () => {

    const handleClick=()=>{
        setState(!state);

    }

    const [state,setState]=useState(true);

  return (
    <div>

        {
            state?<Lifecyclefunction/>:""
        }


<button onClick={handleClick}>
    Toggle the Function component

</button>


    </div>
  )
}

export default Unmountfunction