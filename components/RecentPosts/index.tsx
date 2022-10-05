import Link from 'next/link';
import Image from 'utils/Image';

import { RecentPostsType } from './types';
import {
  Container,
  Header,
  Posts,
  Post,
  Thumbnail,
  Wrapper,
  Title,
  Description,
  Tags,
  Tag,
} from './styles';

const RecentPosts = ({ posts }: RecentPostsType) => {
  return (
    <Container>
      <Header>Recent Posts.</Header>
      <Posts>
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post._raw.flattenedPath}`}
            passHref
          >
            <Post>
              <Thumbnail>
                <Image src={post.thumbnail} alt="Thumbnail" />
              </Thumbnail>
              <Wrapper>
                <Tags>
                  {post.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </Tags>
                <Title>{post.title}</Title>
                <Description>{post.description}</Description>
              </Wrapper>
            </Post>
          </Link>
        ))}
      </Posts>
    </Container>
  );
};

export default RecentPosts;
