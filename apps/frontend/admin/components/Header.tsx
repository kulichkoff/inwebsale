import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import styles from './Header.module.scss';
import { useRouter } from 'next/router';

export const Header = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src="/assets/img/logo.svg" alt="logo" width="164" height="56" />
        </div>

        <div className={styles.container}>
          <ul className={styles.links}>
            <li className={router.pathname === '/[store]/events' ? styles.active : ''}>
              <Link href={`/${router.query.store}/events`}>Мероприятия</Link>
            </li>
            <li className={router.pathname === '/[store]/products' ? styles.active : ''}>
              <Link href={`/${router.query.store}/products`}>Товары</Link>
            </li>
            <li className={router.pathname === '/[store]/customers' ? styles.active : ''}>
              <Link href={`/${router.query.store}/customers`}>Клиенты</Link>
            </li>
          </ul>
        </div>

        <div className={styles.profile}>
          {/* TODO */}
        </div>
      </div>
    </header>
  );
};
