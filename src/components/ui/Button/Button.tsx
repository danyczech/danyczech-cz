import { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react';
import { clsx } from 'clsx';
import childrenTextContent from '@/utils/childrenTextContent';
import { EButtonVariants } from '@/utils/enums';
import style from './Button.module.css';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  variant?: EButtonVariants,
}

const Button = ({
  children,
  className,
  disabled = false,
  title,
  type = 'button',
  variant = EButtonVariants.PRIMARY,
  ...props
}: IProps): ReactElement => {
  const customTitle = title || childrenTextContent(children) || undefined;

  return (
    <button
      {...props}
      className={clsx(style.button, style[variant], className)}
      disabled={disabled}
      title={customTitle}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
