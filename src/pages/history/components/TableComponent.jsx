import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "../styles/TableStyle.css"
import { Link } from 'react-router-dom';

const TableComponent = () => {
  const [loading, setLoading] = useState(false);
  const [imageDetails, setImageDetails] = useState([]);
  const [lowResImages, setLowResImages] = useState([]);

  const showToastMessage = (message) => {
    toast.error(message, {});
  };

  useEffect(() => {
    setLoading(true);
    fetch('https://tops-gecko-enjoyed.ngrok-free.app/api/photo', {
      method: 'GET',
      headers: {
        'ngrok-skip-browser-warning' : "true",
      }
    })
    .then(async response => { 
      try {
        const temp = await response.json()
        setImageDetails(temp);

        const responses = await Promise.all(temp.map(item => fetch(item.low_res.replace('http://', 'https://'), {
          headers: {
            'ngrok-skip-browser-warning' : "true",
          }
        })));
        const blobs = await Promise.all(responses.map(response => response.blob()));
        setLowResImages(blobs.map(blob => URL.createObjectURL(blob)));

      } catch (error) {
        console.error('Error fetching images:', error);
      }
      setLoading(false);
    })
    .catch(error => {
      setLoading(false);
      showToastMessage(error.message);
    });
  }, []);

  const handleDownload = (url, filename) => {
    fetch(url.replace('http://', 'https://'), {
      headers: {
        'ngrok-skip-browser-warning' : "true",
      }
    })
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url.replace('http://', 'https://');
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch(error => {
        showToastMessage(`Failed to download ${filename}: ${error.message}`);
      });
  };

  return (
    <div className="center-container">
      {
        loading ? (
            <h1 style={{marginTop: "30vh"}}>Loading...</h1>
        ) : imageDetails.length === 0 ? (
            <h1 style={{marginTop: "30vh"}}>No Data Found</h1>
        ) : (
            <table>
            <thead>
                <tr>
                <th>Low Resolution</th>
                <th>Status</th>
                <th>High Resolution</th>
                </tr>
            </thead>
            <tbody>
                {imageDetails.map((item, index) => (
                <tr key={index}>
                    <td>
                    <img src={lowResImages[index]} alt="Low res" /> <br/>
                    <Link to={"/view-image" + item.low_res.split('/media')[1]} className='view-btn'>
                      View
                    </Link>
                    </td>
                    <td style={{
                        color : item.status ? "green" : "black"
                    }}>
                    {item.status ? 'Completed' : 'Processing...'}
                    </td>
                    <td>
                    {item.status ? (
                        <div>
                            <a onClick={() => handleDownload(item.high_res, `highres.png`)} download className='download-btn'>
                                Download
                            </a>
                            <span>/</span>
                            <Link to={"/view-image" + item.high_res.split('/media')[1]} className='view-btn'>
                                View
                            </Link>
                        </div>
                    ) : (
                        <h3>Not Available</h3>
                    )}
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        )
      }
      <ToastContainer />
    </div>
  );
};

export default TableComponent;
