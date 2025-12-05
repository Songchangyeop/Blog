import { allPosts } from 'contentlayer/generated';
import { NextSeo } from 'next-seo';
import Image from 'utils/Image';

import { Container, Title, About, Intro, Profile } from 'styles/pages/styles';
import RecentPosts from 'components/RecentPosts';
import { PostTypes } from 'Types/postTypes';

import ProfileImage from 'public/Profile.jpg';

interface PropTypes {
  posts: PostTypes[];
}

const Home = ({ posts }: PropTypes) => {
  return (
    <Container>
      <NextSeo
        title="Dev.Song | FrontEnd Engineer"
        description="Records of Junior FrontEnd Engineer Dev.Song"
      />
      <Title>Introduce.</Title>
      <About>
        <Profile>
          <Image src={ProfileImage.src} alt="profile" />
        </Profile>
        <Intro>
          사용자의 경험과 제품 가치를 최우선으로 두고,
          <br />
          명확한 소통과 책임감으로 성장하는 프론트엔드 개발자입니다.
          <br />
          사용자에게 편리하고 즐거운 경험을 제공하기 위해 끊임없이 생각하고,
          제품을 이용하는 과정에서 긍정적인 영향을 끼칠 수 있는 방향을 찾아
          적용하기 위해 노력합니다.
          <br />
          <br />
          song.dev
          <br />
          Front-end Engineer / Seoul, Korea
          <br />
          <br />
          {/* <ResumeLink
            href="https://holly-monarch-69a.notion.site/e2c53fb57c8c4730a5cd10779137d0c6"
            target="_blank"
          >
            Resume (Notion)
          </ResumeLink> */}
        </Intro>
      </About>
      <RecentPosts posts={posts} />
    </Container>
  );
};

export const getStaticProps = () => {
  const posts = allPosts
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .slice(0, 4);
  return {
    props: {
      posts,
    },
  };
};

export default Home;
