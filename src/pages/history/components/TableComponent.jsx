import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "../styles/TableStyle.css"

const TableComponent = () => {
  const [loading, setLoading] = useState(false);
  const [imageDetails, setImageDetails] = useState([]);

  const showToastMessage = (message) => {
    toast.error(message, {});
  };

  useEffect(() => {
    setLoading(true);

    fetch('https://tops-gecko-enjoyed.ngrok-free.app/api/photo', {
      method: 'GET',
      headers: {
        'ngrok-skip-browser-warning' : "true"
      }
    })
    .then(async response => {
      setLoading(false);
      setImageDetails(await response.json());
    })
    .catch(error => {
      setLoading(false);
      showToastMessage(error.message);
    });
  }, []);

  const handleDownload = (url, filename) => {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
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
            <h1>Loading...</h1>
        ) : imageDetails.length === 0 ? (
            <h1>No Data Found</h1>
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
                    <img src={item.low_res} alt="Low res" />
                    </td>
                    <td style={{
                        color : item.status ? "green" : "black"
                    }}>
                    {item.status ? 'Completed' : 'Processing...'}
                    </td>
                    <td>
                    {item.status ? (
                        <div>
                            <a onClick={() => handleDownload(item.high_res, `image_${index}.png`)} className='download-btn'>
                                Download
                            </a>
                            <span>/</span>
                            <a href={item.high_res} className='view-btn'>
                                View
                            </a>
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
