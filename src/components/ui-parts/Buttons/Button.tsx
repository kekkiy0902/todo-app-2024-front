'use client';

import React, {
  type PropsWithChildren,
  type MouseEvent,
  type ReactNode,
} from 'react';
import Link from 'next/link';
import { isNil } from 'ramda';
import { twMerge } from 'tailwind-merge';

type Type = 'button' | 'submit';
type Variant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'achromatic'
  | 'achromaticOutlined';
type Size = 'small' | 'medium' | 'large';

const baseStyles =
  'inline-flex justify-center items-center font-semibold rounded-lg duration-200 hover:opacity-70';

const variantStyles: Record<Variant, string> = {
  primary: 'text-white bg-primary-orange',
  secondary: 'text-primary-orange bg-white border-2 border-primary-orange',
  tertiary: 'text-primary-orange bg-primary-orange-light',
  achromatic: 'bg-gray-200',
  achromaticOutlined: 'border-2 border-gray-200',
};

const sizeStyles: Record<Size, string> = {
  small: 'h-8 px-2 py-1 text-xs',
  medium: 'h-10 px-3 py-2 text-sm',
  large: 'h-12 px-4 py-3',
};

const disabledStyles =
  'text-white bg-gray-300 border-none duration-0 pointer-events-none hover:opacity-100';

type ButtonProps = {
  type?: Type;
  variant?: Variant;
  size?: Size;
  href?: string;
  className?: string;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLElement> | any) => any;
  children: ReactNode;
};

export const Button = ({
  type = 'button',
  variant = 'primary',
  size = 'medium',
  href = undefined,
  className = '',
  disabled = false,
  onClick = undefined,
  children,
}: PropsWithChildren<ButtonProps>): JSX.Element => {
  const customClassName = twMerge(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className,
    disabled && disabledStyles
  );

  const handleClick = (event: MouseEvent<HTMLElement>): void => {
    if (onClick && !disabled) {
      onClick(event);
    }
  };

  return isNil(href) ? (
    <button type={type} className={customClassName} onClick={handleClick}>
      {children}
    </button>
  ) : (
    <Link
      href={!disabled ? href : ''}
      className={customClassName}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};
