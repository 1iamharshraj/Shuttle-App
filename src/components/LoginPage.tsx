import React, { useEffect } from 'react';
import styles from './LoginPage.module.css';
import logo from '/src/assets/logo.png';

function ListGroup() {
  useEffect(() => {
    document.body.classList.add(styles.body);

    // Clean up the class when the component is unmounted
    return () => {
      document.body.classList.remove(styles.body);
    };
  }, []);

  return (
    <div className={styles['form-container']}>
      <div className={styles['form-wrapper']}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <div className="mb-3">
          <input type="text" className={`form-control ${styles.input}`} id="idInput" placeholder="Enter your Registration Number" />
        </div>
        <div className="mb-3">
          <input type="password" className={`form-control ${styles.input}`} id="passwordInput" placeholder="Enter your password" />
        </div>
        <button type="submit" className={styles.button}>LOGIN</button>
      </div>
    </div>
  );
}

export default ListGroup;
