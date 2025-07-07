import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
    <footer className="mt-16 py-8 text-center text-gray-500 dark:text-gray-400">
      <hr className="mb-4" />
      <span>&copy; {new Date().getFullYear()} SaaS Media Platform. All rights reserved.</span>
    </footer>
  </div>
);

export default Layout;
