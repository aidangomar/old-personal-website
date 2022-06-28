import styles from '../styles/Home.module.css'

const Text = () => {
  return (
    <div>
      <p className={styles.description}>
        I'm a software engineer interested in functional programming, backend development, and blockchain architecture.
        You can find my projects on my <a href="https://github.com/susuwatarii">Github</a>
      </p>
      <p style={{padding: "1rem"}} />

      
      <p className={styles.description}>
        Outside of programming I like to play viola in my string quartet, study poker theory, learn chinese, and listen to classical music & kpop
      </p>
    </div>
  )
}

export default Text