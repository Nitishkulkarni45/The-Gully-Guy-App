import React from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';


const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <View style={styles.loginForm}>
        <View style={styles.loginName}>
        {/* <Text>Name</Text> */}
      <TextInput  placeholder='Username'></TextInput>
        </View>
        <View style={styles.loginName}>
        <TextInput  placeholder='Password'></TextInput>
        </View>
      </View >
      <View style={styles.buttonStyle}>
      <Button title="Login" onPress={() => navigation.navigate('MainApp')} />
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
  },
  loginForm:{
    backgroundColor:'grey',
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
  }
});

export default Login;
