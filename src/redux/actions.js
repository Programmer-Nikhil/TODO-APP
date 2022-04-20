import * as types from './actionType';
import axios from 'axios';

const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users
})

const userDeleted = () => ({
    type: types.DELETE_USER,
})

const userAdded = (user) => ({
    type: types.ADD_USER,
})

const userUpdated = () => ({
    type: types.UPDATE_USER,
})

const singleUserFound = (user) => ({
    type: types.GET_SINGLE_USER,
    payload: user
})

export const loadUsers = () => {
    return (dispatch) => {
        axios.get('http://localhost:5000/user').then(res => {
            console.log('data :: ', res.data);
            dispatch(getUsers(res.data));
        }).catch(error => console.log(error));
    }
}

export const deleteUser = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:5000/user/${id}`).then(res => {
            console.log('data :: ', res.data);
            dispatch(userDeleted());
            dispatch(loadUsers());
        }).catch(error => console.log(error));
    }
}

export const addUser = (user) => {
    return (dispatch) => {
        axios.post(`http://localhost:5000/user`, user).then(res => {
            console.log('data :: ', res.data);
            dispatch(userAdded());
        }).catch(error => console.log(error));
    }
}

export const getSingleUser = (id) => {
    return (dispatch) => {
        axios.get(`http://localhost:5000/user/${id}`).then(res => {
            dispatch(singleUserFound(res.data));
        }).catch(error => console.log(error));
    }
}

export const updateUser = (user) => {
    return (dispatch) => {
        axios.put(`http://localhost:5000/user/${user.id}`, user).then(res => {
            dispatch(userUpdated());
        }).catch(error => console.log(error));
    }
}