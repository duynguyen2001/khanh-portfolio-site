import React from 'react';

import { Author } from './Author';

export default {
  title: 'Example/Author',
  component: Author,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Author {...args} />;

export const ExampleAuthor = Template.bind({});
ExampleAuthor.args = {
};
