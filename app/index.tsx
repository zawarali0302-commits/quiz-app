import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex:1, justifyContent:"center", alignItems:"center" }}>
      <Text style={{ fontSize:28, marginBottom:20 }}>Quiz App</Text>

      <Link href="/quiz" asChild>
        <Pressable style={{ backgroundColor:"#4a90e2", padding:15 }}>
          <Text style={{ color:"white" }}>Start Quiz</Text>
        </Pressable>
      </Link>
    </View>
  );
}


