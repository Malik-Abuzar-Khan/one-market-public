import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    height: 230,
    backgroundColor:"orange"
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
  itemsRowText: {},
  rows: {
    width: "100%",
    flexDirection: "row",
  },
  borderStyle: {
    borderWidth: 1,
    borderColor: "rgba(185, 185, 185, 0.8)",
    flexDirection: "row",
  },
  fullWidth: {
    width: "100%",
  },
  scrollViewHeight: {
    backgroundColor:"green",
    height:"78%"
  },
  rowContainers: {
    width: 117.4,
    borderRightWidth: 1,
    borderRightColor: "rgba(185, 185, 185, 0.8)",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 4
  },
  productNameContainerWidth: {
    width: 117,
  },
  productNameText: {
    alignSelf: "center",
    marginHorizontal: 5,
  },
  productDescriptionContainerWidth: {
    width: 102,
  },
  productDescriptionText: {
    alignSelf: "center",
  },
  productEditContainerWidth: {
    width: 60,
    paddingTop: 10,
  },
  productDeleteContainerWidth: {
    width: 58.2,
  },
});

export const iconColor = "#000000";
export const rowCellSizes = [118, 102, 60, 58.2]
