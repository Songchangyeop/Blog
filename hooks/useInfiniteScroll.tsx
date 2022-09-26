import { useCallback, useEffect, useState } from 'react';

interface PropTypes {
  date: string;
  title: string;
  des: string;
  thumbnail: string;
  tags: string[];
  slug: string;
}

const useInfiniteScroll = (posts: PropTypes[]) => {
  const [currentList, setCurrentList] = useState<PostType[]>([]);

  useEffect(() => {
    const sliceList = posts.slice(0, 4);
    setCurrentList(sliceList);
  }, [posts]);

  const load = useCallback(() => {
    const sliceList = posts?.slice(currentList.length, currentList.length + 2);

    setCurrentList((currentList) => currentList.concat(sliceList));
  }, [currentList]);

  return {
    currentList,
    load,
  };
};

export default useInfiniteScroll;
