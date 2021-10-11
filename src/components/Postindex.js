import { NavLink } from "react-router-dom";

export const Postindex = (props) => {
  return (
    <>
      <h2>Post Index</h2>
      <ul className="postNavi">
        {props.posts.map((post) => (
          <li key={post.id} className="post">
            <NavLink to={`/post/${post.id}`}>{post.title}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};
