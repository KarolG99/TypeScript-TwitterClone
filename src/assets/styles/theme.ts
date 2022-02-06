export interface DefaultTheme {
  colors: {
    white: string;
    black: string;
    twitterBlue: string;
    red: string;
    navy: string;
    lightLine: string;
    darkGray: string;
  };
  fontSize: {
    sm: string;
    m: string;
  };
}

export const theme: DefaultTheme = {
  colors: {
    white: "#FFFFFF",
    black: "#111111",
    twitterBlue: "#1DA1F2",
    red: "#EF4444",
    navy: "#14202A",
    lightLine: "#6A7884",
    darkGray: "#657786",
  },
  fontSize: {
    sm: "0.9rem",
    m: "1.5rem",
  },
};
