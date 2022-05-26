import React from 'react';
import backgroundWord from './backgroundWord.svg';
import { DropdownMenu } from '../menu/DropdownMenu';
import KhanhImage from './KhanhImage.svg';

export const Background = ({ children, ...props }) => (
  <div
  style={{ backgroundImage: `url(${backgroundWord})` }}
    className="flex flex-col h-full w-full bg-cover items-center bg-repeat min-h-screen	"
    {...props}
  >
    <div className="fixed	w-full h-full dark:backdrop-invert"></div>
    <div className="fixed	 -top-16 -left-16 h-72 w-72 md:-top-32 md:-left-32 md:h-96 md:w-96 bg-tertiary dark:invert rounded-full"></div>
    <div className="z-20 w-full dark:invert">
      <DropdownMenu />
    </div>

    <div className="flex fixed flex-row -bottom-24 -right-24 h-96 w-96 md:h-128 md:w-128 bg-secondary dark:invert rounded-full">
      <text
        className="font-nom text-6xl lg:text-7xl px-4 text-primary"
        style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}
      >
        阮慶唯
      </text>
      <img src={KhanhImage} alt="" className="px-8 py-8 dark:invert" ></img>
    </div>

    <div className="bg-white/[.85] dark:bg-black/[.85] w-full z-20 md:w-5/6 xl:w-3/4 ">
      {children}
    </div>
  </div>
);

Background.propTypes = {};

Background.defaultProps = {};
