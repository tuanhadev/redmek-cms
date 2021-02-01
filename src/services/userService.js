import config from "../config";
import requestManager from "./requestManager";

export default class UserService {

  static async getListUser(typeSearch = '', data = '') {
    const response = await requestManager.getInstance().startRequest(config.METHOD.GET,
      `${config.domain}/v1/users?limit=${config.totalLimitGet}${data && `&${typeSearch}=${data}`}`,
      {}
    )
    return response;
  }

  static async getUserById(id) {
    const response = await requestManager.getInstance().startRequest(config.METHOD.GET,
      `${config.domain}/v1/users/${id}`,
      {}
    )
    return response;
  }

  static async addUser(data) {
    const response = await requestManager.getInstance().startRequest(config.METHOD.POST,
      `${config.domain}/v1/users`,
      data
    )
    return response;
  }

  static async editUser(id, data) {
    const response = await requestManager.getInstance().startRequest(config.METHOD.PUT,
      `${config.domain}/v1/users/${id}`,
      data
    )
    return response;
  }

  static async deleteUser(id) {
    const response = await requestManager.getInstance().startRequest(config.METHOD.DELETE,
      `${config.domain}/v1/users/${id}`,
      {}
    )
    return response;
  }

}