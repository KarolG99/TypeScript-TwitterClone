import React, { useContext } from "react";
import { PostsContext } from "../../Providers/PostsProvider";
import SinglePost from "../SinglePost/SinglePost";
import Page from "../../assets/images/MyPage.png";
import Memoji from "../../assets/images/Memoji1.png";
import { Article } from "./Posts.styles";

const Posts = (): JSX.Element => {
  const { posts, handleDeletePost } = useContext(PostsContext);

  return (
    <Article>
      {posts &&
        posts.map((post) => (
          <SinglePost
            username={post.username}
            key={post.content}
            text={post.content}
            image={post.image}
            userImage={`https://picsum.photos/50/50`}
            onClick={() => handleDeletePost(post.content)}
          />
        ))}

      <SinglePost
        username="karolgucwa"
        text="https://karolgucwa.pl/"
        image={Page}
        userImage={Memoji}
        time="10 min"
      />

      <SinglePost
        username="GitHub"
        text="https://github.com/KarolG99"
        userImage={"https://picsum.photos/id/22/50/50"}
        time="13 min"
      />

      <SinglePost
        userImage={"https://picsum.photos/id/33/50/50"}
        username="my_name"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        image={"https://picsum.photos/id/120/480/350"}
        time="54 min"
      />
    </Article>
  );
};

export default Posts;
