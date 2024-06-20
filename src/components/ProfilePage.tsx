import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDribbble, faTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import styles from './ProfilePage.module.css'; // Ensure this path is correct

const ProfilePage: React.FC = () => {
  const [profilePhoto, setProfilePhoto] = useState<string>('/src/assets/default-profile-photo.jpg'); // Replace with your default photo path

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setProfilePhoto(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    // Implement your logout logic here
    alert('Logout functionality will be implemented here.');
  };

  return (
    <div className={styles.profilePage}>
      <div className={styles.card}>
        <img src={profilePhoto} alt="Profile" className={styles.profilePhoto} />
        <input type="file" onChange={handlePhotoChange} className={styles.photoInput} />
        <h1>Harsh Raj A</h1>
        <button onClick={handleLogout} className={styles.logoutButton}>Logout</button>
         </div>
      
    </div>
  );
}

export default ProfilePage;
