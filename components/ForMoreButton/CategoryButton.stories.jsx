import React from 'react';

import { CategoryButton } from './CategoryButton';

export default {
  title: 'Example/CategoryButton',
  component: CategoryButton,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <CategoryButton {...args} />;

export const ExampleCategoryButton = Template.bind({});
ExampleCategoryButton.args = {
};
