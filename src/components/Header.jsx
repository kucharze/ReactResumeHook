import React, {useContext} from 'react'
import {ResumeContext} from '../context/app_context'

function Header() {
    let {name, changeName} = useContext(ResumeContext)
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changeName}>Change name</button>
      <hr />
    </div>
  )
}

export default Header
