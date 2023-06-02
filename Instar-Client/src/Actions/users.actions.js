import axios from 'axios'

export const GET_ALL_USERS = 'GET_USERS';

export const getUsers = () => {
    return (dispatch) => {
        return axios.get(`${process.env.REACT_APP_API_URL}api/user/`)
        .then ((res) => {dispatch({type:GET_ALL_USERS,payload:res.data})})
        .catch((err) => console.log(err))
    }
}
