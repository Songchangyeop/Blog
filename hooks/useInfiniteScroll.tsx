import { useCallback, useEffect, useState } from 'react';

interface PropTypes {
  list: {
    date: string;
    title: string;
    des: string;
    thumbnail: string;
    tags: string[];
    slug: string;
  };
}

const useInfiniteScroll = (list: PropTypes[]) => {
  const [currentList, setCurrentList] = useState([]);

  useEffect(() => {
    const sliceList = list.slice(0, 4);
    setCurrentList(sliceList);
  }, [list]);

  const load = useCallback(() => {
    const sliceList = list?.slice(currentList.length, currentList.length + 2);

    setCurrentList((currentList) => currentList.concat(sliceList));
  }, [currentList]);

  return {
    currentList,
    load,
  };
};

export default useInfiniteScroll;
