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
            } else if (res.status === 401) {
              window.location.href = "/";
            } else {
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
