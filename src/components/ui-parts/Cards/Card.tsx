import { type PropsWithChildren, type MouseEvent } from 'react';
import { twMerge } from 'tailwind-merge';

type CardProps = {
  className?: string;
  isShadow?: boolean;
  isHoverEffect?: boolean;
  onClick?: (event: MouseEvent<HTMLElement> | any) => any;
};

export const Card = ({
  className = '',
  isShadow = true,
  isHoverEffect = false,
  onClick = undefined,
  children,
}: PropsWithChildren<CardProps>): JSX.Element => {
  if (onClick) {
    isHoverEffect = true;
  }

  const customClassName = twMerge(
    'bg-white rounded-2xl p-4 lg:p-6',
    isShadow && 'shadow-md',
    isHoverEffect && 'cursor-pointer duration-200 hover:opacity-70',
    className
  );

  const handleClick = (event: MouseEvent<HTMLElement>): void => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <div className={customClassName} onClick={handleClick}>
      {children}
    </div>
  );
};
