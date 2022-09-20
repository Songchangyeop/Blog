import styled from 'styled-components';
import { Color } from 'utils/Color';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.h1`
  font-size: 2rem;
  color: ${Color.White};
`;

export const Posts = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Post = styled.a.attrs({ className: 'clickable' })`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${Color.White};
  margin-bottom: 0.625rem;
`;

export const Description = styled.div`
  font-size: 1rem;
  color: ${Color.White};
`;
