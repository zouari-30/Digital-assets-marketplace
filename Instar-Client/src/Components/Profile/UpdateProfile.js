import React , {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateName } from '../../Actions/user.actions';
import UploadImg from './UploadImg';

const UpdateProfile = () => {
    const [name,setName] = useState("");
    const [updateForm ,  setUpdateForm] = useState(false);
    const userData = useSelector((state) => state.userReducer)
    const dispatch = useDispatch();

    const handleUpdate = () => {
        dispatch (updateName(userData._id,name))
    }
    return (
        <div className='profile-container'>
            <h1>Profile of {userData.name}</h1>
            <div className='update-container'>
                <div className='left-part'>
                    <h3>Profile picture</h3>
                    <img src ={userData.picture} alt="user-pic"
                    style={{
                    height:"100px" ,
                    width : "100px",
                    'border-radius': "50%",
                     border: "10px solid #FEDE00"}}/>
                    <UploadImg/>
                </div>
                <div className='right-part'>
                        <div className=''>
                            {updateForm === false && (
                                <>
                                    <p onClick={() => setUpdateForm(!updateForm)}>Name</p>
                                    <p onClick={() => setUpdateForm(!updateForm)}>{userData.name}</p>
                                    <button onClick={() => setUpdateForm(!updateForm)}>
                                        Edit
                                    </button>
                                </>
                            )}
                            {updateForm  && (
                                <>
                                    <textarea type="text" defaultValue={userData.name} onChange ={
                                        (e) => setName(e.target.value)}>

                                    </textarea>
                                    <button onClick={handleUpdate}>
                                        Edit
                                    </button>
                                    <button onClick={()=> setUpdateForm(!updateForm)}>
                                        Cancel
                                    </button>
                                </>
                            )}
                        </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateProfile ;