export default (state=[], actions) =>{
    if(actions.type === 'TODOS'){
        return actions.payload;
    }
    return state;
}