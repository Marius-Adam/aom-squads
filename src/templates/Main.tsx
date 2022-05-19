import type { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = ({ meta, children }: IMainProps) => (
  <div className="h-screen w-full antialiased">
    {meta}
    <div className="content">{children}</div>
  </div>
);

export { Main };
