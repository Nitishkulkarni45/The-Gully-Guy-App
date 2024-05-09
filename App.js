import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Hello There how are you??</Text> */}
      <Image style={styles.img} source={require('./assets/images/Cheers.png')}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    height:200,
    width:200,
  }
});
