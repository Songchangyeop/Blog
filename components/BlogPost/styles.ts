import styled from 'styled-components';

import { BreakPoint } from 'utils/BreakPoint';
import { Color } from 'utils/Color';

export const Post = styled.section.attrs({ className: 'clickable' })`
  display: flex;
  margin-bottom: 2rem;
  max-height: 10rem;
`;

export const TextWrap = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 0.75rem 0;

  ${BreakPoint.MobileL} {
    padding: 0;
    height: 160px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Tags = styled.ul`
  display: flex;
`;

export const Tag = styled.li`
  font-weight: 700;
  font-size: 0.75rem;
  margin-right: 1rem;
  color: ${Color.Blue};
`;

export const Title = styled.div`
  font-size: 1.5rem;
  color: var(--bg-text);
  font-weight: 700;
  margin-bottom: 0.625rem;

  ${BreakPoint.Tablet} {
    font-size: 1.25rem;
  }

  ${BreakPoint.MobileL} {
    font-size: 1rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Description = styled.div`
  font-size: 1rem;
  color: ${Color.LightGray};
  margin-bottom: 0.5rem;

  ${BreakPoint.Tablet} {
    font-size: 0.9rem;
  }

  ${BreakPoint.MobileL} {
    font-size: 0.7rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Date = styled.div`
  font-size: 0.8rem;
  color: ${Color.Gray};

  ${BreakPoint.MobileL} {
    font-size: 0.5rem;
  }
`;

export const Thumbnail = styled.div`
  position: relative;
  min-width: 10rem;
  height: 10rem;
  margin-right: 1.5rem;
  border-radius: 6px;
  overflow: hidden;

  ${BreakPoint.MobileL} {
    margin-right: 0.75rem;
  }
`;
