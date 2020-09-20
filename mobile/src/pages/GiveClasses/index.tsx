import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground, View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import giveClassesBgImage from "../../assets/images/give-classes-background.png";

import styles from "./styles";

function GiveClasses() {
  const { goBack } = useNavigation();
  function handleNavigateToLanding() {
    goBack();
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={giveClassesBgImage}
        style={styles.content}
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Text>
      </ImageBackground>
      <RectButton onPress={handleNavigateToLanding} style={[styles.okButton]}>
        <Text style={styles.buttonText}>Entendi!</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;
