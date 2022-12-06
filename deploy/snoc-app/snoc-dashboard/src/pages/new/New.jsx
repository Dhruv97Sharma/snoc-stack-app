import React, {useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from "../../components/sidebar/Sidebar"
import './new.scss'
import { DriveFolderUploadOutlined } from '@mui/icons-material'
const New = ({ inputs, title }) => {

  const [file, setFile] = useState('')
  console.log(file)
  return (
    <div className='new'>
      <Sidebar />
      <div className="new-container">
        <Navbar />  
        <div className="top">
          <h1 className="top-title">{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'} alt="" />
          </div>
          <div className="right">
            <form action="">
              <div className="form-input">
                <label htmlFor='file'>Image: <DriveFolderUploadOutlined className='form-avatar'/></label>
                <input type="file" id='file' style={{display: 'none'}} onChange={e=>setFile(e.target.files[0])}/>
              </div>  

              {inputs.map(input => (
                <div className="form-input" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} required/>
                </div>  
              ))}
              <button className="form-submit" type="submit">Send</button>
            </form>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default New