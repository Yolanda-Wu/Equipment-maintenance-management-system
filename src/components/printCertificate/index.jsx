import React from "react";
import PickCertificate from "../pickCertificate";
import "./style.scss";

const PrintCertificate = props => {
  return (
    <div className="print-wrap">
      <header>报修成功！</header>
      <PickCertificate />
      <div className="print-btn">
        <label>打印报修单</label>
      </div>
    </div>
  );
};

export default PrintCertificate;
