import styled from 'styled-components';
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
  padding: 1rem 0;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  color: ${Color.White};
  font-weight: 700;
  margin-bottom: 0.625rem;
`;

export const Description = styled.div`
  font-size: 1rem;
  color: ${Color.LightGray};
  margin-bottom: 2rem;
`;

export const Date = styled.div`
  font-size: 0.8rem;
  color: ${Color.Gray};
`;

export const Thumbnail = styled.div`
  position: relative;
  min-width: 10rem;
  height: 10rem;
  margin-right: 1.5rem;
  border-radius: 6px;
  overflow: hidden;
`;
