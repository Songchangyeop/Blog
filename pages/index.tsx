import React from 'react';
import { allPosts } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';
import RecentPosts from 'components/RecentPosts';

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(posts);

  return (
    <div>
      <RecentPosts posts={posts} />
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

export default Home;
