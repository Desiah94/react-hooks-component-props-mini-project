import React from "react";
import blogData from "../data/blog";
import Header from './Header';
import ArticleList from "./ArticleList";
import About from "./About"

console.log(blogData);

const {name, image, posts} = blogData

function App() {
  return (
    <div className="App">
      <Header name ={name}/>
      <About image={image} />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;
