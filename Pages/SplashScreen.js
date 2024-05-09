import React, { useEffect } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Set a timeout to navigate to the Login screen after 5 seconds
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 5000);

    // Cleanup the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('C:/Users/Admin/Desktop/ReactNative/the_gully_guy/assets/images/Cheers.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 200,
    width: 200,
  },
});

export default SplashScreen;
