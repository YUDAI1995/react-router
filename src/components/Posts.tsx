import { VFC } from "react";
import {
  NavLink,
  useParams,
  useRouteMatch,
  useLocation,
  useHistory,
} from "react-router-dom";
import { PostModel } from "../models/Post.model";

interface PostsProp {
  posts: PostModel[];
}
export const Posts: VFC<PostsProp> = (props) => {
  const { id } = useParams<{id: string}>();

  const { path, url } = useRouteMatch();
  console.log(`path: ${path}, url: ${url}`);
  console.log(useRouteMatch());
  console.log(useLocation());
  console.log(useHistory());
  const post = props.posts.find((post) => post.id === id);

  return (
    <>
      <h2>{post ? post.content : false}</h2>
      <p>
        <NavLink to="/post/">Retun to Index.</NavLink>
      </p>
    </>
  );
};
