import React from 'react';

import { Background } from './Background';

export default {
  title: 'Example/Background',
  component: Background,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Background {...args} />;

export const ExampleBackground = Template.bind({});
ExampleBackground.args = {
};
