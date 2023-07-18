import React, {useContext} from 'react'
import {ResumeContext} from '../context/app_context'

function References() {
    let {references, addRef} = useContext(ResumeContext)
  return (
    <div className='refs'>
      <h1>My References:</h1>
      <ul className='items'>
        {
            references.map((item)=>{
                return <li>{item}</li>
            })
        }
      </ul>
      <button onClick={addRef}>Add new Reference</button>
    </div>
  )
}

export default References
