import React, { useState } from 'react'; 
import "../styles/Upload.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState('');
  const [loading , setLoading] = useState(false)
  const history = useNavigate();

  const showToastMessage = (message) => {
    toast.error(message, {});
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      if (img.width > 150 || img.height > 150) {
        showToastMessage("Image dimensions must not exceed 150x150 pixels.")
        setError("Image dimesions must not exceed 150x150 pixels.")
      } else {
        setError('');
      }
    };
  };

  const handleImageUpload = () => {
    if (selectedImage) {
      if (!error) {
        setLoading(true)
        const formData = new FormData();
        formData.append('low_res', selectedImage);
        fetch('https://tops-gecko-enjoyed.ngrok-free.app/api/photo/', {
        method: 'POST',
        headers: {
          'ngrok-skip-browser-warning' : "true"
        },
        body: formData
      })
      .then(response => {
        setLoading(false)
        toast.success("Image Uploaded Successfully !!", {});
        setTimeout(() => {
          history('/history');
        }, 3000);
        console.log(response)
      })
      .catch(error => {
        setLoading(false)
        showToastMessage(error)
        console.log(error)
      });
      }
      else {
        showToastMessage(error)
      }
    }
    else {
      setError("Select image to upload !!")
      showToastMessage("Select image to upload !!");
    }
  };

  return (
    <div className='upload-div'>
      <div className='inside-upload'>
        <input id="file-upload" type="file" accept='image/*' onChange={handleImageChange}/>
        <button onClick={ !loading ? handleImageUpload : () => {}} disabled={error}> {loading ? "Uploading..." : "Upload"} </button>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default ImageUpload;
