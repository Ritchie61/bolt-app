import { View, Text } from 'react-native';

export default function AppFooter() {
  return (
    <View className="w-full px-6 py-3 bg-white border-t border-gray-200">
      <Text className="text-center text-xs text-gray-500">
        © 2026 Bolt App • v1.0.0
      </Text>
    </View>
  );
}
