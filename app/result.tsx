import { View, Text, Pressable } from "react-native"
import { useLocalSearchParams, router } from "expo-router"

export default function Result() {

  const { score } = useLocalSearchParams()

  return (
    <View style={{ flex:1, justifyContent:"center", alignItems:"center" }}>

      <Text style={{ fontSize:28 }}>Quiz Completed 🎉</Text>

      <Text style={{ fontSize:22, marginVertical:20 }}>
        Your Score: {score}
      </Text>

      <Pressable
        style={{ backgroundColor:"#4a90e2", padding:15 }}
        onPress={() => router.push("/")}
      >
        <Text style={{ color:"white" }}>Restart Quiz</Text>
      </Pressable>

    </View>
  )
}