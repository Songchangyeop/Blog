export interface PostType {
  post: {
    body: {
      code: string;
      raw: string;
    };
    date: string;
    description: string;
    tags: string[];
    thumbnail: string;
    title: string;
    type: string;
    _id: string;
  };
}
