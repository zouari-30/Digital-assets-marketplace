import React from "react";
import { useState } from "react";
import axios from "axios";
const Uploadimages = () => {
    function upload(file, onUploadProgress) {
        let formData = new FormData();
        formData.append("file", file);
        return axios.post(`${process.env.REACT_APP_API_URL}api/product/upload-products/62a1d98757a74d4c68efc4f1`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress,
        });
      }
    const [selectedFiles,setSelectedFiles] = useState(undefined)
    const [data,setData] = useState([])
    const [previewImages,setPreviewImages] = useState([])
    const [progressInfos,setProgressInfos] = useState([])
    const [message,setMessage] = useState([])
    const [imageInfos,setImagesInfos] = useState([])

    function selectFiles (event) {
        for (let i = 0; i < event.target.files.length; i++) {
            previewImages.push(URL.createObjectURL(event.target.files[i]))
        };
        setSelectedFiles(event.target.files);
        data.push(event.target.files)
    }

    function deleteImages () {
        
    }

    function uploadImages() {
        let _progressInfos = [];
        for (let i = 0; i < data.length; i++) {
          progressInfos.push({ percentage: 0, fileName: data[i][0].name });
        }

        for (let i = 0; i < data.length; i++) {
            //   upload(i, data[i]);
            // let _progressInfos = [... progressInfos];
            upload(data[i][0], (event) => {
              progressInfos[i].percentage = Math.round((100 * event.loaded) / event.total);
              setProgressInfos(progressInfos);
            })
              .then(() => {
                setMessage((prev) => {
                  let nextMessage = [prev.message, "Uploaded the image successfully: " + data[i][0].name];
                  return {
                    message: nextMessage
                  };
                });
                // return UploadService.getFiles();
              })
              .then((files) => {
                setImagesInfos({
                  imageInfos: files.data,
                });
              })
              .catch(() => {
                _progressInfos[i].percentage = 0;
                this.setState((prev) => {
                  let nextMessage = [...prev.message, "Could not upload the image: " + data[i].name];
                  return {
                    progressInfos: _progressInfos,
                    message: nextMessage
                  };
                });
              });
            }
          
      }
    return (
        <>
        <div className="row">
          <div className="col-8">
            <label className="btn btn-default p-0">
              <input type="file" multiple accept="image/*" onChange={selectFiles} />
            </label>
          </div>
          <div className="col-4">
            <button className="btn btn-success btn-sm" disabled={!selectedFiles} onClick={uploadImages}>
              Upload
            </button>
            <button className="btn btn-danger btn-sm" disabled={!selectedFiles} onClick={deleteImages}>
              Delete
            </button>
          </div>
        </div>
        {progressInfos &&
          progressInfos.map((progressInfo, index) => (
            <div className="mb-2" key={index}>
              <span>{progressInfo.fileName}</span>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-info"
                  role="progressbar"
                  aria-valuenow={progressInfo.percentage}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: progressInfo.percentage + "%" }}
                >
                  {progressInfo.percentage}%
                </div>
              </div>
            </div>
          ))}
          {/* display choosen image  */}
        {previewImages && (
          <div>
            {previewImages.map((img, i) => {
              return( 
                <div class="col-md-3" >
                    <img className="preview" src={img} alt={"image-" + i}  key={i} />
                </div>
              )
            })}
          </div>
        )}
        {message.length > 0 && (
          <div className="alert alert-secondary" role="alert">
            <ul>
              {message.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ul>
          </div>
        )}
        <div className="card mt-3">
          <div className="card-header">List of Files</div>
          <ul className="list-group list-group-flush">
            {imageInfos &&
              imageInfos.map((img, index) => (
                <li className="list-group-item" key={index}>
                  <p><a href={img.url}>{img.name}</a></p>
                  <img src={img.url} alt={img.name} height="80px" />
                </li>
              ))}
          </ul>
        </div>
        </>
    )
}
export default Uploadimages;