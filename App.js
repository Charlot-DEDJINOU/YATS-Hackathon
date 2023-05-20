import { StyleSheet,View } from 'react-native';
import Welcome from './screens/Welcome'

export default function App() {
  return (
    <View style={styles.container}>
        <Welcome />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#471045',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%' ,
    height: '100%'
  },
});
