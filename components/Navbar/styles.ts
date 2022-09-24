import styled from 'styled-components';
import { Color } from 'utils/Color';

export const Nav = styled.a<{ active: boolean }>`
  margin-right: 1rem;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 300;
  color: ${({ active }) => (active ? Color.Blue : Color.White)};

  &:hover {
    color: ${Color.Blue};
  }
`;

export const Container = styled.nav`
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: ${Color.Black};
  display: flex;
  justify-content: flex-start;
  padding: 1rem;
  margin-bottom: 2rem;
`;
