import { type PropsWithChildren } from 'react';
import Link from 'next/link';
import { Card } from './Card';

type CardWithLinkWrapperProps = {
  href: string;
  className?: string;
  isShadow?: boolean;
};

export const CardWithLinkWrapper = ({
  href,
  className = '',
  isShadow = true,
  children,
}: PropsWithChildren<CardWithLinkWrapperProps>): JSX.Element => {
  return (
    <Link href={href}>
      <Card className={className} isShadow={isShadow} isHoverEffect>
        {children}
      </Card>
    </Link>
  );
};
