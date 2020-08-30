export default (state = [], action)=>{
    if(action.type === 'POSTS'){
        //console.log("post_reducer",action.payload)
        return action.payload;
    }
    return state;
}