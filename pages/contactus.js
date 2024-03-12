import React, { useState, useContext } from "react";

import logo2 from "../components/images/fl_logo_2.png";
import Image from "next/image";
import MainStore from "../store/MainStore";
import mediaQueries from "@/styles/MediaQueries.module.css";


const ContactUs = () => {
  const store = useContext(MainStore);
  const [file, setfile] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [inquiryType, setInquiryType] = useState("complaint");
  const [message, setMessage] = useState("");
  const [rentalDate, setRentalDate] = useState(null);

  const onFilesChange = (files) => {
    console.log(files[0]);
    setfile(files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    store
      ._sendContactUs(
        {
          name,
          contactNumber,
          inquiryType,
          message,
          rentalDate,
        },
        file
      )
      .then((res) => {
        if (res.status) {
          setSuccessMessage("Form submitted successfully!");
          setName("");
          setInquiryType("inquiries");
          setRentalDate("");
          setMessage("");
          setContactNumber("");
        }
      });
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const styles = {
    html: {
      padding: "0",
      margin: "0",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "black",
      background: "#ffffff",
    },
    body: {
      padding: "0",
      margin: "0",
    },
    block: {
      display: "flex",
      flexDirection: "column",
      marginTop: 10,
    },
    name: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    container: {
      width: '60%',
      maxWidth: 600,
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 8px',
      transition: 'transform 0.3s ease-in-out 0s',
      backgroundColor: 'white',
      margin: '20px auto',
      //fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
      fontFamily: 'Archivo Black, sans-serif',
      backgroundSize: '100% 100%',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
    },
    formDetails: {
      padding: 20,
      paddingTop: 0,
    },
    input: {
      // fontSize: "1.2rem",
      // margin: "10px 0 10px 0px",
      // borderColor: "rgb(31, 28, 28)",
      // padding: "10px",
      // borderRadius: "5px",
      // backgroundColor: "#e8f0fe",

      padding: '0.375rem 0.75rem',
      fontSize: '1.2rem',
      fontWeight: '400',
      lineHeight: '1.5',
      color: '#333',
      backgroundColor: '#fff',
      backgroundClip: 'padding-box',
      border: '1px solid #ced4da',
      borderRadius: 6,
      transition: 'border-color .15s ease-in-out, box-shadow .15s ease-in-out',
      height: 42,
      marginTop: 6,
      fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
      width: '100%',
    },
    textarea: {
      padding: '0.375rem 0.75rem',
      fontSize: '1.2rem',
      fontWeight: '400',
      lineHeight: '1.5',
      color: '#333',
      backgroundColor: '#fff',
      backgroundClip: 'padding-box',
      border: '1px solid #ced4da',
      borderRadius: 6,
      transition: 'border-color .15s ease-in-out, box-shadow .15s ease-in-out',
      marginTop: 10,
      fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
      resize: "none",
    },
    h1: {
      textAlign: "center",
      fontWeight: "600",
    },
    button: {
      fontSize: 16,
      fontWeight: 600,
      textTransform: 'uppercase',
      width: "100%",
      borderRadius: 6,
      backgroundColor: '#01683f',
      padding: 15,
      boxShadow: 0,
      border: 0,
      marginTop: 20,
      cursor: 'pointer',
    },
    logo: {
      width: 200,
      height: 200,
      display: "block",
      margin: "0 auto",
      marginBottom: "20px",
    },
    additionalText: {
      fontSize: "14px",
      color: "red",
    },
    label: {
      color: '#333',
      fontWeight: '500',
    }
  };

  return (
    <div style={styles.html}>
      <form className={mediaQueries.contactUsForm} style={styles.container} onSubmit={handleSubmit}>
        <h1 style={styles.h1}>Contact Us</h1>

        <Image
          src={logo2}
          width={150}
          height={150}
          alt="Forestlake LOGO"
          style={styles.logo}
        />

        <div style={styles.formDetails} className={mediaQueries.formDetails}>
          <div style={{ ...styles.block, ...styles.email }}>
            <label htmlFor="frm-name" style={styles.label}>Full Name:</label>
            <input
              id="frm-name"
              type="text"
              name="name"
              autoComplete="email"
              required
              style={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div style={{ ...styles.block, ...styles.phone }}>
            <label htmlFor="frm-phone" style={styles.label}>Contact number:</label>
            <input
              id="frm-phone"
              type="text"
              name="phone"
              autoComplete="tel"
              required
              style={styles.input}
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>
          <div style={{ ...styles.block, ...styles.phone }}>
            <label htmlFor="frm-inquiryType" style={styles.label}>Type of Inquiry:</label>
            <select
              id="frm-inquiryType"
              name="inquiryType"
              required
              style={styles.input}
              value={inquiryType}
              onChange={(e) => setInquiryType(e.target.value)}
            >
              <option value="rental">Rentals</option>
              <option value="purchase_flower_candle">
                Purchase Flowers and Candles
              </option>
              <option value="report_broken_marker">Report Broken Marker</option>
              <option value="inquiries">Inquiries</option>

            </select>
          </div>

          {inquiryType === "report_broken_marker" && (
            <div>
              <label style={{ ...styles.additionalText }} htmlFor="uploadPic">
                Please upload a picture of the broken marker for our reference.
              </label>
              <input
                type="file"
                id="uploadPic"
                name="uploadPic"
                onChange={(e) => onFilesChange(e.target.files)}
              />
            </div>
          )}

          {(inquiryType === "rental" ||
            inquiryType === "purchase_flower_candle") && (
            <div>
              <label style={{ ...styles.additionalText }} htmlFor="uploadPic">
                Please give us the date of your intended visit to the park.
              </label>
              <br />
              <input
                id="frm-date"
                type="date"
                name="rentalDate"
                autoComplete="tel"
                required
                style={styles.input}
                onChange={(e) => setRentalDate(e.target.value)}
                value={rentalDate}
              />
            </div>
          )}
          <br />
          <div style={{ ...styles.block, ...styles.message }}>
            <label htmlFor="frm-message" style={styles.label}>
              Please let us know how we can be of service:
            </label>
            <textarea
              id="frm-message"
              rows="6"
              name="message"
              style={styles.textarea}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <div>
            <button type="submit" style={styles.button}>
              Submit
            </button>
          </div>
        </div>
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      </form>
    </div>
  );
};

export default ContactUs;
