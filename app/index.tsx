import { View, Text, Pressable } from 'react-native';
import { Stack, Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <View className="flex-1 justify-center items-center bg-gray-50 px-6">
        <Text className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
          Welcome to Bolt Expo NativeWind!
        </Text>
        <Text className="text-lg text-gray-700 text-center mb-10">
          This is your modern Expo + Tailwind NativeWind starter app.
        </Text>
        <Link href="/profile" asChild>
          <Pressable className="bg-blue-600 px-8 py-4 rounded-xl shadow-lg hover:bg-blue-700">
            <Text className="text-white text-lg font-semibold text-center">
              Go to Profile
            </Text>
          </Pressable>
        </Link>
      </View>
    </>
  );
}
