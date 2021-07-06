import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Button from '../src/components/button';

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  msg: "this is button",
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
