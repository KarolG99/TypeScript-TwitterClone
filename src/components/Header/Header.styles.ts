import styled from "styled-components";
import { SparklesIcon } from "@heroicons/react/outline";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter.svg";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.navy};
  padding: 10px 15px;

  img {
    border-radius: 50%;
  }
`;

export const StyledSparklesIcon = styled(SparklesIcon)`
  width: 40px;
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledTwitterIcon = styled(TwitterIcon)`
    fill: ${({ theme }) => theme.colors.twitterBlue};
`;