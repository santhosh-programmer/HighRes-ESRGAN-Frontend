import React from 'react'
import CustomDivider from './CustomDivider'
import "../styles/TechStyle.css"

const Reference = () => {
  return (
    <div id='ref-div'>
        <h1>Reference</h1>
        <ul>
            <li>
                ESRGAN-DP: Enhanced super-resolution generative adversarial network with adaptive dual perceptual loss - 
                <a href='https://www.sciencedirect.com/science/article/pii/S2405844023023411' target='_blank'>Visit</a>
            </li>
            <li>
                ESRGAN: Enhanced Super-Resolution Generative Adversarial Networks - 
                <a href='https://openaccess.thecvf.com/content_ECCVW_2018/papers/11133/Wang_ESRGAN_Enhanced_Super-Resolution_Generative_Adversarial_Networks_ECCVW_2018_paper.pdf' target='_blank'>Visit</a>
            </li>
            <li>
                Working of ESRGAN - 
                <a href="https://pyimagesearch.com/2022/06/13/enhanced-super-resolution-generative-adversarial-networks-esrgan/" target='_blank'>Visit</a>
            </li>
            <li>
                Guide To Image Super-Resolution By ESRGAN - 
                <a href="https://analyticsindiamag.com/guide-to-image-super-resolution-by-esrgan/#:~:text=Architecture%20%26%20Method%20of%20ESRGAN&text=This%20allows%20the%20ESRGAN%20to,the%20intern%20produces%20better%20results." target='_blank'>Visit</a>
            </li>
        </ul>
        <CustomDivider/>
    </div>
  )
}

export default Reference