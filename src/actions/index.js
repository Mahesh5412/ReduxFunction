
//  const loginAction= (username,password,type,corpcode)=>{
//     return {
//      type:"LOGIN",
//       payload:{
//         username:username,
//         password:password,
//         type:type,
//         corpcode:corpcode
//       }
//     };
    
// }
const loginAction= (state)=>{
  //console.log('I will run after every render1222');
  return {
    
   type:"LOGIN",
    payload:{
      state
    }
  };
  
}

export default loginAction