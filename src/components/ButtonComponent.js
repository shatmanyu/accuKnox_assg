import React from 'react'
import '../App.css'
const btnAttrs = ['Bold','Italic','Underline','font-size','color']

export default function ButtonComponent({changeAtt}) {
  return (
    <div className='btn-container'>
        {btnAttrs?.map((item,index)=>{
            return(
                (item!=='font-size' && item!=='color') ? 
                <button key={index} className='btn' onClick={()=>changeAtt(item,null)}>
                    {item}
                </button>
                :
                 (item === "font-size") ? <input type="number" onChange={(e)=>changeAtt(item,e.target.value)} /> 
                 :
                 <input type='color' onChange={(e)=>changeAtt(item,e.target.value)}/>
                
            )
        })}
    </div>
  )
}
