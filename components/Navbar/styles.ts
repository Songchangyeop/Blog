import styled from 'styled-components';
import { Color } from 'utils/Color';

import Icon_Moon from 'public/Icon_Moon.svg';
import Icon_Sun from 'public/Icon_Sun.svg';

export const Nav = styled.a<{ active: boolean }>`
  margin-right: 1rem;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 300;
  color: ${({ active }) => (active ? Color.Blue : 'var(--bg-sub)')};

  &:hover {
    color: ${Color.Blue};
  }
`;

export const Container = styled.nav`
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: var(--bg-main);
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  margin-bottom: 2rem;
`;

export const ThemeMode = styled.div.attrs({ className: 'clickable' })`
  margin-left: 1rem;
`;

export const Moon = styled(Icon_Moon)`
  width: 1.875rem;

  animation: scale 500ms;

  @keyframes scale {
    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
    }
  }
`;

export const Sun = styled(Icon_Sun)`
  width: 1.875rem;

  animation: scale 500ms;

  @keyframes scale {
    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
    }
  }
`;
