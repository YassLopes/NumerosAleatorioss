import { useState } from "react";
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  const [min, setMin] = useState<string>("");
  const [max, setMax] = useState<string>("");
  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  const generateRandomNumber = () => {
    const minValue = parseInt(min);
    const maxValue = parseInt(max);

    if (isNaN(minValue) || isNaN(maxValue)) {
      Alert.alert("Erro", "Digite valores numéricos válidos.");
      return;
    }

    if (minValue >= maxValue) {
      Alert.alert("Erro", "O valor mínimo deve ser menor que o máximo.");
      return;
    }

    const random = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    setRandomNumber(random);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#916e10", dark: "#916e10" }}
      headerImage={
        <Image source={require("@/assets/images/pintinho.gif")} style={styles.reactLogo} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Gerador de Números Aleatórios FluffyChick</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Defina o intervalo 🐤</ThemedText>

        <TextInput
          style={styles.input}
          placeholder="Mínimo"
          keyboardType="numeric"
          value={min}
          onChangeText={setMin}
        />
        <TextInput
          style={styles.input}
          placeholder="Máximo"
          keyboardType="numeric"
          value={max}
          onChangeText={setMax}
        />

        <TouchableOpacity style={styles.button} onPress={generateRandomNumber}>
          <Text style={styles.buttonText}>Gerar Número</Text>
        </TouchableOpacity>

        {randomNumber !== null && (
          <ThemedText type="title" style={styles.result}>
            Número gerado: {randomNumber}
          </ThemedText>
        )}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 16,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 18,
    backgroundColor: "#fff",
    alignSelf: "center",
  },
  result: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  button: {
    backgroundColor: "#916e10",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

