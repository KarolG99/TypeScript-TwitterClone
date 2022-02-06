import React, { useState, useRef, useContext } from "react";
import { PostsContext } from "../../Providers/PostsProvider";
import FormField from "../FormField/FormField";
import {
  CancelButton,
  ImageToPost,
  Modal,
  PlaceholderImageToPost,
  ShadowDiv,
  StyledAddPostBtn,
  StyledCameraIcon,
  StyledPlusIcon,
  TweetButton,
} from "./AddPostButton.styles";

interface initialFormStateInterface {
  username: string;
  content: string;
}

const initialFormState: initialFormStateInterface = {
  username: "",
  content: "",
};

const AddPostButton = (): JSX.Element => {
  const [formValues, setFormValues] =
    useState<initialFormStateInterface>(initialFormState);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const filePickerRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<unknown>(null);
  const { handleAddPost } = useContext(PostsContext);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const AddImageToPost = (e: { target: { files: Blob[] } }): void => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent: ProgressEvent<FileReader>): void => {
      setSelectedFile(readerEvent.target?.result);
    };
  };

  const CancelAddPost = (): void => {
    setSelectedFile(null);
    setFormValues(initialFormState);
    setModalOpen(false);
  };

  const SaveUsernameInLocalStorage = (name: string): string => {
    window.localStorage.setItem("name", JSON.stringify(name));
    const username: string = JSON.parse(
      window.localStorage.getItem("name") as string
    );
    return username;
  };

  const handleSubmitPost = (e: React.FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    if (formValues.content && formValues.username) {
      handleAddPost(formValues, selectedFile as string | File);
      setFormValues({
        username: SaveUsernameInLocalStorage(formValues.username),
        content: initialFormState.content,
      });
      setSelectedFile(null);
      setModalOpen((prevState) => !prevState);
    }
  };

  const ClickSimulation = (): void => {
    if (filePickerRef.current) {
      filePickerRef.current.click();
    }
  };

  return (
    <>
      <StyledAddPostBtn onClick={() => setModalOpen((prevState) => !prevState)}>
        <StyledPlusIcon />
      </StyledAddPostBtn>

      {modalOpen && (
        <>
          <Modal>
            <form>
              {selectedFile ? (
                <ImageToPost
                  src={selectedFile as string}
                  alt="zdjęcie do wpisu"
                  onClick={() => setSelectedFile(null)}
                />
              ) : (
                <PlaceholderImageToPost onClick={ClickSimulation}>
                  <StyledCameraIcon />
                </PlaceholderImageToPost>
              )}

              <FormField
                type="file"
                id="image"
                name="image"
                ref={filePickerRef}
                onChange={AddImageToPost}
                hidden
              />

              <FormField
                type="text"
                placeholder="Nazwa użytkownika"
                id="username"
                name="username"
                value={formValues.username}
                onChange={handleInputChange}
              />

              <FormField
                placeholder="Wprowadź treść wpisu"
                type="text"
                id="content"
                name="content"
                rows={4}
                isTextArea
                value={formValues.content}
                onChange={handleInputChange}
              />

              <TweetButton onClick={handleSubmitPost}>Tweet</TweetButton>
            </form>

            <CancelButton onClick={CancelAddPost}>Anuluj</CancelButton>
          </Modal>
          <ShadowDiv />
        </>
      )}
    </>
  );
};

export default AddPostButton;
