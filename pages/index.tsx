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
