import React, { useEffect, useState } from 'react';

import { Tags, Tag } from './styles';
import { tags } from 'data/tags';
import { useRouter } from 'next/router';

const TagList = () => {
  const [currentTag, setCurrentTag] = useState();

  const router = useRouter();
  const { tag: tagQuery } = router.query;

  useEffect(() => {
    if (tagQuery === undefined) {
      setCurrentTag('All');
    }
  }, []);

  const onTagClick = (tag: string) => {
    setCurrentTag(tag);
    router.push(`/blog?tag=${tag}`);
  };

  return (
    <Tags>
      {tags.map((tag, index) => (
        <Tag
          key={index}
          active={tag === currentTag}
          onClick={() => onTagClick(tag)}
        >
          {tag}
        </Tag>
      ))}
    </Tags>
  );
};

export default TagList;
