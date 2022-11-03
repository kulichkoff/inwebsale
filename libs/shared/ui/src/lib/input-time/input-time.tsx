import styles from './input-time.module.scss';

/* eslint-disable-next-line */
export interface InputTimeProps {}

export function InputTime(props: InputTimeProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to InputTime!</h1>
    </div>
  );
}

export default InputTime;
