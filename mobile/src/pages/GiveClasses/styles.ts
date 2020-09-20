import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8257E5",
    justifyContent: "center",
    padding: 40,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontFamily: "Archivo_700Bold",
    color: "#fff",
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180,
  },
  description: {
    fontFamily: "Poppins_400Regular",
    color: "#fff",
    fontSize: 16,
    lineHeight: 26,
    marginTop: 24,
    maxWidth: 240,
  },
  okButton: {
    marginVertical: 40,
    backgroundColor: "#04D361",
    height: 58,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "Archivo_700Bold",
    color: "#fff",
    fontSize: 20,
  },
});

export default styles;
