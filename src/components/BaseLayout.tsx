import type { PropsWithChildren } from "react";

type BaseLayoutProps = PropsWithChildren<{
  name: string;
  role: string;
}>;

const BaseLayout = ({ name, role, children }: BaseLayoutProps) => {
  return (
    <div className="section py-16 md:py-20">
      <div className="container">
        <div className="row justify-center">
          <div className="col-12 lg:col-8">
            <header className="mb-12 border-border pb-8 text-center md:text-left">
              <h1 className="font-secondary mb-3 text-h2-sm md:text-h1">{name}</h1>
              <p className="text-text-light dark:text-darkmode-text-light text-base tracking-wide">
                {role}
              </p>
            </header>
            <div className="space-y-10">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseLayout;
