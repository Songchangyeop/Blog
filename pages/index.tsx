import React from 'react';
import { allPosts } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';
import Image from 'utils/Image';

import { Container, Title, About, Intro, Profile } from './styles';
import RecentPosts from 'components/RecentPosts';

import ProfileImage from 'assets/Profile.jpg';

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <Title>Introduce.</Title>
      <About>
        <Profile>
          <Image src={ProfileImage} alt="profile" />
        </Profile>
        <Intro>
          소통과 공유를 바탕으로 기본을 중요시하는 프론트엔드 개발자가 되고자
          합니다.
          <br />
          새로운 기술을 익힐 때 프로젝트에 대한 기획을 하고 새로 익힌 기술을
          통해 프로젝트를 진행하는 것에 재미를 느낍니다.
          <br />
          그저 배움에서 그치지 않고 능동적으로 프로젝트에 적용하고, 개선점을
          찾기 위해 노력합니다.
          <br />
          <br />
          <b>Available Skills</b>
          <br />
          JavaScript, TypeScript, React, NextJS, Styled-Components
        </Intro>
      </About>
      <RecentPosts posts={posts} />
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

export default Home;
