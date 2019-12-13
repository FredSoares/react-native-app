import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff2',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
  },
});

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.hello}>Hello World!</Text>
      </View>
    </>
  );
};

export default App;
