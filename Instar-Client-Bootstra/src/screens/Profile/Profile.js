import React, { useContext } from 'react'
import {UidContext} from "../../Components/AppContext"
import UpdateProfile from '../../Components/Profile/UpdateProfile';


//this will show the page where you can see 
const Profile = () => {
    const uid = useContext(UidContext) ;
    return (
        <div className='profil-page'>
            {uid  ? (<UpdateProfile/>) : (<h1>hello</h1>) }
        </div>
    )
}

export default Profile ;