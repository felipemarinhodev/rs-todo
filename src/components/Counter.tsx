import styles from "./Counter.module.css";

export type CounterProps = {
  children: string;
  color?: 'blue' | 'purple';
  quantity?: number;
  total?: number;
}

export function Counter({ children,
  color = 'blue',
  quantity,
  total = 0 }: CounterProps) {
  return (
    color === "blue" ?
      (
        <div className={styles.createdTasks}>
          {children}
          <span>{total}</span>
        </div>
      )
      :
      (
        <div className={styles.finishedTasks}>
          {children}
          <span>{quantity !== undefined && `${quantity} de `}{total}</span>
        </div>
      )
  );
}
