import React from 'react';
import { allPosts } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';

import BlogPost from 'components/BlogPost';

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      {posts.map((post) => (
        <BlogPost
          date={post.date}
          title={post.title}
          des={post.description}
          slug={post._raw.flattenedPath}
          key={post._id}
        />
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date)),
  );

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
