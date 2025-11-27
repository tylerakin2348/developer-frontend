type PageTitleProps = {
  name: string;
};

function PageTitle({ name }: PageTitleProps) {
  return (
    <h1 className="text-3xl font-semibold uppercase tracking-[0.25em] text-current">
      {name}
    </h1>
  );
}

export default PageTitle;

