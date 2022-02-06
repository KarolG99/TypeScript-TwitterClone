import styled from "styled-components";
import { Modal } from "../AddPostButton/AddPostButton.styles";

export const Section = styled.section`
  display: flex;
  padding: 0 0.75rem;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.lightLine};
  color: ${({ theme }) => theme.colors.white};
  margin-top: 0.5rem;
  position: relative;
  padding-bottom: 0.5rem;
`;

export const OptionListModal = styled(Modal)``;

export const UserImage = styled.img`
  border-radius: 50%;
  height: 100%;
  width: 50px;
  object-fit: contain;
`;

export const Post = styled.div`
  margin-left: 0.75rem;
`;

export const UserInfoWrapper = styled.div`
  margin-right: 30px;

  .username {
    font-weight: bold;
  }

  .usertag {
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

export const PostContent = styled.div`
  margin-top: 0.25rem;
  padding-right: 1.5rem;

  p {
    margin-top: 10px;
    margin-bottom: 0.6rem;
  }

  img {
    border-radius: 10px;
    max-width: 100%;
    max-height: 350px;
    object-fit: contain;
  }
`;

export const IconsWrapper = styled.div`
  color: ${({ theme }) => theme.colors.lightLine};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  width: 90%;
  min-width: 300px;
  font-size: ${({ theme }) => theme.fontSize.sm};

  button {
    border: none;
    width: fit-content;
    background-color: transparent;
    cursor: pointer;
    font-size: ${({ theme }) => theme.fontSize.sm};
  }

  .singleIconWrapper {
    color: ${({ theme }) => theme.colors.lightLine};
    display: flex;
    align-items: flex-end;

    .PostIcon {
      width: 1.25rem;
      color: ${({ theme }) => theme.colors.lightLine};
      margin-right: 7px;
    }

    .PostIconInFolder {
      width: 1.25rem;
      fill: ${({ theme }) => theme.colors.lightLine};
      margin-right: 7px;
    }
  }
`;

export const PostOption = styled.div`
  cursor: pointer;

  ul {
    position: absolute;
    top: 2px;
    right: 0.75rem;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.lightLine};
    list-style: none;
    padding: 0;

    li {
      /* border-bottom: 2px solid ${({ theme }) => theme.colors.navy}; */
      padding: 0.3rem 0.5rem;
    }
  }

  .PostOptionIcon {
    width: 1.5rem;
    color: ${({ theme }) => theme.colors.lightLine};
    position: absolute;
    right: 1rem;
    top: 0;
  }
`;
