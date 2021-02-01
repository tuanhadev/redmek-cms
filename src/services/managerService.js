import config from "../config";
import requestManager from "./requestManager";

export default class ManagerService {
  static async login(data) {
    const response = await requestManager.getInstance().startRequest(config.METHOD.POST,
      `${config.domain}/v1/admin/login`,
      data
    )
    return response;
  }
}