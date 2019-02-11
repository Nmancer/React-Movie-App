import theme from "styled-theming";

const Colors = {
  PrimaryDark: "#000",
  SecondaryDark: "#18171d",
  TertiaryDark: "#232027",
  PrimaryLight: "#fff",
  SecondaryLight: "#f6f6f6",
  TertiaryLight: "#e8e8e8",
  BackgroundDark: "#18171d",
  BackgroundLight: "#ededed",
  Green: "#2ecc71",
  Blue: "#a537fd",
  Red: "#f03434",
  Orange: "#f89406"
};
export const AccentColor = theme("accent", {
  red: Colors.Red,
  green: Colors.Green,
  blue: Colors.Blue,
  orange: Colors.Orange
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
