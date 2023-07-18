import React, {useContext} from 'react'
import {ResumeContext} from '../context/app_context'

function Header() {
    let {name, changeName, job, changeJob} = useContext(ResumeContext)
  return (
    <div className='header'>
      <h1>{name}</h1>
      <h1>{job}</h1>
      <button className='change' onClick={changeName}>Change name</button>
      <button className='change' onClick={changeJob}>Change Position</button>
    </div>
  )
}

export default Header
