import React from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import '../styles/SliderStyle.css'
import Typewriter from 'typewriter-effect';

const SliderComponent = () => {
  return (
    <div className='home_slider'>
      <h1>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('Enhanced Super-Resolution Generative Adversarial Networks.')
              .callFunction(() => {})
              .pauseFor(2500)
              .deleteAll()
              .callFunction(() => {})
              .start();
          }}
          options={{
            loop: true,
            autoStart: true,
          }}
        />
      </h1>
      <div>
        <ReactCompareSlider style={{borderRadius: "10px"}}
          itemOne={<ReactCompareSliderImage src="/blured.png" alt="Image one" />}
          itemTwo={<ReactCompareSliderImage src="/og.jpg" alt="Image two" />}
          />
      </div>
    </div>
  )
}

export default SliderComponent