import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appContainer}>
      <div className={styles.calculatorWrapper}>
          <header className={styles.title}>
          <p>
            Check out this nifty calculator!
          </p>
          </header>
        <div className={styles.buttonWrapper}>
      </div>
      </div>
    </div>
  );
}

export default App;
