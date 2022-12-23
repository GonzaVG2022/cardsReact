import { useState } from "react"
// import ColorsRandom from "./colors"

const Users = ({pictures,names,emails,numbers,loc,color})=> {
    
const colors = ["#FDB137", "#785964", "#6D6875", "#B5838D",
                  "#E5989B", "#7E9680", "#C73866", "#FFB4A2", "#79616F", "#EAB595" ];
  const randomColors = Math.floor (Math.random() * colors.length)
 const [icolo, setIcolo]= useState (randomColors)
 const changeIndex =()=>{
     const newRandom = Math.floor (Math.random() * colors.length)
     setIcolo(newRandom)
    }
    return(
        <>
      <div className="cards">
        <h1 style={{background: colors[icolo]}} >{names}</h1>
        <img src={pictures}/>
        <h5>{emails}</h5>
        <h5>{numbers}</h5>
        <h5>{loc}</h5>
      
    
   
   
   </div>
   <button onClick={()=>setIcolo(changeIndex)}>cambiar</button>
   </>
)
}
export default Users