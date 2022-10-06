import styled from 'styled-components';

import Github_Dark from 'public/Icon_github_dark.svg';
import Github_Light from 'public/Icon_github_light.svg';

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  width: 100%;
  font-size: 1rem;
  font-weight: 500;
  color: var(--bg-text);
`;

export const LogoLink = styled.a.attrs({ className: 'clickable' })`
  margin-bottom: 1rem;
`;

export const DarkLogo = styled(Github_Dark)`
  width: 2.25rem;
`;

export const LightLogo = styled(Github_Light)`
  width: 2.25rem;
`;
