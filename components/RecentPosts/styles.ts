import styled from 'styled-components';
import { BreakPoint } from 'utils/BreakPoint';
import { Color } from 'utils/Color';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 4.375rem;
  width: 100%;
`;

export const Header = styled.h1`
  font-size: 2rem;
  cursor: default;
  color: var(--bg-text);
`;

export const Posts = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  ${BreakPoint.MobileL} {
    flex-direction: column;
  }
`;

export const Post = styled.section.attrs({ className: 'clickable' })`
  display: flex;
  margin-bottom: 2rem;
  max-height: 10rem;
`;

export const Wrapper = styled.div`
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

export const Tags = styled.ul`
  display: flex;
`;

export const Tag = styled.li`
  color: ${Color.Blue};
  font-size: 1rem;
  margin-bottom: 0.3125rem;
  margin-right: 1rem;
`;
