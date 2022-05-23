import React from 'react';

import { DropdownMenu } from './DropdownMenu';

export default {
  title: 'Example/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <DropdownMenu {...args} />;

export const ExampleDropdownMenu = Template.bind({});
ExampleDropdownMenu.args = {
};
