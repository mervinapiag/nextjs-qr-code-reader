import React from "react";

import logo2 from "../components/images/fl_logo_2.png";
import Image from "next/image";

import styles from "@/styles/Forms.module.css";

const UpgradeForm = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.buttonWrapper}>
        <button className={`${styles.button} ${styles.addButton}`}>Add</button>
        <button className={`${styles.button} ${styles.upgradeButton}`}>Upgrade</button>
      </div>

      <form>
        <Image
          src={logo2}
          width={200}
          height={200}
          alt="Forestlake Logo"
          className={styles.logo}
        />

        <h1>Add/Upgrade Form</h1>
        <div className={`${styles.divFlex} ${styles.divFlexEnd}`}>
          <label>Full Name:</label>
          <input type="text" required />
        </div>

        <div className={`${styles.divFlex} ${styles.divFlexRow}`}>
          <div className={styles.fullWidth}>
            <label>Date of Birth:</label>
            <input type="date" required />
          </div>

          <div className={styles.fullWidth}>
            <label>Date of Death:</label>
            <input type="date" required />
          </div>
        </div>

        <div className={styles.divFlex}>
          <label>Upload Photo:</label>
          <input type="file" required />
        </div>

        <div className={styles.divFlex}>
          <label>Motto:</label>
          <textarea></textarea>
        </div>

        <div className={styles.divFlex}>
          <button className={`${styles.button} ${styles.submitButton}`} type="button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UpgradeForm;
