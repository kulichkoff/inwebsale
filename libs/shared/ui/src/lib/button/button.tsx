import styles from './button.module.scss';

import Image from 'next/image';

/* eslint-disable-next-line */
export interface ButtonProps {
  icon?: 'download';
  children: React.ReactNode;
  clickHandler: () => void;
}

export function Button(props: ButtonProps) {
  return (
    <button type="button" className={styles['btn']} onClick={props.clickHandler}>
      <span>{props.children}</span>
      {props.icon && <Image src={`/assets/img/icons/${props.icon}.svg`} alt={props.icon} width={32} height={32} />}
    </button>
  );
}

export default Button;
