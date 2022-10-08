export function navigateToHome(setShowNavigator, navigation) {
  setShowNavigator(false);
  navigation.navigate("home");

}

export function navigateToMyShop(setShowNavigator, navigation) {
  setShowNavigator(false);
  navigation.navigate("customize-shop");
}

export function navigateToAllShops(setShowNavigator, navigation) {
  setShowNavigator(false);
  navigation.navigate("all-shops");
}
