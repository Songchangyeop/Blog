import styled from 'styled-components';

import { BreakPoint } from 'utils/BreakPoint';

export const Container = styled.section`
  margin-top: 2rem;
  color: var(--bg-text);

  ${BreakPoint.Tablet} {
    padding: 1rem;
  }
`;

export const Header = styled.h1`
  font-size: 2.5rem;
  cursor: default;
`;
