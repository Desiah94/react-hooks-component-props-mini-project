import React from 'react';
import Article from './ArticleList';

const ArticleList = (props) => {
  const { posts } = props;

  return (
    <main>
      {posts.map((post, index) => (
        <Article key={index} post={post} />
      ))}
    </main>
  );
}

export default ArticleList;