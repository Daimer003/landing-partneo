'use client'
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export const LottieAnimation = ({animation}: any) => {
  return (
    <DotLottieReact
      src={animation}
      loop
      autoplay
      onLoad={() =>console.log(true)}
    />
  );
};