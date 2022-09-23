import React from 'react';
import { allPosts } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';

import { Container, Header } from './styles';
import BlogPost from 'components/BlogPost';

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(posts);

  return (
    <Container>
      <Header>Blog.</Header>
      {posts.map((post) => (
        <BlogPost
          date={post.date}
          title={post.title}
          des={post.description}
          thumbnail={post.thumbnail}
          slug={post._raw.flattenedPath}
          key={post._id}
        />
      ))}
    </Container>
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
