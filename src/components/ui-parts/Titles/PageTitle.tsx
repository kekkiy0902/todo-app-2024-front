interface PageTitleProps {
  title: string;
}

export const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <h1 className="text-3xl font-bold border-l-4 border-primary-blue pl-4">
      {title}
    </h1>
  );
};
