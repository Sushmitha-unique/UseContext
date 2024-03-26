import React,{useState} from "react";
import Stylecontext from "./Stylecontext";

const Styleprovider = (props)  =>{
    const intialvalue= {
        color:"black",
        backgroundColor:"white",
        border:"1px solid red"
    }
    const [theme,settheme] = useState(intialvalue);
    return(
        <Stylecontext.Provider value ={{
         theme:theme,
         settheme:settheme,
         darkmode :()=>settheme({
            color:"white",
            backgroundColor:"black",
            border:"1px solid green"
         }),
         lightmode:()=>settheme(
            intialvalue
         )
        }}>
            {props.children}
        </Stylecontext.Provider>  
    )
}
export default Styleprovider;

