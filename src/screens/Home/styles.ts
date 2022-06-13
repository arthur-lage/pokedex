import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { COLORS } from "../../theme/colors";
import { FONTS } from "../../theme/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
  },
  options: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  option: {
    marginRight: 25,
  },
  header: {
    marginTop: getStatusBarHeight() + 40,
  },
  title: {
    marginTop: 35,
    fontFamily: FONTS.text700,
    fontSize: 32,
    lineHeight: 38,
    color: COLORS.text.black,
    marginBottom: 12,
  },
  description: {
    color: COLORS.text.gray,
    fontSize: 16,
    lineHeight: 19,
    fontFamily: FONTS.text400,
    marginBottom: 25,
  },
  searchBarWrapper: {
    backgroundColor: COLORS.background.light_gray,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 27,
    paddingVertical: 22,
    marginBottom: 45,
  },
  searchBarIcon: {
    marginRight: 12,
  },
  searchBar: {
    fontFamily: FONTS.text400,
    fontSize: 16,
    lineHeight: 19,
    paddingRight: 25,
    color: COLORS.text.black,
  },
  pokemonList: {
    flexDirection: "column",
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  loadingText: {
    color: COLORS.text.gray,
    fontFamily: FONTS.text500,
    fontSize: 16,
    marginTop: 20
  },
});
