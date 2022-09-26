import { useCallback, useEffect, useState } from 'react';
import { PostTypes } from 'Types/postTypes';

const useInfiniteScroll = (posts: PostTypes[]) => {
  const [currentList, setCurrentList] = useState<PostTypes[]>([]);

  useEffect(() => {
    const sliceList = posts.slice(0, 4);
    setCurrentList(sliceList);
  }, [posts]);

  const load = useCallback(() => {
    const sliceList = posts?.slice(currentList.length, currentList.length + 2);

    setCurrentList((currentList) => currentList.concat(sliceList));
  }, [currentList]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    currentList,
    load,
  };
};

export default useInfiniteScroll;
