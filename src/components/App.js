import React from "react";
import blogData from "../data/blog";
import Header from './Header';
import ArticleList from "./ArticleList";

console.log(blogData);

const posts = blogData.posts;

function App() {
  return (
    <div className="App">
      <Header name = "My Blog"/>
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;
