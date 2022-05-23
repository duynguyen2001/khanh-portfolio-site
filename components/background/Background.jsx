import React, { Children } from 'react';
import PropTypes from 'prop-types';
import backgroundWord from './backgroundWord.svg';
import { DropdownMenu } from '../menu/DropdownMenu';
import KhanhImage from './KhanhImage.svg';
import Image from 'next/image';

export const Background = ({ children, ...props }) => (
  <div
    className="flex flex-col h-screen w-full bg-cover dark:invert items-center"
    style={{ backgroundImage: `url(${backgroundWord})` }}
    {...props}
  >
    <div className="sticky -top-16 -left-16 h-72 w-72 md:-top-32 md:-left-32 md:h-96 md:w-96 bg-tertiary rounded-full"></div>
    <div className="z-20 w-full">
      <DropdownMenu />
    </div>

    <div className="flex sticky flex-row -bottom-24 -right-24 h-96 w-96 md:h-128 md:w-128 bg-secondary rounded-full">
      <text
        className="font-nom text-6xl lg:text-7xl px-4 text-primary"
        style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}
      >
        阮慶唯
      </text>
      <Image src={KhanhImage} className="px-8 py-8 dark:invert"></Image>
    </div>

    <div className="bg-white/[.85] w-full z-20 md:w-5/6 xl:w-3/4 		">
      {children}
    </div>
  </div>
);

Background.propTypes = {};

Background.defaultProps = {};
