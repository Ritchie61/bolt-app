import { View, Text } from 'react-native';

export default function AppHeader() {
  return (
    <View className="w-full px-6 py-4 bg-white border-b border-gray-200">
      <Text className="text-xl font-bold text-gray-900">
        Bolt App
      </Text>
      <Text className="text-sm text-gray-500">
        Expo • NativeWind • Router
      </Text>
    </View>
  );
}
