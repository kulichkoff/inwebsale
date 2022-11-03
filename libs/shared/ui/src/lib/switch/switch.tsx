import styles from './switch.module.scss';

/* eslint-disable-next-line */
export interface SwitchProps {}

export function Switch(props: SwitchProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Switch!</h1>
    </div>
  );
}

export default Switch;
