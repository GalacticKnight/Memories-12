import * as api from '../api';

//action creators are functions that reuturn an action// and the action is just an object that has a type and a payload
export const getPosts = () => async(dispatch) =>{
    try {
        const {data} = await api.fetchPosts();
        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

// const action = {type: 'FETCH_ALL', payload:[]}
//     return action;