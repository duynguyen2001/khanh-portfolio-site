import React from 'react';
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Menu, Transition } from '@headlessui/react';
import { AiFillCloseCircle } from 'react-icons/ai';
import Link from 'next/dist/client/link';
const MenuItem = ({ children, link }) => (
  <Menu.Item>
    {
      <Link href={link}>
        <button className="py-1 text-left hover:opacity-50">{children}</button>
      </Link>
    }
  </Menu.Item>
);
export const DropdownMenu = ({ ...props }) => (
  <Menu
    as="div"
    className="mx-2 my-2 py-2 px-2 z-10 inline-block text-left font-ven text-primarycontrast text-xl"
    {...props}
  >
    <div className="px-2 border-primarycontrast " style={{ borderLeft: '2px solid' }}>
      <Menu.Button className="border-primarycontrast hover:opacity-50">
        Menu
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="">
          <div className="px-1 py-1 flex flex-col ">
            <MenuItem link="/page/about-me">About Me</MenuItem>
            <MenuItem link="/blog-posts/category/personal-projects">
              My Projects
            </MenuItem>
            <MenuItem link="/blog-posts">Personal Blogs</MenuItem>
            <MenuItem link="/page/contact-me">Contact me</MenuItem>
          </div>
        </Menu.Items>
      </Transition>
    </div>
  </Menu>
);

DropdownMenu.propTypes = {};

DropdownMenu.defaultProps = {};
