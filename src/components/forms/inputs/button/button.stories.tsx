import React from 'react';
import { ComponentStory, ComponentMeta, Story } from '@storybook/react';
import 'twin.macro';

import { Button } from './button';
import { CancelButton } from './cancel-button';
import { LinkButton } from './link-button';
import { NegativeActionButton } from './negative-action-button';
import { CopyButton } from './copy-button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Button</Button>;
const TemplateCancel: ComponentStory<typeof CancelButton> = (args) => <CancelButton {...args}>Cancel Button</CancelButton>;
const TemplateLink: ComponentStory<typeof LinkButton> = (args) => <LinkButton {...args}>Link Button</LinkButton>;
const TemplateNegative: ComponentStory<typeof NegativeActionButton> = (args) => <NegativeActionButton {...args}>Negative</NegativeActionButton>;
const TemplateCopy: Story = (args) => <CopyButton text="" {...args} />;

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = { primary: true, size: 'large' };
PrimaryLarge.storyName = 'Primary Large';

export const PrimarySmall = Template.bind({});
PrimarySmall.args = { primary: true, size: 'small' };
PrimarySmall.storyName = 'Primary Small';

export const SecondaryLarge = Template.bind({});
SecondaryLarge.args = { secondary: true, size: 'large' };
SecondaryLarge.storyName = 'Secondary Large';

export const SecondarySmall = Template.bind({});
SecondarySmall.args = { secondary: true, size: 'small' };
SecondarySmall.storyName = 'Secondary Small';

export const CancelLarge = TemplateCancel.bind({});
CancelLarge.args = { size: 'large' };
CancelLarge.storyName = 'Cancel Large';

export const CancelSmall = TemplateCancel.bind({});
CancelSmall.args = { size: 'small' };
CancelSmall.storyName = 'Cancel Small';

export const LinkLarge = TemplateLink.bind({});
LinkLarge.args = { size: 'large' };
LinkLarge.storyName = 'Link Large';

export const LinkSmall = TemplateLink.bind({});
LinkSmall.args = { size: 'small' };
LinkSmall.storyName = 'Link Small';

export const NegativeLarge = TemplateNegative.bind({});
NegativeLarge.args = { size: 'large' };
NegativeLarge.storyName = 'Negative Large';

export const NegativeSmall = TemplateNegative.bind({});
NegativeSmall.args = { size: 'small' };
NegativeSmall.storyName = 'Negative Small';

export const CopyButtonDefault = TemplateCopy.bind({});
CopyButtonDefault.args = { text: 'Copied Text' };
CopyButtonDefault.storyName = 'Copy Button';
