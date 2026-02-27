import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl font-bold">Tab One</Text>
      <View/>
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}


