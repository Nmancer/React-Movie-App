import theme from "styled-theming";

const Colors = {
  PrimaryDark: "#2b2b31",
  SecondaryDark: "#18171d",
  TertiaryDark: "#232323",
  PrimaryLight: "#fff",
  SecondaryLight: "#bdc3c7",
  TertiaryLight: "#e8e8e8",
  QuaternaryDark: "#4a4951",
  QuaternaryLight: "#f2f2f2",
  BackgroundDark: "#18171d",
  BackgroundLight: "#e8e8e8",
  Green: "#2ecc71",
  Blue: "#a537fd",
  Red: "#f03434",
  Orange: "#f9690e"
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
export const QuaternaryColor = theme("mode", {
  light: Colors.QuaternaryLight,
  dark: Colors.QuaternaryDark
});
export const BackgroundColor = theme("mode", {
  light: Colors.BackgroundLight,
  dark: Colors.BackgroundDark
});
