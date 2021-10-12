import { NavLink, useParams, useRouteMatch, useLocation, useHistory } from "react-router-dom";

export const Posts = (props) => {
  const { id } = useParams();

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
