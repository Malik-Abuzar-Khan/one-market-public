import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerMainContainer: {
    paddingTop: 14,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#C4C4C4",
    borderBottomWidth: 1,
    position: "relative",
    marginTop: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  burgerIcon: {
    width: 16,
    height: 16,
  },
  appIconContainer: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    marginTop: 0,
    marginBottom: 5,
    marginLeft: "auto",
    marginRight: "auto",
    zIndex: 1,
  },
  appIcon: {
    width: 20,
    height: 18,
  },
  heading: {
    fontSize: 15,
    fontWeight: "500",
    color: "#000000",
    letterSpacing: 0.6,
    marginTop: 5,
  },
  span: {
    fontSize: 15,
    fontWeight: "500",
    color: "#FC0F0F",
    letterSpacing: 0.6,
  },
  iconsBtnContainer: {
    flexDirection: "row",
  },
  icon: {
    marginRight: 8,
    width: 15,
    height: 16,
  },
  personIcon: {
    width: 15,
    height: 16,
  },
  moveLeft: {
    left: 20,
  },
  logoutButton: {
    borderWidth: 0.4,
    borderColor: "black",
    padding: 6,
    borderRadius: 2,
    shadowColor: "#000000",
    elevation: 1,
  },
  logoutButtonText: {
    fontSize: 10
  }
});
