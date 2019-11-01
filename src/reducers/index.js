
const initialState={

 login:"",
 
    
}
// const initialState={

//     type: "",
//     username: "",
//     password: "",
//     corpcode:""
// }

const reducer=(state=initialState,action)=>{
  //  console.log('I will run after every render2222');
switch (action.type){
    case "LOGIN":
 
       state.login = action.payload

        return state
      
        
    default:
        return state
}
}

export default reducer