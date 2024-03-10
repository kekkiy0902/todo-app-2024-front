import {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
  type PropsWithChildren,
} from 'react';
import { twMerge } from 'tailwind-merge';

type Variant = 'primary' | 'secondary' | 'tertiary';
type Size = 'small' | 'medium' | 'large';

const baseStyles =
  'inline-flex justify-center items-center rounded-full duration-200 hover:opacity-70';

const variantStyles: Record<Variant, string> = {
  primary: 'bg-primary-orange',
  secondary: 'bg-white border-2 border-primary-orange',
  tertiary: 'bg-primary-orange-light',
};

const iconVariantStyles: Record<Variant, string> = {
  primary: 'text-white',
  secondary: 'text-primary-orange',
  tertiary: 'text-primary-orange',
};

const sizeStyles: Record<Size, string> = {
  small: 'w-8 h-8 p-2',
  medium: 'w-12 h-12 p-3',
  large: 'w-16 h-16 p-4',
};

const iconSizeStyles: Record<Size, string> = {
  small: 'w-4 h-4',
  medium: 'w-6 h-6',
  large: 'w-8 h-8',
};

type CircleButtonProps = JSX.IntrinsicElements['button'] & {
  variant?: Variant;
  size?: Size;
  isShadow?: boolean;
};

export const CircleButton = ({
  type = 'button',
  variant = 'primary',
  size = 'medium',
  className = '',
  isShadow = false,
  children,
  ...props
}: PropsWithChildren<CircleButtonProps>): JSX.Element => {
  const customClassName = twMerge(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    isShadow && 'shadow-md',
    className
  );

  const StyledChildren = Children.map(children, (child) =>
    isValidElement(child)
      ? cloneElement(child as ReactElement<any>, {
          className: twMerge(
            iconVariantStyles[variant],
            iconSizeStyles[size],
            child.props.className
          ),
        })
      : child
  );

  return (
    <button type={type} className={customClassName} {...props}>
      <span className='shrink'>{StyledChildren}</span>
    </button>
  );
};
