import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F7",
  },
  teacherList: {
    marginTop: -40,
  },
  searchForm: {
    marginBottom: 24,
  },
  label: {
    color: "#d4c2ff",
    fontFamily: "Poppins_400Regular",
  },
  input: {
    height: 48,
    backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginTop: 2,
    marginBottom: 12,
  },
  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputBlock: {
    width: "49%",
  },
  submitButton: {
    backgroundColor: "#04d361",
    flexDirection: "row",
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 26,
  },
  submitButtonText: {
    color: "#fff",
    fontFamily: "Archivo_700Bold",
    fontSize: 16,
  },
  teacherItemEmpty: {
    flex: 1,
    marginTop: 60,
    color: "#8257E5",
    fontFamily: "Archivo_700Bold",
  },
});

export default styles;
