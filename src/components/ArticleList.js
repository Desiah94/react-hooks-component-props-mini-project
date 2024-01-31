import React from 'react';
import Article from './Article';

function ArticleList({ posts }) {
  // Using map directly on 'posts' received as a prop
  const renderPosts = posts.map(({ id, title, date, preview }) => (
    <Article key={id} />
  ));

  return (
    <main>
      {posts.map((post, index) => (
        <Article key={index} post={post} />
      ))}
    </main>
  );
}

export default ArticleList;
