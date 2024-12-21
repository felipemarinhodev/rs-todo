import styles from "./Button.module.css";

export type ButtonProps = React.ComponentProps<'button'>;

export function Button({ children, ...props }: ButtonProps) {
  return <button className={styles.button} {...props} >{children}</button>;
}
