import React from 'react';

export default function BaseLayout({ children }) {
  return (
    <>
      <header>it is a layout</header>
      <main>{children}</main>
    </>
  );
}
