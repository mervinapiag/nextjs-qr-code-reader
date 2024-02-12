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

}

export default createContext(new Main());