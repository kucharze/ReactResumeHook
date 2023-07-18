import React, {useContext} from 'react'
import {ResumeContext} from '../context/app_context'

function References() {
    let {references, addRef} = useContext(ResumeContext)
  return (
    <div>
      <h1>My References:</h1>
    </div>
  )
}

export default References
