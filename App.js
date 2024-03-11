import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SettingsLayout from './source/settings';

export default function App() {
  return (
    <View style={styles.container}>
      <SettingsLayout/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    top:30
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
