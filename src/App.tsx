import styles from "./App.module.css";
import "./global.css";

import logo from "./assets/Logo.svg";

function App() {

  return (
    <>
      <header className={styles.header}>
        <img
          src={logo}
          alt="logo todo"
        />
      </header>
      <p>
        Todo
      </p>
    </>
  )
}

export default App
