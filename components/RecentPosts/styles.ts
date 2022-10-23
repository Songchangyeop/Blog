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

export const Post = styled.a.attrs({ className: 'clickable' })`
  display: flex;
  flex-direction: column;
  width: calc(50% - 0.625rem);
  margin-bottom: 2rem;
  border: 1px solid ${Color.Gray};
  border-radius: 1rem;
  overflow: hidden;

  &:nth-child(odd) {
    margin-right: 0.625rem;
  }

  ${BreakPoint.MobileL} {
    width: 100%;
    margin-right: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.6rem 1rem;
`;

export const Thumbnail = styled.div`
  position: relative;
  width: 100%;
  padding-top: 70%;
`;

export const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--bg-text)
  margin-bottom: 0.625rem;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Description = styled.div`
  font-size: 0.8rem;
  color: ${Color.LightGray};
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
