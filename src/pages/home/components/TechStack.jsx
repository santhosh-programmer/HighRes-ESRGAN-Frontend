import React from 'react'
import "../styles/TechStyle.css"

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
      <div style={{
            width: "40%",
            height: "4px",
            backgroundColor:"black",
            margin: "100px 0 40px 12%"
        }}>
        </div>
    </div>
  )
}

export default TechStack