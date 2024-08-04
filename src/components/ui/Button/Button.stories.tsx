import { ComponentProps } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { EButtonVariants } from '@/utils/enums';
import Button from './Button';

type TTemplateProps = ComponentProps<typeof Button>;

const meta: Meta<typeof Button> = {
  args: {
    children: 'Odeslat',
  },
  component: Button,
  title: 'ui/Button',
};

export default meta;

const Template: StoryFn<TTemplateProps> = ({ children, ...props }: TTemplateProps) => (
  <Button {...props}>{children}</Button>
);

export const Default = Template.bind({});
Default.args = { children: 'Default Button', disabled: false };

export const Variants: StoryFn = () => (
  <div>
    <div className="flex flex-wrap gap-2 my-5">
      <Button variant={EButtonVariants.PRIMARY}>
        Primary
      </Button>
      <Button variant={EButtonVariants.PRIMARY} disabled>
        Primary Disabled
      </Button>
    </div>
    <div className="flex flex-wrap gap-2 my-5">
      <Button variant={EButtonVariants.SECONDARY}>
        Secondary
      </Button>
      <Button variant={EButtonVariants.SECONDARY} disabled>
        Secondary Disabled
      </Button>
    </div>
    <div className="flex flex-wrap gap-2 my-5">
      <Button variant={EButtonVariants.CTA}>
        CTA
      </Button>
      <Button variant={EButtonVariants.CTA} disabled>
        CTA Disabled
      </Button>
    </div>
  </div>
);
