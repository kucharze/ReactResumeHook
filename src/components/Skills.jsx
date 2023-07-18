import React, {useContext} from 'react'
import {ResumeContext} from '../context/app_context'

function Skills() {
    let {skills, addSkill} = useContext(ResumeContext)
    
  return (
    <div className='skills'>
        <h1>My Skills</h1>
         <hr />
      <ul className='items'>
        {
            skills.map((item)=>{
                return<li key={item}>{item}</li>
            })
        }
      </ul>
      <button className='change' onClick={addSkill}>Add a skill</button>
    </div>
  )
}

export default Skills
