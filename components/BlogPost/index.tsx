import Link from 'next/link';
import React from 'react';
import Image from 'utils/Image';

import {
  Date,
  Description,
  Post,
  TextWrap,
  Thumbnail,
  Title,
  Tags,
  Tag,
} from './styles';
import { BlogPostTypes } from './types';

const BlogPost = ({
  date,
  title,
  des,
  thumbnail,
  slug,
  tags,
}: BlogPostTypes) => {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <Post>
        {thumbnail && (
          <Thumbnail>
            <Image src={thumbnail} alt="thumbnail" />
          </Thumbnail>
        )}
        <TextWrap>
          {tags && (
            <Tags>
              {tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </Tags>
          )}
          <Title>{title}</Title>
          <Description>{des}</Description>
          <Date>{date}</Date>
        </TextWrap>
      </Post>
    </Link>
  );
};

export default BlogPost;
