import axios from "axios";
export const GET_USER = "Get_USER";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE";
export const UPDATE_NAME = "UPDATE_NAME"

export const getUser = (uid) => {
    //dispatch is what we give to reducer 
    return (dispatch) => {
        return axios.get (`${process.env.REACT_APP_API_URL }api/user/${uid}`)
        .then((res) => {
            //the common type gived to the reducer 
            dispatch({type:GET_USER , payload : res.data}) ;
        })
        .catch ((err) => console.log(err));
    };
};

export const uploadPicture = (data,id) => {
    return (dispatch) => {
        return axios
            .post(`${process.env.REACT_APP_API_URL}api/user/upload` , data)
            .then ((res) => {
                return axios
                    .get (`${process.env.REACT_APP_API_URL }api/user/${id}`)
                    .then ((res) => {
                        dispatch({type:UPLOAD_PICTURE, payload: res.data.picture})
                    })
            })
            .catch ((err) => console.log(err)) ;
    }
}

export const updateName = (userId,name) => {
    return (dispatch) => {
        return axios ({
            method : "put",
            url : `${process.env.REACT_APP_API_URL}api/user/` + userId , 
            data : {name}
        })
        .then ((res) => {
            dispatch({type: UPDATE_NAME , payload:name})
        })
        .catch((err) => console.log(err))
    }
}