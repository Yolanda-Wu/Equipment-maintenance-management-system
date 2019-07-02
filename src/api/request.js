import LocalStorage from "../utils/localStorage";

export const request = url => config =>
  new Promise((resolve, reject) => {
    fetch(url, {
      headers: {
        "Content-Type": "application/json"
      },
      ...config
    })
      .then(res => {
        res
          .json()
          .then(responseJson => {
            if (responseJson.status === 200) {
              resolve(responseJson.data);
            } else if (res.status === 401 || responseJson.status === 401) {
              if (window.location.hash !== "#/") {
                window.location.href = "#/";
              }
            } else if (res.status === 400 || responseJson.status === 400) {
              resolve(responseJson);
            } else {
              resolve(responseJson.err_msg);
            }
          })
          .catch(err => {
            reject(err);
          });
      })
      .catch(err => {
        reject(err);
      });
  });

export const requestWithToken = url => config =>
  request(url)({
    ...config,
    headers: {
      Authorization: `Bearer ${LocalStorage["jwt_token"]}`,
      "content-type": "application/json"
    }
  });
