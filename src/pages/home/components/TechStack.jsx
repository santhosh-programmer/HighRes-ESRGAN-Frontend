import React from 'react'
import "../styles/TechStyle.css"

const TechStack = () => {
  return (
    <div id='tech-stack-div'>
      <h1>Made with</h1>
      <div>
        <img src="react.png" alt="React" />
        <img src="django.png" alt="Django" />
        <img src="aws.png" alt="Aws" />
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