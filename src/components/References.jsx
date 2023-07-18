import React, {useContext} from 'react'
import {ResumeContext} from '../context/app_context'

function References() {
    let {references, addRef} = useContext(ResumeContext)
  return (
    <div className='refs'>
      <h1>My References:</h1>
      <hr />
      <ul className='items'>
        {
            references.map((item)=>{
                return <li key={item}>{item}</li>
            })
        }
      </ul>
      <button className='change' onClick={addRef}>Add new Reference</button>
    </div>
  )
}

export default References
