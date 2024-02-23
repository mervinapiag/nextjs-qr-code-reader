import { createContext } from "react";
import { makeAutoObservable, toJS } from "mobx";
import axios from "axios";


export class Main {
  localMode = false;
  // baseURL = "https://forestlakeparks-qr-code-production.up.railway.app";
  baseURL = "https://api-qrcode.forestlake-uat.com";
    //  baseURL = "http://localhost:1337";

  constructor() {
    makeAutoObservable(this);
  }

  _getBaseURL = () => {
    const host = window.location.host;
    if (host.includes("localhost")) {
      this.baseURL = "http://localhost:1337";
    }
  };

  _getMarker = async (params) => {
    console.log(params)
    let config = {
      method: "get",
      url: `${this.baseURL}/api/markers/${params.markerId}`,
    };

    return axios
      .request(config)
      .then((res) => {
        return res;
      })
      .catch((e) => {
        console.log(e);
        return e;
      });
  };

  _getAnnouncment = async () => {
    let config = {
      method: "get",
      url: `${this.baseURL}/api/announcements/1`,
    };

    return axios
      .request(config)
      .then((res) => {
        return res;
      })
      .catch((e) => {
        console.log(e);
        return e;
      });
  };

  _sendContactUs = async (params, file) => {
    
    console.log("updateOrder", params);

    let data = new FormData();

    data.append("name", params.name);
    data.append("contact_number", params.contactNumber);
    data.append("inquiry_type", params.inquiryType);
    data.append("text", params.message);
    
    if(params.rentalDate) {
      data.append("date_schedule", params.rentalDate);
    }

    if(file) {
      console.log("why")
      data.append("files.picture", file);
    }

    let config = {
      method: "post",
      url: `${this.baseURL}/api/contact-uses`,
      data: data,
    };

    return axios
      .request(config)
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  };
}

export default createContext(new Main());