import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { NextSeo } from 'next-seo';

import { Container, PostTitle, Date } from 'styles/pages/blog/[slug]/styles';
import { PostType } from 'Types/[slug]/types';

const Post = ({ post }: PostType) => {
  const MDXComponent = useMDXComponent(post.body.code);

  return (
    <Container>
      <NextSeo title={post.title} description={post.description} />
      <PostTitle>{post.title}</PostTitle>
      <Date>{post.date}</Date>
      <MDXComponent />
    </Container>
  );
};

export const getStaticPaths = () => {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p._raw.flattenedPath } })),
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
    },
  };
};

export default Post;
