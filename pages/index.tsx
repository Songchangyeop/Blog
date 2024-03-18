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
        <Intro></Intro>
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
