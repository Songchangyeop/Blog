import Link from 'next/link';
import React from 'react';
import Image from 'utils/Image';

import { Date, Description, Post, TextWrap, Thumbnail, Title } from './styles';
import { BlogPostTypes } from './types';

const BlogPost = ({ date, title, des, thumbnail, slug }: BlogPostTypes) => {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <Post>
        {thumbnail && (
          <Thumbnail>
            <Image src={thumbnail} alt="thumbnail" />
          </Thumbnail>
        )}
        <TextWrap>
          <Title>{title}</Title>
          <Description>{des}</Description>
          <Date>{date}</Date>
        </TextWrap>
      </Post>
    </Link>
  );
};

export default BlogPost;
