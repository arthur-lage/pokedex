import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/colors";
import { FONTS } from "../../theme/fonts";

export const styles = StyleSheet.create({
  pokemonWrapper: {
    width: "100%",
    marginBottom: 30,
    borderRadius: 10,
    padding: 20,
    marginTop: 12.5,
    zIndex: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
  },
  pokemonInfo: {
    flexDirection: "column",
  },
  pokemonNumber: {
    color: COLORS.text.number,
    fontFamily: FONTS.text700,
    lineHeight: 14,
    fontSize: 12,
  },
  pokemonName: {
    lineHeight: 31,
    fontSize: 26,
    fontFamily: FONTS.text700,
    color: COLORS.text.white,
    marginBottom: 5,
  },
  pokeballIcon: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  pokemonImage: {
    position: "absolute",
    top: -20,
    right: 10,
  },
  circlesIcon: {
    position: "absolute",
    left: 75,
    top: -12.5,
  },
  typeWrapper: {
    flexDirection: "row",
  },
  type: {
    marginRight: 10,
    borderRadius: 3,
    paddingVertical: 5.5,
    paddingHorizontal: 5,
    flexDirection: "row",
  },
  typeText: {
    fontFamily: FONTS.text400,
    fontSize: 12,
    lineHeight: 14,
    color: COLORS.text.white,
  },
});
