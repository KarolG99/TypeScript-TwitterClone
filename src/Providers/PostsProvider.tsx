import React, { useState } from "react";

interface postsInterface {
  username: string;
  content: string;
  image: string | File;
}

interface valuesInterface {
  username: string;
  content: string;
}

interface PostsContextInterface {
  posts: postsInterface[];
  handleAddPost: (values: valuesInterface, selectedFile: string | File) => void;
  handleDeletePost: (content: string) => void;
}

export const PostsContext = React.createContext<PostsContextInterface>({
  posts: [],
  handleAddPost: () => {},
  handleDeletePost: () => {},
});

interface PostsProviderProps {
  children: JSX.Element;
}

const PostsProvider = ({ children }: PostsProviderProps): JSX.Element => {
  const [posts, setPosts] = useState<postsInterface[]>([]);

  const handleAddPost = (
    values: valuesInterface,
    selectedFile: string | File
  ): void => {
    const newPost = {
      username: values.username,
      content: values.content,
      image: selectedFile,
    };
    setPosts([newPost, ...posts]);
  };

  const handleDeletePost = (content: string): void => {
    const filteredPosts = posts.filter((post: any) => post.content !== content);
    setPosts(filteredPosts);
  };

  return (
    <PostsContext.Provider
      value={{
        posts,
        handleAddPost,
        handleDeletePost,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;
