import React from 'react';
import backgroundWord from './backgroundWord.svg';
import { DropdownMenu } from '../menu/DropdownMenu';
import Image from 'next/image';

export const Background = ({ children, ...props }) => (
  <div
    style={{ backgroundImage: `url(${backgroundWord})` }}
    className="flex flex-col h-full w-full bg-cover items-center bg-repeat min-h-screen	"
    {...props}
  >
    <div
      className="flex fixed flex-row -bottom-24 -right-24 border-2 border h-96 w-96 md:h-128 md:w-128 rounded-full"
      style={{
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        background: 'rgba( 230, 214, 90, 0.7 )',
        backdropFilter: 'blur( 1.5px )',
        WebkitBackdropFilter: 'blur( 1.5px )',
        border: '1px solid rgba( 255, 255, 255, 0.18 )',
      }}
    >
      <text
        className="font-nom text-6xl lg:text-7xl px-2 text-primary"
        style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}
      >
        阮慶唯
      </text>
      <div className="dark:invert w-full h-full">
        <Image
          src="/images/KhanhImage3.png"
          width="200px"
          height="200px"
          layout="responsive"
        ></Image>
      </div>
    </div>
    <div className="fixed	w-full h-full dark:backdrop-invert"></div>
    <div
      className="fixed bg-primary -top-16 -left-16 h-72 w-72 md:-top-32 md:-left-32 md:h-96 md:w-96 dark:invert rounded-full"
      style={{
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        backdropFilter: 'blur( 1.5px )',
        opacity: '0.8',
        WebkitBackdropFilter: 'blur( 1.5px )',
        border: '1px solid rgba( 255, 255, 255, 0.18 )',
      }}
    ></div>
    <div className="z-20 w-full dark:invert">
      <DropdownMenu />
    </div>

    <div
      className="w-full z-20 md:w-5/6 xl:w-3/4 px-4"
      style={{
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        background: 'rgba( 255, 255, 255, 0.85 )',
        backdropFilter: 'blur( 1.5px )',
        borderRadius: '30px',
        WebkitBackdropFilter: 'blur( 1.5px )',
        border: '1px solid rgba( 255, 255, 255, 0.18 )',
      }}
    >
      
      {children}
    </div>
  </div>
);

Background.propTypes = {};

Background.defaultProps = {};
