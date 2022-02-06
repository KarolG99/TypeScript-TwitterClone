import {
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  UploadIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";
import React, { useState, useRef, useEffect } from "react";
import {
  CancelButton,
  ShadowDiv,
  TweetButton,
} from "../AddPostButton/AddPostButton.styles";
import {
  IconsWrapper,
  OptionListModal,
  Post,
  PostContent,
  PostOption,
  Section,
  UserImage,
  UserInfoWrapper,
} from "./SinglePost.styles";
import { ReactComponent as RetweetIcon } from "../../assets/icons/retweet.svg";

interface SinglePostProps {
  username: string;
  text: string;
  image?: any;
  userImage: string;
  time?: string;
  onClick?: () => void;
}

const SinglePost = ({
  username,
  text,
  image,
  userImage,
  time = "przed chwilą",
  onClick,
}: SinglePostProps): JSX.Element => {
  const [hasLiked, setHasLiked] = useState(false);
  const [like, setLike] = useState(10);
  const PostOptionRef = useRef<HTMLUListElement>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect((): void => {
    if (PostOptionRef.current) {
      PostOptionRef.current.style.display = "none";
    }
  }, []);

  const ShowPostOptionList = (): void => {
    if (PostOptionRef.current) {
      if (PostOptionRef.current.style.display === "none") {
        PostOptionRef.current.style.display = "block";
      } else {
        PostOptionRef.current.style.display = "none";
      }
    }
  };

  const handleLikePost = (): void => {
    setHasLiked((prevState) => !prevState);

    if (!hasLiked) {
      setLike((currentLikes) => currentLikes + 1);
    } else {
      setLike((currentLikes) => currentLikes - 1);
    }
  };

  const CloseModal = (): void => {
    if (modalOpen) setModalOpen(false);
  };

  const ClosePostOptionList = (): void => {
    if (PostOptionRef.current?.style.display === "block")
      PostOptionRef.current.style.display = "none";
  };

  return (
    <Section onClickCapture={ClosePostOptionList}>
      {modalOpen && (
        <>
          <OptionListModal>
            <p>Usunąć Tweeta?</p>
            <TweetButton onClick={onClick}>Tak</TweetButton>
            <CancelButton onClick={CloseModal}>Nie</CancelButton>
          </OptionListModal>
          <ShadowDiv />
        </>
      )}

      {userImage && <UserImage src={userImage} alt="zdjęcie użytkownika" />}

      <Post>
        <UserInfoWrapper>
          <span className="username">{username}</span>
          <span className="usertag">
            {" "}
            @{username}﹒{time}
          </span>
        </UserInfoWrapper>

        <PostContent>
          <p>{text}</p>
          {image && <img src={image} alt="zdjęcie w poście" />}
        </PostContent>

        <IconsWrapper>
          <div className="singleIconWrapper">
            <ChatIcon className="PostIcon" />
            120
          </div>

          <div className="singleIconWrapper">
            <RetweetIcon className="PostIconInFolder" />
            18
          </div>

          <button className="singleIconWrapper" onClick={handleLikePost}>
            {hasLiked ? (
              <HeartIconSolid className="PostIcon" />
            ) : (
              <HeartIcon className="PostIcon" />
            )}
            {like > 0 && <>{like}</>}
          </button>

          <div className="singleIconWrapper">
            <UploadIcon className="PostIcon" />
          </div>
        </IconsWrapper>

        <PostOption onClick={ShowPostOptionList}>
          <ul ref={PostOptionRef}>
            <li onClick={() => setModalOpen(true)}>Usuń</li>
          </ul>
          <DotsHorizontalIcon className="PostOptionIcon" />
        </PostOption>
      </Post>
    </Section>
  );
};

export default SinglePost;
