import config from "../config";
import requestManager from "./requestManager";

export default class AgencyService {

  static async getListAgency(typeSearch = '', data = '') {
    const response = await requestManager.getInstance().startRequest(config.METHOD.GET,
      `${config.domain}/v1/agent?limit=${config.totalLimitGet}&${typeSearch}=${data}`,
      {}
    )
    return response;
  }

  static async getAgencyById(id) {
    const response = await requestManager.getInstance().startRequest(config.METHOD.GET,
      `${config.domain}/v1/agent/${id}`,
      {}
    )
    return response;
  }

  static async addAgency(data) {
    const response = await requestManager.getInstance().startRequest(config.METHOD.POST,
      `${config.domain}/v1/agent`,
      data
    )
    return response;
  }

  static async editAgency(id, data) {
    const response = await requestManager.getInstance().startRequest(config.METHOD.PUT,
      `${config.domain}/v1/agent/${id}`,
      data
    )
    return response;
  }

  static async deleteAgency(id) {
    const response = await requestManager.getInstance().startRequest(config.METHOD.DELETE,
      `${config.domain}/v1/agent/${id}`,
      {}
    )
    return response;
  }

}