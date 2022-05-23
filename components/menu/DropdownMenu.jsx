import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Transition } from '@headlessui/react';
import { AiFillCloseCircle } from 'react-icons/ai';

export const DropdownMenu = ({ ...props }) => (
  <Menu
    as="div"
    className="mx-2 my-2 py-2 px-2 z-10 inline-block text-left font-ven text-primary text-xl"
    {...props}
  >
    <div className="px-2 border-primary" style={{ borderLeft: '2px solid' }}>
      <Menu.Button className="border-primary">Menu</Menu.Button>
      <Menu.Items className="">
        <div className="px-1 py-1 flex flex-col ">
          <Menu.Item>
            {
              <button className="fixed left-2 top-0 py-1 text-left">
                <AiFillCloseCircle />
              </button>
            }
          </Menu.Item>
          <Menu.Item>
            {<button className="py-1 text-left">About Me</button>}
          </Menu.Item>
          <Menu.Item>
            {<button className="py-1 text-left">My Projects</button>}
          </Menu.Item>
          <Menu.Item>
            {<button className="py-1 text-left">Personal Blogs</button>}
          </Menu.Item>
          <Menu.Item>
            {<button className="py-1 text-left">Contact me</button>}
          </Menu.Item>
        </div>
      </Menu.Items>
    </div>
  </Menu>
);

DropdownMenu.propTypes = {};

DropdownMenu.defaultProps = {};
