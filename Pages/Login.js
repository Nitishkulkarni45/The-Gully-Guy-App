import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, ImageBackground,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 




const Login = ({ navigation }) => {
  
    const [isSecure,setIsSecure] = useState(true);
  
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <View style={styles.loginForm} >
            <ImageBackground source={require('C:/Users/Admin/Desktop/ReactNative/the_gully_guy/assets/images/Cheers.png')}/>
        <View style={styles.loginName}>
        {/* <Text>Name</Text> */}
      <TextInput  placeholder='Username' ></TextInput>
        </View>
        <View style={styles.loginName}>
        <TextInput  placeholder='Password'
        secureTextEntry={isSecure? true : false}></TextInput>
        </View>
        <View style={styles.remPass}>
            <Text style={styles.pass}>Show Password</Text>
            <View style={styles.eyecon}>
            <TouchableOpacity onPress={()=> setIsSecure(!isSecure)} style={styles.touchIcon}>
        <Icon
          name={isSecure ? 'eye-off' : 'eye'} // Closed eye when hidden, open eye when visible
          size={20}
          color="gray"
        />
        </TouchableOpacity>
            </View>

        </View>
      </View >
      <View style={styles.buttonStyle}>
      <Button title="Login" onPress={() => navigation.navigate('MainApp')}  style={styles.logbut}/>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'yellow',
  },
  buttonStyle:{
    paddingTop: 10,
    width:150,
  },
  loginForm:{
    backgroundColor: '#eef7ff',
    height:400,
    width:250,
    borderColor:'green',
    borderWidth:2,
    borderRadius:10,
    padding:10,
    
    
    // flex:1,
    // flexDirection:'column',
  },
  loginName:{
    backgroundColor:'white',
    padding:5,
    marginTop:5,
    borderRadius:10,
  },
  remPass:{
    marginLeft:5,
    marginTop:10,
    flexDirection:'row',
  },
  pass:{
    color:'blue',
    fontSize:12,
    fontWeight:'bold',
  },
 eyecon:{
  marginLeft:5,
  textAlign:'center',
  // fontSize:10,
 },
});

export default Login;
