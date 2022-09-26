import styled from 'styled-components';

import { BreakPoint } from 'utils/BreakPoint';
import { Color } from 'utils/Color';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${BreakPoint.Tablet} {
    padding: 1rem;
  }
`;

export const Title = styled.div`
  align-self: flex-start;
  font-size: 2.5rem;
  font-weight: 700;
  color: ${Color.White};
  margin-bottom: 2rem;
  cursor: default;
`;

export const About = styled.div`
  display: flex;
  color: ${Color.White};

  ${BreakPoint.Tablet} {
    align-items: center;
    flex-direction: column;
  }
`;

export const Profile = styled.div`
  position: relative;
  width: 20rem;
  height: 20rem;
  border-radius: 2rem;
  overflow: hidden;

  ${BreakPoint.MobileL} {
    width: 80%;
    height: auto;
    padding-top: 80%;
  }
`;

export const Intro = styled.div`
  width: 50%;
  font-size: 1rem;
  margin-left: 1rem;
  line-height: 1.5rem;
  padding: 1rem 0;
  cursor: default;
  color: ${Color.LightGray};

  ${BreakPoint.Tablet} {
    margin-top: 1rem;
    width: 90%;
  }
`;

export const ResumeLink = styled.a.attrs({ className: 'clickable' })`
  font-size: 1.25rem;
  font-weight: 300;
  text-decoration: underline;
  color: ${Color.Blue};
`;
