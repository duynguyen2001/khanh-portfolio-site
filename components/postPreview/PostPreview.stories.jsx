import React from 'react';

import { PostPreview } from './PostPreview';

export default {
  title: 'Example/PostPreview',
  component: PostPreview,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <PostPreview {...args} />;

export const ExamplePostPreview = Template.bind({});
ExamplePostPreview.args = {
};
