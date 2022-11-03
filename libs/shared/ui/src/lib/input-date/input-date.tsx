import styles from './input-date.module.scss';

/* eslint-disable-next-line */
export interface InputDateProps {}

export function InputDate(props: InputDateProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to InputDate!</h1>
    </div>
  );
}

export default InputDate;
