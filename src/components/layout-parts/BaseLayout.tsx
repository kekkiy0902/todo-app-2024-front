import { Header, Footer } from './common';
import { type ReactNode } from 'react';

type BaseLayoutProps = {
  children: ReactNode;
};

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center min-h-[600px] w-full max-w-7xl px-2 py-6 lg:p-10">
        <main className="w-full max-w-main-content-for-pc">{children}</main>
      </div>

      <Footer />
    </>
  );
};
