import React from 'react';
import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { NextSeo } from 'next-seo';

import { Container, PostTitle, Date } from './styles';
import { PostType } from './types';

const Post = ({ post }: PostType) => {
  const MDXComponent = useMDXComponent(post.body.code);

  return (
    <Container>
      <NextSeo title={post.title} description={post.description} />
      <PostTitle>{post.title}</PostTitle>
      <Date>{post.date}</Date>
      <MDXComponent />
    </Container>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p._raw.flattenedPath } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
    },
  };
};

export default Post;
