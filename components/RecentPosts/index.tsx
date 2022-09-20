import React from 'react';
import Link from 'next/link';

import { RecentPostsType } from './types';
import { Container, Header, Posts, Post, Title, Description } from './styles';

const RecentPosts = ({ posts }: RecentPostsType) => {
  return (
    <Container>
      <Header>최근 게시물</Header>
      <Posts>
        {posts.slice(0, 5).map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post._raw.flattenedPath}`}
            passHref
          >
            <Post>
              <Title>{post.title}</Title>
              <Description>{post.description}</Description>
            </Post>
          </Link>
        ))}
      </Posts>
    </Container>
  );
};

export default RecentPosts;
