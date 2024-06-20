import React, { useEffect } from 'react';
import styles from './LandingPage.module.css';
import logo from '/src/assets/logo.png'; // Make sure to replace with the actual path to your logo image

function LandingPage() {
  useEffect(() => {
    document.body.classList.add(styles.body);

    // Clean up the class when the component is unmounted
    return () => {
      document.body.classList.remove(styles.body);
    };
  }, []);

  return (
    <div>
      <img src={logo} alt="Logo" className={styles.logo} />
    </div>
  );
}

export default LandingPage;
