import styled from 'styled-components';
import { Color } from 'utils/Color';

export const Nav = styled.a<{ active: boolean }>`
  margin-right: 1rem;
  cursor: pointer;
  color: ${({ active }) => (active ? Color.SkyBlue : Color.White)};

  &:hover {
    color: ${Color.SkyBlue};
  }
`;

export const Container = styled.nav`
  padding: 1rem;
  margin-bottom: 2rem;
`;
