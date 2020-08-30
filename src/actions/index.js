import json from '../jsonApi/jsonPlaceHolder';

export const getPosts = ()=> async dispatch => {
    const response = await json.get('/posts');
    dispatch({type: "POSTS", payload: response.data});
    //console.log(response.data);
}

export const getTodos = () => async dispatch =>{
    const response = await json.get("/todos");
    dispatch({type: "TODOS", payload: response.data});
    //console.log(response.data);
}