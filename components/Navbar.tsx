import styles from '../styles/Home.module.css'

const Navbar = () => {
  return (
    <ul className={styles.navbar}>

      <li className={styles.navElem}>
        <a href="https://github.com/susuwatarii">
          <img src="/github-rounded.png" width="40" height="40" alt="" />
        </a>
      </li>

      <li className={styles.navElem}>
        <a href="https://www.linkedin.com/in/aidan-gomar-9394211a7/">
          <img src="/linkedin-logo-grey.png" width="40" height="40" alt="" />
        </a>
      </li>

      <li className={styles.navElem2}>
        <a className={styles.navbarText} href="/Resume-06-27-2022.pdf"> Resume </a>
      </li>

      <li className={styles.navElem2}>
        <a className={styles.navbarText} href="mailto: aidangomar@gmail.com"> Email </a>
      </li>

    </ul>
  )
}

export default Navbar