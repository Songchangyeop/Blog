import styled from 'styled-components';
import { Color } from 'utils/Color';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
  width: 100%;
`;

export const Header = styled.h1`
  font-size: 2rem;
  color: ${Color.White};
`;

export const Posts = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
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
  color: ${Color.White};
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
`;
