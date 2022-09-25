export interface RecentPostsType {
  posts: postType[];
}

interface postType {
  date: string;
  title: string;
  des: string;
  slug: string;
  thumbnail: string;
  tags: string[];
  _id: string;
  _raw: {
    flattenedPath: string;
  };
}
