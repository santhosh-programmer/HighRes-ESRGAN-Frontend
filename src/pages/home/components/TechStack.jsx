import React from 'react'
import "../styles/TechStyle.css"
import CustomDivider from './CustomDivider'

const TechStack = () => {
  return (
    <div id='tech-stack-div'>
      <h1>Made with</h1>
      <div>
        <img src="pytorch.png" alt="Pytorch" />
        <img src="opencv.png" alt="OpenCV" />
        <img src="react.png" alt="React" />
        <img src="django.png" alt="Django" />
      </div>
      <CustomDivider/>
    </div>
  )
}

export default TechStack