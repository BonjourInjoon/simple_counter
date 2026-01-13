import { Text, View, StyleSheet, Pressable } from "react-native";
import { useCounterStore } from "@/store/useCounterStore";

export default function Index() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{count}</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={decrement}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={increment}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  counterText: {
    fontSize: 72,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 20,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#0a7ea4",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    fontSize: 36,
    color: "#fff",
    fontWeight: "bold",
  },
});
