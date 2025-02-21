import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Switch, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import {useState} from 'react';

export default function App() {
  const [isActive, setIsActive] = useState();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text selectable style={styles.text}>sdfhuiashd fgsdfgsdf</Text>
      </View>
      <Text selectable> {/*numberOfLines={1} ellipsizeMode='tail'*/}
        Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa de bebadis, arcu quam euismod magna.
        Cevadis im ampola pa arma uma pindureta. Leite de capivaris, leite de mula manquis sem cabeça.
        Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.</Text>
      {/* <TextInput placeholder='Aquiiiiiii' style={styles.container} /> */}
      <TextInput editable={true}
        placeholder='Informe seu Nome' 
        style={styles.textInput}  
        keyboardType='decimal-pad'
        secureTextEntry
        autoFocus />
      <TextInput editable={false} placeholder='Sua  senha'style={styles.textInput}/>
      <Image source={{uri: 'https://reactnative.dev/docs/assests/p_cat2.png'}}
              style={{width:100, height:100}}
              resizeMode='repeat'/>
      <Button title='Press me' color={'red'}/>
      <TouchableOpacity>
        <Text>Press Mee</Text>
      </TouchableOpacity>
      <TouchableHighlight activeOpacity={0.5} underLayColor='red' onPress={() => console.log('Ops!')}>
        Yeaaaaap
      </TouchableHighlight>
      <Switch 
        value={isActive}
        onValueChange={() => setIsActive(!isActive)} trackColor={{false: 'red', true:'green'}} thumbColor={isActive ? 'green' : 'red'}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 1,
    width: "100%"
  }, half:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    fontSize: 45,
    color: 'lightblue',
    backgroundColor: 'black'
  },
  textInput:{
    fontSize:  25,
    width: '80%',
    borderColor:'purple',
    borderRadius: 10,
  }
});
