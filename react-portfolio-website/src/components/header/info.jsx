import React from 'react'
import Cinfo from '../../assets/test.txt'

const info = () => {
  return (
    <div classname='cinfo'>
        <a href={Cinfo}>Download Resume</a>
        <a href="#contact" className='btn'>Contact Me</a>

    </div>
  )
}

export default info