import React, { useState } from 'react';

import logo2 from '../components/images/fl_logo_2.png';
import Image from 'next/image';
const ContactUs = () => {

  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    inquiryType: 'complaint',
    uploadPic: null,
    rentalDate: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, uploadPic: file });
  };

  const styles = {
    html: {
      padding: '0',
      margin: '0',
      fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
      minHeight: '100vh',
      display: 'flex',
      color: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#ffffff', // Background color
    },
    body: {
      padding: '0',
      margin: '0',
    },
    block: {
      display: 'flex',
      flexDirection: 'column',
    },
    name: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    container: {
      fontSize: '1.3rem',
      borderRadius: '10px',
      width: '85%',
      padding: '50px',
      boxShadow: '0 54px 55px rgb(78 78 78 / 25%), 0 -12px 30px rgb(78 78 78 / 25%), 0 4px 6px rgb(78 78 78 / 25%), 0 12px 13px rgb(78 78 78 / 25%), 0 -3px 5px rgb(78 78 78 / 25%)',
      background: '#ffffff', 
    },
    input: {
      fontSize: '1.2rem',
      margin: '10px 0 10px 0px',
      borderColor: 'rgb(31, 28, 28)',
      padding: '10px',
      borderRadius: '5px',
      backgroundColor: '#e8f0fe',
    },
    textarea: {
      margin: '10px 0 10px 0px',
      padding: '5px',
      borderColor: 'rgb(31, 28, 28)',
      borderRadius: '5px',
      backgroundColor: '#e8f0fe',
      fontSize: '20px',
      resize: 'none',
    },
    h1: {
      textAlign: 'center',
      fontWeight: '600',
    },
    button: {
      padding: '10px',
      fontSize: '20px',
      width: 'auto',
      border: '3px solid black',
      borderRadius: '5px',
    },
    logo: {
      width: '180px',
      height: 'auto',
      display: 'block',
      margin: '0 auto',
      marginBottom: '20px',
    },
    additionalText: {
      fontSize: '14px',
      color: 'red',
    }
  };

  return (
    <div style={styles.html}>
      <form style={styles.container} onChange={handleInputChange}>
      <Image
            src={logo2}
            width={150}
            height={150}
            alt="Forestlake LOGO"
            style={styles.logo}
          />
        <h1 style={styles.h1}>Contact Us</h1>
        <div style={{ ...styles.block, ...styles.email }}>
          <label htmlFor="frm-name">Name</label>
          <input id="frm-name" type="text" name="name" autoComplete="email" required style={styles.input} />
        </div>
        <div style={{ ...styles.block, ...styles.phone }}>
          <label htmlFor="frm-phone">Contact number</label>
          <input id="frm-phone" type="text" name="phone" autoComplete="tel" required style={styles.input} />
        </div>
        <div style={{ ...styles.block, ...styles.phone }}>
          <label htmlFor="frm-inquiryType">Type of Inquiry</label>
          <select id="frm-inquiryType" name="inquiryType" required style={styles.input}>
            <option value="complaint">Complaint</option>
            <option value="reportBrokenMarker">Report Broken Marker</option>
            <option value="rental">Rental</option>
            <option value="purchaseFlowersCandles">Purchase Flowers and Candles</option>
          </select>
        </div>

        {formData.inquiryType === 'reportBrokenMarker' && (
          <div>
            <label style={{...styles.additionalText}} htmlFor="uploadPic">Please upload a picture of the broken marker for our reference.</label>
            <input type="file" id="uploadPic" name="uploadPic" onChange={handleFileChange} />
          </div>
        )}

        {(formData.inquiryType === 'rental' || formData.inquiryType === 'purchaseFlowersCandles') && (
          <div>
            <label style={{...styles.additionalText}} htmlFor="uploadPic">Please give us the date of your intended visit to the park.</label>
            <br />
            <input id="frm-date" type="date" name="date" autoComplete="tel" required style={styles.input} />
          </div>
        )}
        <br />
        <div style={{ ...styles.block, ...styles.message }}>
          <label htmlFor="frm-message">Please let us know how we can be of service.</label>
          <textarea id="frm-message" rows="6" name="message" style={styles.textarea}></textarea>
        </div>
        <div style={{ ...styles.block, ...styles.button }}>
          <button type="submit" style={styles.button}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;