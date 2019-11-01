import React from 'react';
import { View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native';

class Splash extends React.Component{


  render(){
    return(
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
      <Image style={{ width: '40%', height: '30%' }} source={require('./images/logo.png')} />
      <Text style={styles.text}>Powered by Cadrac Labsss</Text>
      <Text></Text>
      <Text style={styles.text1}>1.0.0   11-10-2019</Text>
    </View>

    );

  }
}

const styles = StyleSheet.create({

  text: {
  
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    // fontFamily:'bold',
  
  },
  text: {
  
    textAlign: 'center',
    fontSize: 15,
    color: 'black',
    // fontFamily:'bold',
  
  },
  })
  
export default Splash