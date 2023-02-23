import Link from "next/link";

import styles from './button.module.css';

function Button({ link, children, handleClick }) {
  if (link) {
    return <Link className={styles.btn} href={link}>{children}</Link>;
  }
  
  return <button className={styles.btn} onClick={handleClick}>{children}</button>
}

export default Button;
