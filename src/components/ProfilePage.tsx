import React from 'react';
import styles from './ProfilePage.module.css'; // Ensure this path is correct

const ProfilePage: React.FC = () => {
  // You can set the profile photo statically if needed
  const profilePhoto = '/src/assets/default-profile-photo.jpg'; // Replace with your default photo path

  const handleLogout = () => {
    // Implement your logout logic here
    // For example, redirecting to logout endpoint or clearing session
    console.log('Logged out'); // Placeholder for logout action
  };

  return (
    <div className={styles.profilePage}>
      <div className={styles.card}>
        <img src={profilePhoto} alt="Profile" className={styles.profilePhoto} />
        <h1>Harsh Raj A</h1>
        <button className={styles.logoutButton} onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
}

export default ProfilePage;
