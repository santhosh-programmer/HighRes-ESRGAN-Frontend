import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import "../styles/ImageCompStyle.css"

const ImageComponent = () => {
  const {category, imgurl} = useParams();
  const [ImgData, setImgData] = useState();

  const showToastMessage = (message) => {
    toast.error(message, {});
  };

  useEffect(() => {
    fetch(`https://tops-gecko-enjoyed.ngrok-free.app/media/${category}/${imgurl}`, {
      method: 'GET',
      headers: {
        'ngrok-skip-browser-warning' : "true",
      }
    })
    .then(async response => { 
      const blob = await response.blob()
      setImgData(URL.createObjectURL(blob))
    })
    .catch(error => {
      showToastMessage(error.message);
    });
  }, [])

  return (
    <div id='img-comp-div'>
      { ImgData==undefined ? <h1>Loading...</h1>: <img src={ImgData} alt='image'/>}
      <ToastContainer />
    </div>
  )
}

export default ImageComponent