import React, {useContext} from 'react'
import {ResumeContext} from '../context/app_context'

function Skills() {
    let {skills, addSkill} = useContext(ResumeContext)
    
  return (
    <div>
        <h1>My Skills</h1>
      <ul>
        {
            skills.map((item)=>{
                return<li key={item}>{item}</li>
            })
        }
      </ul>
      <button onClick={addSkill}>Add a skill</button>
    </div>
  )
}

export default Skills
