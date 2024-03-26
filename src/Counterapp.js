import React,{useState,useContext} from "react";
import Stylecontext from "./Stylecontext";

const Counterapp = () =>{
    const [Count,setCount] = useState(0)
    const {theme,settheme,darkmode,lightmode} = useContext(Stylecontext);

  function Increase(){
    setCount(Count+1)
  }

    return(
            <div style={theme} className="hello">
            <h1>{Count}</h1>
            <button  onClick={Increase}>Increase</button>
            <button  onClick={()=> setCount(Count-1)}>Decrease</button>
            <button  onClick={() => setCount(0)}>Reset</button>
            <button onClick={()=>settheme(darkmode)}>Dark</button>
            <button onClick={()=>settheme(lightmode)}>Light</button>
        </div>
    )

}
export default Counterapp