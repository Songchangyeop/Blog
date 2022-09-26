import { useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { allPosts } from 'contentlayer/generated';
import { useInView } from 'react-intersection-observer';
import { NextSeo } from 'next-seo';

import { Container, Header } from './styles';
import TagList from 'components/TagList';
import BlogPost from 'components/BlogPost';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import { PostTypes } from 'Types/postTypes';

interface PropType {
  posts: PostTypes[];
}

function Blog({ posts }: PropType) {
  console.log(posts);

  const router = useRouter();
  const { tag } = router.query;

  const [ref, inView] = useInView();

  const filteredList = useMemo(() => {
    if (tag === 'All' || tag === undefined) {
      return posts;
    }

    return posts.filter((post) => post.tags.some((tag_) => tag_ === tag));
  }, [tag]); // eslint-disable-line react-hooks/exhaustive-deps

  const { currentList, load } = useInfiniteScroll(filteredList);

  useEffect(() => {
    if (inView) {
      load();
    }
  }, [inView]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container>
      <Header>Blog.</Header>
      <NextSeo title="Dev.Song | Blog" />
      <TagList />
      {currentList.length &&
        currentList.map((post) => (
          <BlogPost
            date={post.date}
            title={post.title}
            des={post.description}
            thumbnail={post.thumbnail}
            tags={post.tags}
            slug={post._raw.flattenedPath}
            key={post._id}
          />
        ))}
      <div ref={ref} />
    </Container>
  );
}

export const getStaticProps = () => {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date)),
  );

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
