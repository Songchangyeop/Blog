import styled from 'styled-components';
import { Color } from 'utils/Color';

export const Post = styled.section.attrs({ className: 'clickable' })`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  color: ${Color.White};
  font-weight: 700;
`;

export const Description = styled.div`
  font-size: 1rem;
  color: ${Color.LightGray};
`;

export const Date = styled.div`
  font-size: 0.8rem;
  color: ${Color.Gray};
`;
