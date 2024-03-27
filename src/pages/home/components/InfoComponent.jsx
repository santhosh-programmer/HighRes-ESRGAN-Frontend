import React from 'react'
import "../styles/InfoStyle.css"

const InfoComponent = () => {
  return (
    <div className='info-div'>
        <div style={{
            width: "50%",
            height: "4px",
            backgroundColor:"black",
            margin: "130px 10% 40px 0"
        }}>
        </div>
        <h1>
        "ESRGAN is a deep learning-based model that enhances the resolution of low-quality images by generating realistic high-resolution images through a process of adversarial training."
        </h1>
        <div style={{
            width: "50%",
            height: "4px",
            backgroundColor:"black",
            margin: "40px 10% 40px 0"
        }}>
        </div>
    </div>
  )
}

export default InfoComponent