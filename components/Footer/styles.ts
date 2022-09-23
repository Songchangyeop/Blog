import styled from 'styled-components';

import { Color } from 'utils/Color';
import Github from 'public/Icon_github.svg';

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  width: 100%;
  font-size: 1rem;
  font-weight: 500;
  color: ${Color.White};
`;

export const LogoLink = styled.a.attrs({ className: 'clickable' })`
  margin-bottom: 1rem;
`;

export const Logo = styled(Github)`
  width: 1.875rem;
`;
