import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.field}>Nome:</Text>
      <TextInput style={styles.txtfield}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(105,105,105)',
    //alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  field: {
            color:  '#fff',
            fontSize: 25,

          },
txtfield:{
          backgroundColor: '#363636',
          width: 300,
          borderRadius: 30,
          padding: 10,
          margin: 20,

        }
          
});
