import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../assets/styles/GlobalStyle";
import { theme } from "../assets/styles/theme";
import AddPostButton from "../components/AddPostButton/AddPostButton";
import Header from "../components/Header/Header";
import Posts from "../components/Posts/Posts";
import PostsProvider from "../Providers/PostsProvider";
import { MainWrapper } from "./App.styles";

function App(): JSX.Element {
  return (
    <PostsProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <MainWrapper>
          <Posts />
          <AddPostButton />
        </MainWrapper>
      </ThemeProvider>
    </PostsProvider>
  );
}

export default App;
