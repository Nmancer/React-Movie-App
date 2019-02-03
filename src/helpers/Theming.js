import theme from "styled-theming";

const Colors = {
  PrimaryDark: "#000",
  SecondaryDark: "#18171d",
  TertiaryDark: "#232027",
  PrimaryLight: "#fff",
  SecondaryLight: "#d6d6d6",
  TertiaryLight: "#e8e8e8",
  BackgroundDark: "#18171d",
  BackgroundLight: "#ededed",
  Green: "",
  Blue: "",
  Red: ""
};
export const AccentColor = theme("accent", {
  red: "#f03434",
  green: "#2ecc71",
  blue: "#a537fd"
});

export const PrimaryColor = theme("mode", {
  light: Colors.PrimaryLight,
  dark: Colors.PrimaryDark
});
export const SecondaryColor = theme("mode", {
  light: Colors.SecondaryDark,
  dark: Colors.SecondaryLight
});
export const TertiaryColor = theme("mode", {
  light: Colors.TertiaryDark,
  dark: Colors.TertiaryLight
});
export const BackgroundColor = theme("mode", {
  light: Colors.BackgroundLight,
  dark: Colors.BackgroundDark
});
