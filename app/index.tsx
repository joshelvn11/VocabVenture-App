import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View
      className="flex items-center justify-center h-full w-full"
    >
      <Text className="text-2xl">VocabVenture Hello</Text>
      <StatusBar style='auto' />
      <Link href='/stats'>Go to stats</Link>
    </View>
  );
}
