import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

export default function BaseLayout({ children }) {
  return (
    <>
      <Header />
      <div className="wrapper" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <main style={{ flex: '1 0 auto' }}>{children}</main>
        <div style={{ flex: '0 0 auto' }}>
          <Footer />
        </div>
      </div>
    </>
  );
}
