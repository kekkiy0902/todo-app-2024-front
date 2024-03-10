import { twMerge } from 'tailwind-merge';

type Variant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'achromatic'
  | 'achromaticOutlined';
type Size = 'medium';

const baseStyles = 'flex justify-center items-center rounded-full px-3 py-1';

const variantStyles: Record<Variant, string> = {
  primary: 'text-white bg-primary-orange',
  secondary: 'text-primary-orange bg-white border-2 border-primary-orange',
  tertiary: 'text-primary-orange bg-primary-orange-light',
  achromatic: 'bg-gray-200',
  achromaticOutlined: 'border border-gray-200',
};

const sizeStyles: Record<Size, string> = {
  medium: 'h-8 px-3 py-1 text-sm',
};

type LabelProps = {
  name: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement> | any) => any;
};

export const Label = ({
  name,
  variant = 'achromaticOutlined',
  size = 'medium',
  className = '',
  onClick = undefined,
}: LabelProps): JSX.Element => {
  const customClassName = twMerge(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  return (
    <div className={customClassName} onClick={onClick}>
      {name}
    </div>
  );
};
