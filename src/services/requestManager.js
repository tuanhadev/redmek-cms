import axios from "axios";

let instance = null;

export default class ManagerRequest {
  static getInstance() {
    if (instance == null) {
      instance = new ManagerRequest();
    }
    return instance;
  }

  async startRequest(method, url, body) {
    try {
      const access_token = localStorage.getItem("access_token") || '';
      axios.defaults.headers.common['Content-Type'] = "application/json";
      const response = await axios({
        method: method,
        url: url,
        data: body,
        headers: {
          'Authorization': `Bearer ${access_token}`
        }
      })
      return response.data;
    } catch (e) {
      if (e.response.status === 401) {
        localStorage.clear();
        window.location.reload();
      }
      throw e;
    }
  }
}