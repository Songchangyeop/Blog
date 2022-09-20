import React from 'react';
import Link from 'next/link';

import { RecentPostsType } from './types';

const RecentPosts = ({ posts }: RecentPostsType) => {
  return (
    <section>
      <h1>최근 게시물</h1>
      <div>
        {posts.slice(0, 5).map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post._raw.flattenedPath}`}
            passHref
          >
            <a>
              <div>{post.title}</div>
              <div>{post.description}</div>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
