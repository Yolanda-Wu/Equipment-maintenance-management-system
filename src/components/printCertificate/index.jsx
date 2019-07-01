import React from "react";
import { Link } from "react-router-dom";
import PickCertificate from "../pickCertificate";
import "./style.scss";

const PrintCertificate = props => {
  const { handleClose } = props;
  return (
    <>
      <div className="mask" />
      <div className="print-wrap">
        <i className="close" onClick={handleClose}>
          &#xe8b7;
        </i>
        <header>报修成功！</header>
        <PickCertificate {...props} />
        <div className="print-btn">
          <Link to="/admin">
            <label>打印报修单</label>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PrintCertificate;
