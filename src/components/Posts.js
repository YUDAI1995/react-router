import { NavLink } from "react-router-dom";
import { useParams } from "react-router";

export const Posts = (props) => {
  const { id } = useParams();
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
