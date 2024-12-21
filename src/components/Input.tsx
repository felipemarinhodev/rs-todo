import styles from "./Input.module.css";

export type InputProps = React.ComponentProps<'input'>;

export function Input({ ...props }: InputProps) {
  return (
    <div className={styles.input}>
      <input
        {...props}
      />
    </div>
  );
}
