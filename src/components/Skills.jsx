import React, {useContext} from 'react'
import {ResumeContext} from '../context/app_context'

function Skills() {
    let {skills, addSkill} = useContext(ResumeContext)
    
  return (
    <div>
      <ul>
        {
            skills.map((item)=>{
                return<li key={item}>{item}</li>
            })
        }
      </ul>
    </div>
  )
}

export default Skills
