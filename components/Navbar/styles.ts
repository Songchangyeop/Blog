import styled from 'styled-components';
import { Color } from 'utils/Color';

export const Nav = styled.a<{ active: boolean }>`
  margin-right: 1rem;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ active }) => (active ? Color.SkyBlue : Color.White)};

  &:hover {
    color: ${Color.SkyBlue};
  }
`;

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  margin-bottom: 2rem;
`;

export const NavList = styled.div``;
