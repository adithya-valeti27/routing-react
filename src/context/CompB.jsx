import React, { useState } from 'react'
import { UserContext } from './Context'
import { useContext } from 'react'
const CompB = () => {
    const name = useContext(UserContext)
  return (
    <div className='a'>
      <p>Component B</p>
    </div>
  )
}

export default CompB
