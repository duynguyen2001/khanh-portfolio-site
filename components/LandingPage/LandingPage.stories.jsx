import React from 'react';

import { LandingPage } from './LandingPage';

export default {
  title: 'Example/Pages',
  component: LandingPage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <LandingPage {...args} />;

export const ExampleLandingPage = Template.bind({});
ExampleLandingPage.args = {
};
