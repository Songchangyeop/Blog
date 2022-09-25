import styled from 'styled-components';

import { BreakPoint } from 'utils/BreakPoint';
import { Color } from 'utils/Color';

export const Container = styled.section`
  margin-top: 2rem;
  color: ${Color.White};

  ${BreakPoint.Tablet} {
    padding: 1rem;
  }
`;

export const Header = styled.h1`
  font-size: 2.5rem;
  cursor: default;
`;
