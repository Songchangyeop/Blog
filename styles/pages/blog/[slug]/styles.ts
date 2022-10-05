import styled from 'styled-components';

import { BreakPoint } from 'utils/BreakPoint';
import { Color } from 'utils/Color';

export const Container = styled.section`
  margin-top: 2rem;
  color: var(--bg-sub);

  ${BreakPoint.Tablet} {
    padding: 1rem;
  }
`;

export const PostTitle = styled.h1`
  font-size: 2rem;
`;

export const Date = styled.div`
  font-size: 0.8rem;
  color: ${Color.LightGray};
  margin-bottom: 2rem;
`;
