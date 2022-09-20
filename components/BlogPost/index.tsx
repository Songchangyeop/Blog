import Link from 'next/link';
import React from 'react';

import { Date, Description, Post, Title } from './styles';
import { BlogPostTypes } from './types';

const BlogPost = ({ date, title, des, slug }: BlogPostTypes) => {
  return (
    <section>
      <Link href={`/blog/${slug}`} passHref>
        <Post>
          <Title>{title}</Title>
          <Description>{des}</Description>
          <Date>{date}</Date>
        </Post>
      </Link>
    </section>
  );
};

export default BlogPost;
