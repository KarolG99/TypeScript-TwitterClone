import React from "react";
import { StyledHeader, StyledSparklesIcon, StyledTwitterIcon } from "./Header.styles";

const Header = (): JSX.Element => {
  return (
    <StyledHeader>
      <img
        src="https://picsum.photos/31/31"
        alt="zdjęcie profilowe zalogowanego użytkownika"
      />
      <StyledTwitterIcon />
      <StyledSparklesIcon />
    </StyledHeader>
  );
};

export default Header;
