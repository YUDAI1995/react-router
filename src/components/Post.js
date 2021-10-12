import { Route } from "react-router-dom";
import { Postindex } from "./Postindex";
import { Posts } from "./Posts";
import "../styles/Posts.scss";

export const Post = (props) => {

  //const id = props.match.params.id;
  const posts = [
    { id: "1", title: "React", content: "React Tutorial" },
    { id: "2", title: "Vue", content: "Vue.js Tutorial" },
    { id: "3", title: "Laravel", content: "Laravel Tutorail" },
    { id: "4", title: "Angular", content: "Angular Tutorail" },
  ];
  return (
    <>
      <Route exact path="/post/">
        <Postindex posts={posts} />
      </Route>
      <Route exact path="/post/:id">
        <Posts posts={posts} />
      </Route>
    </>
  );
};
