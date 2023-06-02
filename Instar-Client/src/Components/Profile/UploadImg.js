import React , {useState} from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { uploadPicture } from '../../Actions/user.actions';

const UploadImg = () => {
    const [file , setFile] = useState([]);
    console.log(file);
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userReducer);

    const handlePicture = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("name",file.name);
        data.append("userId",userData._id);
        data.append("file",file) ;
        //this function upload picture helps you upload your profile 
        //uploaded file is a range of integer from 0 to 10 and contains all values 
        dispatch(uploadPicture(data,userData._id))
    }

    return(
    <form action="" onSubmit={handlePicture} className='upload-pic'>
        <label htmlFor='file'> change your image</label> <br/>
        <input 
        type="file" 
        id="file" 
        name="file" 
        accept=".jpg, .jpeg , .png"
        onChange={(e) => setFile(e.target.files[0])}/>
        <br/>
        <button type="submit">Save changes</button>
    </form>
    )
}

export default UploadImg;