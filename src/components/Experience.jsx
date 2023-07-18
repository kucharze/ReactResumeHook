import React, {useContext} from 'react'
import {ResumeContext} from '../context/app_context'

function Experience() {
    let {experience, addExp} = useContext(ResumeContext)
  return (
    <div className='exp'>
      <h1>My Experience:</h1>
       <hr />
      <ul className='items'>
        {
            experience.map((item)=>{
                return <li>{item}</li>
            })
        }
      </ul>
      <button className='change' onClick={addExp}>Add new Experience</button>
    </div>
  )
}

export default Experience
