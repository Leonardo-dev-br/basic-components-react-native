import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text selectable> {/*numberOfLines={1} ellipsizeMode='tail'*/}
        Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa de bebadis, arcu quam euismod magna.
        Cevadis im ampola pa arma uma pindureta. Leite de capivaris, leite de mula manquis sem cabeça.
        Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.</Text>
      {/* <TextInput placeholder='Aquiiiiiii' style={styles.container} /> */}
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
  textInput: {
    borderWidth: 1,
    width: "100%"
  }
});
