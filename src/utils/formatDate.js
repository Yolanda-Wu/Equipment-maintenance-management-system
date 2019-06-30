const formatDate = date => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  var h = date.getHours();
  var minute = date.getMinutes();
  minute = minute < 10 ? "0" + minute : minute;
  let seconds = date.getSeconds();
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return `${year}/${month}/${day} ${h}:${minute}:${seconds}`;
};

export default formatDate;
