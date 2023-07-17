import React, {useContext} from 'react'
import {ResumeContext} from '../context/app_context'

function Experience() {
    let {experience, addExp} = useContext(ResumeContext)
  return (
    <div>
      <h1>My Experience:</h1>
      <ul>
        {
            experience.map((item)=>{
                return <li>{item}</li>
            })
        }
      </ul>
      <button onClick={addExp}>Add new Experience</button>
    </div>
  )
}

export default Experience
