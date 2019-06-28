import routers from "./routers";
import { request, requestWithToken } from "./request";

const GET = "GET";
const POST = "POST";
const PUT = "PUT";

const versionPrex = "";

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
  url = `{:U('${url}')}`;
  console.log(url);
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

export const logout = data =>
  new Promise((resolve, reject) => {
    request(getUrl(routers.logout))({
      method: GET
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
    request(getUrl(routers.getUserInfo, data))({
      method: GET
    })
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });

export const getRepairList = data =>
  new Promise((resolve, reject) => {
    request(getUrl(routers.getRepairList, data))({
      method: GET
    })
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });

export const getClient = data =>
  new Promise((resolve, reject) => {
    request(getUrl(routers.getClient, data))({
      method: GET
    })
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });

export const newClient = data =>
  new Promise((resolve, reject) => {
    request(getUrl(routers.newClient))({
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
export const addRepair = data =>
  new Promise((resolve, reject) => {
    request(getUrl(routers.addRepair))({
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

export const getMaintainers = data =>
  new Promise((resolve, reject) => {
    request(getUrl(routers.getMaintainers, data))({
      method: GET
    })
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });

export const assignMaintainer = data =>
  new Promise((resolve, reject) => {
    request(getUrl(routers.assignMaintainer))({
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

export const getRepair = data =>
  new Promise((resolve, reject) => {
    request(getUrl(routers.getRepair, data))({
      method: GET
    })
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });

export const getMaintenanceList = data =>
  new Promise((resolve, reject) => {
    request(getUrl(routers.getMaintenanceList, data))({
      method: GET
    })
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });

export const getMaintenance = data =>
  new Promise((resolve, reject) => {
    request(getUrl(routers.getMaintenance, data))({
      method: GET
    })
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });

export const updateMaintenance = data =>
  new Promise((resolve, reject) => {
    request(getUrl(routers.updateMaintenance))({
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

export const settleRepair = data =>
  new Promise((resolve, reject) => {
    request(getUrl(routers.settleRepair))({
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
