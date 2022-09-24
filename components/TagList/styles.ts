import styled from 'styled-components';
import { Color } from 'utils/Color';

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  margin-bottom: 2rem;
`;

export const Tag = styled.li.attrs({ className: 'clickable' })<{
  active: boolean;
}>`
  font-weight: 400;
  font-size: 1rem;
  margin-right: 1rem;
  color: ${({ active }) => (active ? Color.Blue : 'white')};
`;
