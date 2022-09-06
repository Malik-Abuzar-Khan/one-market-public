import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  coverAndProfileContainer: {
    flex: 1,
    position: "relative",
    marginTop: 10,
  },
  coverImage: {
    width: "100%",
    height: 138,
    resizeMode: "contain",
  },
  coverImageContainer: {
    backgroundColor: "#DBDBDB",
    height: 138,
  },
  profileImageContainer: {
    backgroundColor: "#000000",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#000000",
    position: "absolute",
    top: 90,
    left: 10,
    overflow: "hidden",
  },
  profileImage: {
    width: 86,
    height: 88,
  },
  shopDiscriptionContainer: {
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    paddingTop: 10,
    paddingBottom: 10,
  },
  shopNameWrapperContainer: {
    width: "70%",
    alignSelf: "flex-end",
    paddingRight: 20,
  },
  shopDetailsWrapperContainer: {
    width: "90%",
    marginTop: 18,
    marginBottom: 0,
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  shopNameContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  shopName: {
    color: "#fff",
    fontSIze: 24,
    fontWeight: "700",
  },
  shopDetails: {
    fontSize: 10,
    color: "#FFFFFF",
  },
});
