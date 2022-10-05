import { useRecoilValue } from 'recoil';

import { Container, LogoLink, DarkLogo, LightLogo } from './styles';
import { themeState } from 'atoms/themeState';

const Footer = () => {
  const themeMode = useRecoilValue(themeState);

  return (
    <Container>
      <LogoLink
        href="https://github.com/Songchangyeop"
        target="_blank"
        rel="noreferrer"
      >
        {themeMode === 'dark' ? <DarkLogo /> : <LightLogo />}
      </LogoLink>
      © 2022 SongChangYeop All rights reserved
    </Container>
  );
};

export default Footer;
