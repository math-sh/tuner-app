
import {  View } from '@/components/Themed';
import TunerUkulele from '@/components/TunerUkulele';

export default function UkuleleTunerScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <View className="h-1 w-full bg-gray-300" />
      <TunerUkulele />
    </View>
  );
}


