import styled from 'styled-components';

import { BreakPoint } from 'utils/BreakPoint';
import { Color } from 'utils/Color';

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  margin-bottom: 2rem;

  ${BreakPoint.MobileL} {
    margin-bottom: 1rem;
  }
`;

export const Tag = styled.li.attrs({ className: 'clickable' })<{
  active: boolean;
}>`
  font-weight: 700;
  font-size: 1rem;
  margin-right: 1rem;
  color: ${({ active }) => (active ? Color.Blue : 'white')};

  ${BreakPoint.MobileL} {
    margin-bottom: 1rem;
    margin-right: 1.5rem;
  }
`;
