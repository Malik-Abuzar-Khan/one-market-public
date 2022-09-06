import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
  },
  itemsHeadingRowText: {
    color: "#000",
    marginTop: 0,
    marginBottom: 0,
    marginLeft: "auto",
    marginRight: "auto",
  },
  HeadStyle: {
    height: 50,
    backgroundColor: "rgba( 0, 0, 0, 0.05)",
  },
  itemsRowText: {
    // marginTop: 10,
    // marginBottom: 10,
    // marginLeft: "auto",
    // marginRight: "auto",
  },
  rows: {
    width:"100%",
    transform:[{translateX: -4}]
  },
  borderStyle: {
    borderWidth: 1,
    borderColor: "rgba(185, 185, 185, 0.8)",
  },
  fullWidth: {
    width: "100%",
  },
  scrollViewHeight: {
    height: 180,
  },
});
