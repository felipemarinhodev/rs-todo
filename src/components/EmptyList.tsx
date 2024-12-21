import styles from "./EmptyList.module.css";

import Clipboard from "../assets/Clipboard.svg";

export function EmptyList() {
  return (
    <div className={styles.list}>
      <img src={Clipboard} alt="list image" />
      <p>Você ainda não tem tarefas cadastradas<br />
        <span>Crie tarefas e organize sues item a fazer</span>
      </p>
    </div>
  );
}
