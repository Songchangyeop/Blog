import styled from 'styled-components';

export const Nav = styled.a<{ active: boolean }>`
  margin-right: 1rem;
  cursor: pointer;
  color: ${({ active }) => (active ? 'red' : 'black')};
`;

export const Container = styled.nav`
  padding: 1rem;
`;
