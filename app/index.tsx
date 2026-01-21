import { View, Text, StyleSheet, Button } from 'react-native';
import { Stack } from 'expo-router';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to your Expo App!</Text>
        <Link href="/profile">
          <Button title="Go to Profile" onPress={() => {}} />
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
