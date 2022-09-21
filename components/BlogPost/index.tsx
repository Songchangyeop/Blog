import Link from 'next/link';
import React from 'react';
import Image from 'utils/Image';

import { Date, Description, Post, Thumbnail, Title } from './styles';
import { BlogPostTypes } from './types';

const BlogPost = ({ date, title, des, thumbnail, slug }: BlogPostTypes) => {
  return (
    <section>
      <Link href={`/blog/${slug}`} passHref>
        <Post>
          <Title>{title}</Title>
          <Description>{des}</Description>
          <Date>{date}</Date>
          {thumbnail && (
            <Thumbnail>
              <Image src={Thumbnail} alt="thumbnail" />
            </Thumbnail>
          )}
        </Post>
      </Link>
    </section>
  );
};

export default BlogPost;
