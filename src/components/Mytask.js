
import React from 'react';
import { View,Text,TouchableOpacity} from 'react-native';

const Mytasks = () => {

     navigationOptions = {
        tabBarLabel: 'MYTASK',
        header: null,
        headerMode:'none'
      };
// mahesh()={
//   alert(mahesh)
// }
return(

    <View style={{flex:1}}>

   {/* <TouchableOpacity onPress={{mahesh()}}>  */}
   <TouchableOpacity>
      <Text style={{marginTop:20,color:'black',textAlign:'center'}} >
        MYTASKS
      </Text>
    </TouchableOpacity>
    <Text> Mahesh</Text>
    </View>


)


}

export default Mytasks