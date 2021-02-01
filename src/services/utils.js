import config from "../config";
import requestManager from "./requestManager";

export default class Utils {
  static async uploadImg(data) {
    const response = await requestManager.getInstance().startRequest(config.METHOD.POST,
      `${config.domain}/v1/files/upload`,
      data
    )
    return response;
  }
  static moneyFormat(price) {
    const pieces = String(price).split('');
    let ii = pieces.length;
    while ((ii -= 3) > 0) {
      if (price < 0 && ii === 1) {
        pieces.splice(ii, 0, '');
      } else {

        pieces.splice(ii, 0, ',');
      }
    }
    return pieces.join('')
  }
}