import React, {useContext} from 'react'
import {ResumeContext} from '../context/app_context'

function Header() {
    let {name, changeName, job, changeJob} = useContext(ResumeContext)
  return (
    <div className='header'>
      <h1>{name}</h1>
      <h1>{job}</h1>
      <button onClick={changeName}>Change name</button>
      <button onClick={changeJob}>Change Position</button>
      <hr />
    </div>
  )
}

export default Header
