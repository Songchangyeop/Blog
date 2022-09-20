import React from 'react';
import styled from 'styled-components';
import NextImage from 'next/image';

interface ImageTypes {
  src: string;
  alt: string;
}

/**
 * Image 컴포넌트를 사용하는 측에서 부모 컴포넌트는 항상 position: relative를 사용한다.
 * width, padding-top으로 이미지의 비율을 조정한다.
 */
const Image = ({ src, alt }: ImageTypes) => {
  return (
    <ImageWrapper>
      <NextImage src={src} alt={alt} />
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
`;

export default Image;
