import styles from '../styles/Home.module.css'

const Titlebar = () => {
  return (
    <div className={styles.titlebar}>
      <h1 className={styles.title}>
        你好, my name is <a href="/flamingo.jpg">Aidan</a>
      </h1>
    </div>
  )
}

export default Titlebar