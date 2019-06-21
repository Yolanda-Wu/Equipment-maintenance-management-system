import routers from "../api/routers";
let Mock = require("mockjs");

const versionPrex = "/api";
function getUrl(router) {
  let url = `http://localhost:8080${versionPrex}${router}`;
  return url;
}

Mock.mock(getUrl(routers.login), "post", {
  "identify|1": "@integer"
});
