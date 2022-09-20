import styled from 'styled-components';
import { Color } from 'utils/Color';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Profile = styled.div`
  position: relative;
  width: 40%;
  padding-top: 40%;
  border-radius: 2rem;
  overflow: hidden;
`;

export const Title = styled.div`
  align-self: flex-start;
  font-size: 2.5rem;
  font-weight: 700;
  color: ${Color.Orange};
  margin-bottom: 2rem;
`;

export const About = styled.div`
  display: flex;
  color: ${Color.White};
`;

export const Intro = styled.div`
  width: 50%;
  font-size: 1rem;
  margin-left: 1rem;
  line-height: 1.5rem;
  padding: 1rem 0;
  color: ${Color.LightGray};
`;

export const Bold = styled.b`
  font-size: 1.375rem;
  color: ${Color.White};
`;
