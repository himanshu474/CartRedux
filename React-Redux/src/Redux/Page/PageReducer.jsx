const initialState={
    home:true,
}

const PageReducer = (state=initialState,action) => {
  switch(action.type){
    case "HOME":
        return {home:true};
    case "CART":
        return {home:false}; 
    default:
        return state
    }

}

export default PageReducer