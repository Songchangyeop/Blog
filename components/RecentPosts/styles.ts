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
  color: ${Color.SkyBlue};
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
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid ${Color.Gray};
  border-radius: 1rem;

  &:nth-child(odd) {
    margin-right: 0.625rem;
  }
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${Color.White};
  margin-bottom: 0.625rem;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Description = styled.div`
  font-size: 1rem;
  color: ${Color.LightGray};
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
