export const Card = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) => (
  <div
    className={`rounded bg-overlay bg-opacity-20 overflow-hidden ${
      className ?? ''
    }`}
    {...props}
  />
);
