import routers from "./routers";
import { request, requestWithToken } from "./request";

const GET = "GET";
const POST = "POST";
const PUT = "PUT";

const versionPrex = "/api";

function getUrl(router, params) {
  let url = `${versionPrex}${router}`;
  let paramsArray = [];
  if (params) {
    Object.keys(params).forEach(key =>
      paramsArray.push(key + "=" + params[key])
    );
    if (url.search(/\?/) === -1) {
      url += "?" + paramsArray.join("&");
    } else {
      url += "&" + paramsArray.join("&");
    }
  }
  return url;
}

export const login = data =>
  new Promise((resolve, reject) => {
    request(getUrl(routers.login))({
      method: POST,
      body: JSON.stringify(data)
    })
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });

export const getUserInfo = data =>
  new Promise((resolve, reject) => {
    requestWithToken(getUrl(routers.getUserInfo, data))({
      method: GET
    })
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
