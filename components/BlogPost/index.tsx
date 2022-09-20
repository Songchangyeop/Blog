import Link from 'next/link';
import React from 'react';
import { BlogPostTypes } from './types';

const BlogPost = ({ date, title, des, slug }: BlogPostTypes) => {
  return (
    <section>
      <Link href={`/blog/${slug}`} passHref>
        <a>
          <div>{date}</div>
          <div>{title}</div>
          <div>{des}</div>
          <div>{slug}</div>
        </a>
      </Link>
    </section>
  );
};

export default BlogPost;
