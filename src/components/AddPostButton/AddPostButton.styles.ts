import styled from "styled-components";
import { CameraIcon, PlusIcon } from "@heroicons/react/outline";

export const StyledAddPostBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.twitterBlue};
  width: fit-content;
  padding: 0.75rem;
  border-radius: 50%;
  position: fixed;
  bottom: 24px;
  right: 24px;
  border: none;
  cursor: pointer;
`;

export const StyledPlusIcon = styled(PlusIcon)`
  width: 1.75rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  padding: 1.75rem;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.navy};
  width: 300px;
  max-height: 80vh;
  overflow: scroll;
  margin-bottom: 1.75rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ImageToPost = styled.img`
  width: 100%;
  object-fit: contain;
  cursor: pointer;
  border-radius: 10px;
`;

export const PlaceholderImageToPost = styled.div`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.twitterBlue};
  width: 35%;
  margin: auto;
  border-radius: 50%;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const StyledCameraIcon = styled(CameraIcon)`
  width: 100%;
  margin: auto;
  color: ${({ theme }) => theme.colors.white};
`;

export const TweetButton = styled.button`
  background-color: ${({ theme }) => theme.colors.twitterBlue};
  border: none;
  width: 100%;
  padding: 0.5rem;
  border-radius: 7px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: medium;
  margin: 10px 0;
  cursor: pointer;
`;

export const CancelButton = styled(TweetButton)`
  background-color: ${({ theme }) => theme.colors.red};
  cursor: pointer;
`;

export const ShadowDiv = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: hsla(240,4%,46%,.5);
`;